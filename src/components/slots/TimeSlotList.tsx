"use client";

import type { TimeSlot } from "@/types";
import { formatTime } from "@/lib/utils";
import { useTranslation } from "@/i18n/useTranslation";
import Spinner from "@/components/ui/Spinner";

interface TimeSlotListProps {
  slots: TimeSlot[];
  loading: boolean;
  selectedSlotId: string | null;
  onSelectSlot: (slot: TimeSlot) => void;
}

export default function TimeSlotList({
  slots,
  loading,
  selectedSlotId,
  onSelectSlot,
}: TimeSlotListProps) {
  const { lang, t } = useTranslation();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3">
        <Spinner />
        <span className="text-xs text-gray-muted">{lang === "ko" ? "불러오는 중..." : "Loading..."}</span>
      </div>
    );
  }

  if (slots.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-3xl mb-3 opacity-30">-</div>
        <p className="text-gray-muted text-sm">{t("slot_empty")}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {slots.map((slot) => {
        const remaining = slot.max_capacity - slot.current_count;
        const isFull = remaining <= 0;
        const isSelected = selectedSlotId === slot.id;
        const start = formatTime(slot.start_time, lang);
        const end = formatTime(slot.end_time, lang);

        let cls = "slot-card";
        if (isFull) cls += " full";
        if (isSelected) cls += " selected";

        return (
          <div
            key={slot.id}
            className={cls}
            onClick={() => !isFull && onSelectSlot(slot)}
            role="button"
            tabIndex={0}
            aria-label={`${start} - ${end}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isFull) onSelectSlot(slot);
            }}
          >
            <div className="font-heading font-bold text-base mb-0.5">{start}</div>
            <div className="text-[11px] text-gray-muted mb-2">
              {start} - {end}
            </div>
            {isFull ? (
              <span className="inline-block text-[10px] font-medium text-gray-muted bg-gray-lighter px-2 py-0.5 rounded-full">
                {t("slot_full")}
              </span>
            ) : (
              <span className="inline-block text-[10px] font-medium text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                {t("slot_remaining", { n: remaining })}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
