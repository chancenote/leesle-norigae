"use client";

import { useToast } from "@/hooks/useToast";

export default function Toast() {
  const { toast } = useToast();

  const bgColor = toast.type === "error" ? "bg-red-600" : "bg-primary";

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full text-white text-sm font-medium z-50 transition-all duration-300 pointer-events-none shadow-lg ${bgColor} ${
        toast.visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
    >
      {toast.message}
    </div>
  );
}
