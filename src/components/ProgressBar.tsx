"use client";

import { useTranslation } from "@/i18n/useTranslation";
import type { DictKey } from "@/i18n/dictionaries";

interface ProgressBarProps {
  currentStep: number;
}

const STEPS: { num: number; labelKey: DictKey }[] = [
  { num: 1, labelKey: "step1_label" },
  { num: 2, labelKey: "step2_label" },
  { num: 3, labelKey: "step3_label" },
];

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const { t } = useTranslation();

  if (currentStep > 3) return null;

  return (
    <div className="flex items-center justify-center mb-12">
      {STEPS.map((step, i) => {
        const isActive = step.num <= currentStep;
        const isCurrent = step.num === currentStep;

        return (
          <div key={step.num} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              {/* Step circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "border-1.5 border-gray-light text-gray-muted bg-white"
                } ${isCurrent ? "ring-4 ring-primary/10" : ""}`}
              >
                {isActive && step.num < currentStep ? (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.num
                )}
              </div>
              {/* Label */}
              <span
                className={`text-[11px] font-medium tracking-wide hidden sm:block transition-colors ${
                  isActive ? "text-primary" : "text-gray-muted"
                }`}
              >
                {t(step.labelKey)}
              </span>
            </div>

            {/* Connector line */}
            {i < STEPS.length - 1 && (
              <div className="w-16 sm:w-24 h-px mx-3 sm:mx-4 mb-5 sm:mb-5">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    background:
                      step.num < currentStep
                        ? "#000000"
                        : "#e5e5e5",
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
