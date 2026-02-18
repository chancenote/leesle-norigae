"use client";

import type { GuestFormData } from "@/types";
import TextInput from "@/components/form/TextInput";
import PhoneInput from "@/components/form/PhoneInput";
import SelectInput from "@/components/form/SelectInput";
import PartyStepper from "@/components/form/PartyStepper";
import Button from "@/components/ui/Button";
import { NATIONALITIES } from "@/constants/countries";
import { useTranslation } from "@/i18n/useTranslation";

interface StepGuestInfoProps {
  formData: GuestFormData;
  onFormChange: (data: Partial<GuestFormData>) => void;
  maxParty: number;
  errors: Record<string, string>;
  onNext: () => void;
  onBack: () => void;
}

export default function StepGuestInfo({
  formData,
  onFormChange,
  maxParty,
  errors,
  onNext,
  onBack,
}: StepGuestInfoProps) {
  const { t } = useTranslation();

  return (
    <div className="step-section">
      <h2 className="font-heading text-xl font-bold mb-8">{t("step2_title")}</h2>

      <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-light/60">
        <div className="space-y-6">
          <TextInput
            label={t("label_name")}
            required
            value={formData.guestName}
            onChange={(v) => onFormChange({ guestName: v })}
            placeholder={t("ph_name")}
            error={errors.name}
          />

          <TextInput
            label={t("label_email")}
            required
            type="email"
            value={formData.email}
            onChange={(v) => onFormChange({ email: v })}
            placeholder={t("ph_email")}
            error={errors.email}
          />

          <PhoneInput
            label={t("label_phone")}
            required
            countryCode={formData.countryCode}
            phoneNumber={formData.phoneNumber}
            onCountryCodeChange={(v) => onFormChange({ countryCode: v })}
            onPhoneNumberChange={(v) => onFormChange({ phoneNumber: v })}
            placeholder={t("ph_phone")}
            error={errors.phone}
          />

          <SelectInput
            label={t("label_nationality")}
            value={formData.nationality}
            onChange={(v) => onFormChange({ nationality: v })}
            options={NATIONALITIES}
            placeholder={t("opt_select")}
          />

          <div className="pt-2">
            <PartyStepper
              label={t("label_party")}
              required
              value={formData.partySize}
              max={maxParty}
              onChange={(v) => onFormChange({ partySize: v })}
              maxLabel={t("party_max", { n: maxParty })}
              error={errors.party}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="secondary" onClick={onBack} className="px-6">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("btn_back")}
        </Button>
        <Button onClick={onNext}>
          {t("btn_next")}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
