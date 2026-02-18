"use client";

import { formatDisplayDate, formatTime } from "@/lib/utils";
import { useTranslation } from "@/i18n/useTranslation";

interface ConfirmationProps {
  refId: string;
  date: string;
  startTime: string;
  endTime: string;
  partySize: number;
}

export default function Confirmation({
  refId,
  date,
  startTime,
  endTime,
  partySize,
}: ConfirmationProps) {
  const { lang, t } = useTranslation();

  return (
    <div className="step-section text-center py-12">
      {/* Checkmark animation */}
      <svg className="mx-auto mb-8" width="72" height="72" viewBox="0 0 80 80">
        <circle
          className="confirm-circle"
          cx="40"
          cy="40"
          r="38"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
        />
        <path
          className="confirm-check"
          d="M24 42 L34 52 L56 30"
          fill="none"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h2 className="font-heading text-2xl font-bold mb-2">
        {t("confirm_title")}
      </h2>
      <p className="text-gray-muted text-sm mb-8">{t("confirm_desc")}</p>

      {/* Decorative line */}
      <div className="deco-line mb-8 max-w-[200px] mx-auto">
        <div className="deco-diamond" />
      </div>

      {/* Confirmation details */}
      <div className="inline-block bg-white rounded-2xl p-6 sm:p-8 text-left shadow-sm border border-gray-light/60 min-w-[280px]">
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-light/40">
            <span className="text-xs text-gray-muted tracking-wide uppercase">
              {t("confirm_ref")}
            </span>
            <span className="font-mono font-bold tracking-wider">{refId}</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-xs text-gray-muted tracking-wide uppercase">
              {t("review_date")}
            </span>
            <span className="text-sm font-medium">
              {formatDisplayDate(date, lang)}
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-xs text-gray-muted tracking-wide uppercase">
              {t("review_time")}
            </span>
            <span className="text-sm font-medium">
              {formatTime(startTime, lang)} - {formatTime(endTime, lang)}
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-xs text-gray-muted tracking-wide uppercase">
              {t("review_guests")}
            </span>
            <span className="text-sm font-medium">{partySize}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
