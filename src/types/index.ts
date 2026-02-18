export interface TimeSlot {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  max_capacity: number;
  current_count: number;
  is_active: boolean;
}

export interface GuestFormData {
  guestName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  nationality: string;
  partySize: number;
  specialRequest: string;
}

export interface ReservationPayload {
  time_slot_id: string;
  guest_name: string;
  email: string;
  country_code: string;
  phone_number: string;
  nationality: string | null;
  party_size: number;
  special_request: string | null;
}

export type Lang = "en" | "ko";

export type ToastType = "error" | "success";

export interface ToastState {
  message: string;
  type: ToastType;
  visible: boolean;
}
