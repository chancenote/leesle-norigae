"use client";

interface PartyStepperProps {
  label: string;
  required?: boolean;
  value: number;
  max: number;
  onChange: (value: number) => void;
  maxLabel?: string;
  error?: string;
}

export default function PartyStepper({
  label,
  required,
  value,
  max,
  onChange,
  maxLabel,
  error,
}: PartyStepperProps) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide uppercase text-gray-muted mb-2">
        {label}
        {required && <span className="text-gold ml-0.5 normal-case">*</span>}
      </label>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="stepper-btn"
          onClick={() => value > 1 && onChange(value - 1)}
          aria-label="Decrease"
        >
          -
        </button>
        <span className="text-2xl font-heading font-bold w-8 text-center tabular-nums">
          {value}
        </span>
        <button
          type="button"
          className="stepper-btn"
          onClick={() => value < max && onChange(value + 1)}
          aria-label="Increase"
        >
          +
        </button>
        {maxLabel && (
          <span className="text-xs text-gray-muted ml-2">{maxLabel}</span>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1.5">{error}</p>
      )}
    </div>
  );
}
