"use client";

import type { TimeSlot } from "@/types";
import Calendar from "@/components/calendar/Calendar";
import TimeSlotList from "@/components/slots/TimeSlotList";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/i18n/useTranslation";

interface StepDateTimeProps {
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
  slots: TimeSlot[];
  slotsLoading: boolean;
  selectedSlot: TimeSlot | null;
  onSelectSlot: (slot: TimeSlot) => void;
  onNext: () => void;
}

export default function StepDateTime({
  selectedDate,
  onSelectDate,
  slots,
  slotsLoading,
  selectedSlot,
  onSelectSlot,
  onNext,
}: StepDateTimeProps) {
  const { t } = useTranslation();

  return (
    <div className="step-section">
      <h2 className="font-heading text-xl font-bold mb-1">{t("step1_title")}</h2>
      <p className="text-sm text-gray-muted mb-8">
        {t("hero_desc").replace(/<br\s*\/?>/g, " ").substring(0, 60)}
      </p>

      <Calendar selectedDate={selectedDate} onSelectDate={onSelectDate} />

      {selectedDate && (
        <div className="animate-fadeInUp">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-5 bg-gold rounded-full" />
            <h3 className="font-heading font-bold text-base">
              {t("slot_title")}
            </h3>
          </div>
          <TimeSlotList
            slots={slots}
            loading={slotsLoading}
            selectedSlotId={selectedSlot?.id ?? null}
            onSelectSlot={onSelectSlot}
          />
        </div>
      )}

      <div className="mt-10 flex justify-end">
        <Button
          onClick={onNext}
          disabled={!selectedDate || !selectedSlot}
        >
          {t("btn_next")}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
