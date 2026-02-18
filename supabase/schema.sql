-- ============================================
-- 리슬 노리개 체험 예약 시스템 (Leesle Norigae Experience)
-- Supabase Database Schema
-- https://www.leesle.com
-- ============================================

-- 1) time_slots: 체험 가능한 시간대 관리
create table public.time_slots (
  id            uuid primary key default gen_random_uuid(),
  date          date        not null,                        -- 체험 날짜
  start_time    time        not null,                        -- 시작 시간
  end_time      time        not null,                        -- 종료 시간
  max_capacity  int         not null default 6,              -- 최대 수용 인원
  current_count int         not null default 0,              -- 현재 예약 인원
  is_active     boolean     not null default true,           -- 슬롯 활성화 여부
  created_at    timestamptz not null default now(),

  constraint chk_time_order  check (end_time > start_time),
  constraint chk_capacity    check (current_count <= max_capacity and max_capacity > 0),
  constraint uq_slot         unique (date, start_time)       -- 같은 날짜+시간 중복 방지
);

-- 2) reservations: 예약 정보
create table public.reservations (
  id              uuid primary key default gen_random_uuid(),
  time_slot_id    uuid         not null references public.time_slots(id) on delete restrict,

  -- 예약자 정보 (외국인 대상)
  guest_name      text         not null,                     -- 외국인 이름 (예: "John Smith")
  email           text         not null,                     -- 이메일
  country_code    varchar(5)   not null,                     -- 국가번호 (예: "+82", "+1")
  phone_number    varchar(20)  not null,                     -- 전화번호 (예: "1012345678")
  nationality     varchar(2),                                -- 국적 ISO 코드 (예: "US", "JP") - 선택

  -- 예약 상세
  party_size      int          not null default 1,           -- 인원 수
  special_request text,                                      -- 특별 요청사항

  -- 결제 상태
  -- pending   : 예약 접수 (결제 대기)
  -- confirmed : 예약 확정 (결제 전 수동 확정)
  -- paid      : 결제 완료
  -- cancelled : 예약 취소
  -- refunded  : 환불 완료
  -- no_show   : 노쇼
  status          varchar(20)  not null default 'pending'
    check (status in ('pending', 'confirmed', 'paid', 'cancelled', 'refunded', 'no_show')),

  created_at      timestamptz  not null default now(),
  updated_at      timestamptz  not null default now()
);

-- 3) 인덱스
create index idx_reservations_time_slot  on public.reservations(time_slot_id);
create index idx_reservations_email      on public.reservations(email);
create index idx_reservations_status     on public.reservations(status);
create index idx_reservations_created    on public.reservations(created_at desc);
create index idx_time_slots_date         on public.time_slots(date);
create index idx_time_slots_active_date  on public.time_slots(date) where is_active = true;

-- 4) updated_at 자동 갱신 트리거
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at
  before update on public.reservations
  for each row execute function public.handle_updated_at();

-- 5) 예약 생성 시 current_count 자동 증가 / 취소 시 감소
create or replace function public.update_slot_count()
returns trigger as $$
begin
  -- 새 예약 (INSERT)
  if tg_op = 'INSERT' then
    update public.time_slots
    set current_count = current_count + new.party_size
    where id = new.time_slot_id;
    return new;
  end if;

  -- 상태 변경 (UPDATE) → 취소/환불 시 감소
  if tg_op = 'UPDATE' then
    if old.status not in ('cancelled', 'refunded') and new.status in ('cancelled', 'refunded') then
      update public.time_slots
      set current_count = current_count - old.party_size
      where id = old.time_slot_id;
    end if;
    return new;
  end if;

  return null;
end;
$$ language plpgsql;

create trigger on_reservation_change
  after insert or update on public.reservations
  for each row execute function public.update_slot_count();

-- 6) RLS (Row Level Security) 정책
alter table public.time_slots enable row level security;
alter table public.reservations enable row level security;

-- time_slots: 누구나 활성 슬롯 조회 가능
create policy "Anyone can view active time slots"
  on public.time_slots for select
  using (is_active = true);

-- reservations: 예약 생성은 누구나 가능
create policy "Guests can insert reservations"
  on public.reservations for insert
  with check (true);

-- reservations: 본인 이메일로만 조회 가능 (JWT 기반)
create policy "Guests can view own reservations"
  on public.reservations for select
  using (email = current_setting('request.jwt.claims', true)::json->>'email');

-- 관리자(service_role)는 모든 권한 → Supabase 서버사이드에서 service_role 키 사용
