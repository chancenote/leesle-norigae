"use client";

interface TextInputProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email";
  error?: string;
}

export default function TextInput({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: TextInputProps) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide uppercase text-gray-muted mb-2">
        {label}
        {required && <span className="text-gold ml-0.5 normal-case">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full border rounded-lg px-4 py-3 text-sm transition-all duration-200 font-body bg-white ${
          error ? "border-red-400" : "border-gray-light"
        }`}
      />
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
