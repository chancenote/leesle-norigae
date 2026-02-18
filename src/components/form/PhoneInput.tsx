"use client";

import { COUNTRY_CODES } from "@/constants/countries";

interface PhoneInputProps {
  label: string;
  required?: boolean;
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

export default function PhoneInput({
  label,
  required,
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  placeholder,
  error,
}: PhoneInputProps) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide uppercase text-gray-muted mb-2">
        {label}
        {required && <span className="text-gold ml-0.5 normal-case">*</span>}
      </label>
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className={`border rounded-lg px-3 py-3 text-sm w-[7.5rem] shrink-0 transition-all duration-200 font-body bg-white ${
            error ? "border-red-400" : "border-gray-light"
          }`}
          aria-label="Country code"
        >
          {COUNTRY_CODES.map((cc) => (
            <option key={cc.code} value={cc.code}>
              {cc.label}
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 border rounded-lg px-4 py-3 text-sm transition-all duration-200 font-body bg-white ${
            error ? "border-red-400" : "border-gray-light"
          }`}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
          <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
