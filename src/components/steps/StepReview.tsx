"use client";

import type { GuestFormData, TimeSlot } from "@/types";
import { formatDisplayDate, formatTime } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { useTranslation } from "@/i18n/useTranslation";
import type { DictKey } from "@/i18n/dictionaries";

interface StepReviewProps {
  selectedDate: string;
  selectedSlot: TimeSlot;
  formData: GuestFormData;
  specialRequest: string;
  onSpecialRequestChange: (value: string) => void;
  isSubmitting: boolean;
  onSubmit: () => void;
  onBack: () => void;
}

export default function StepReview({
  selectedDate,
  selectedSlot,
  formData,
  specialRequest,
  onSpecialRequestChange,
  isSubmitting,
  onSubmit,
  onBack,
}: StepReviewProps) {
  const { lang, t } = useTranslation();

  const reviewItems: { key: DictKey; value: string }[] = [
    { key: "review_date", value: formatDisplayDate(selectedDate, lang) },
    {
      key: "review_time",
      value: `${formatTime(selectedSlot.start_time, lang)} - ${formatTime(selectedSlot.end_time, lang)}`,
    },
    { key: "review_name", value: formData.guestName },
    { key: "review_email", value: formData.email },
    {
      key: "review_phone",
      value: `${formData.countryCode} ${formData.phoneNumber}`,
    },
    { key: "review_guests", value: String(formData.partySize) },
  ];

  return (
    <div className="step-section">
      <h2 className="font-heading text-xl font-bold mb-8">{t("step3_title")}</h2>

      {/* Special Request */}
      <div className="mb-8">
        <label className="block text-xs font-medium tracking-wide uppercase text-gray-muted mb-2">
          {t("label_request")}
        </label>
        <textarea
          rows={3}
          value={specialRequest}
          onChange={(e) => onSpecialRequestChange(e.target.value)}
          placeholder={t("ph_request")}
          className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm transition-all duration-200 resize-none font-body bg-white"
        />
      </div>

      {/* Review Summary Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 mb-8 shadow-sm border border-gray-light/60">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-5 bg-gold rounded-full" />
          <h3 className="font-heading font-bold text-base">{t("review_title")}</h3>
        </div>
        <div className="space-y-3">
          {reviewItems.map((item) => (
            <div key={item.key} className="flex items-start justify-between py-2 border-b border-gray-light/40 last:border-0">
              <span className="text-xs text-gray-muted tracking-wide uppercase shrink-0">
                {t(item.key)}
              </span>
              <span className="text-sm font-medium text-right ml-4">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between">
        <Button variant="secondary" onClick={onBack} className="px-6">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("btn_back")}
        </Button>
        <Button variant="cta" onClick={onSubmit} disabled={isSubmitting}>
          <span>{t("btn_submit")}</span>
          {isSubmitting && <Spinner size="sm" />}
        </Button>
      </div>
    </div>
  );
}
