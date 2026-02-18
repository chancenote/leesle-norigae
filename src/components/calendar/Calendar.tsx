"use client";

import { useCalendar } from "@/hooks/useCalendar";
import { useTranslation } from "@/i18n/useTranslation";
import type { DictKey } from "@/i18n/dictionaries";

interface CalendarProps {
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

const DAY_KEYS: DictKey[] = [
  "day_sun", "day_mon", "day_tue", "day_wed", "day_thu", "day_fri", "day_sat",
];

export default function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const { year, month, days, prevMonth, nextMonth, monthNames } = useCalendar();
  const { lang, t } = useTranslation();

  const monthLabel =
    lang === "ko"
      ? `${year}년 ${monthNames.ko[month]}`
      : `${monthNames.en[month]} ${year}`;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-8 mb-8 shadow-sm border border-gray-light/60">
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-lighter transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="font-heading font-bold text-lg tracking-wide">{monthLabel}</h3>
        <button
          onClick={nextMonth}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-lighter transition-colors"
          aria-label="Next month"
        >
          <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="cal-grid mb-2">
        {DAY_KEYS.map((key, i) => (
          <div
            key={key}
            className={`text-center text-[11px] font-medium tracking-wider uppercase py-2 ${
              i === 0 ? "text-red-400" : "text-gray-muted"
            }`}
          >
            {t(key)}
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="h-px bg-gray-light/60 mb-2" />

      {/* Calendar body */}
      <div className="cal-grid">
        {days.map((cell, i) => {
          if (cell.isEmpty) {
            return <div key={`empty-${i}`} className="cal-cell empty" />;
          }

          const isSunday = i % 7 === 0;
          let cls = "cal-cell";
          if (cell.isPast) cls += " disabled";
          if (cell.isToday) cls += " today";
          if (selectedDate === cell.date) cls += " selected";

          return (
            <div
              key={cell.date}
              className={`${cls} ${!cell.isPast && selectedDate !== cell.date && isSunday ? "text-red-400/70" : ""}`}
              onClick={() => !cell.isPast && onSelectDate(cell.date)}
            >
              {cell.day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
