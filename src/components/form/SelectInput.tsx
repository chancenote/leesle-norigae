"use client";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: readonly SelectOption[];
  placeholder?: string;
}

export default function SelectInput({
  label,
  required,
  value,
  onChange,
  options,
  placeholder,
}: SelectInputProps) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide uppercase text-gray-muted mb-2">
        {label}
        {required && <span className="text-gold ml-0.5 normal-case">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-light rounded-lg px-4 py-3 text-sm transition-all duration-200 font-body bg-white appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
