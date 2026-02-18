"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
import type { ToastType, ToastState } from "@/types";

interface ToastContextValue {
  toast: ToastState;
  showToast: (message: string, type?: ToastType) => void;
}

export const ToastContext = createContext<ToastContextValue>({
  toast: { message: "", type: "error", visible: false },
  showToast: () => {},
});

export function useToastProvider() {
  const [toast, setToast] = useState<ToastState>({
    message: "",
    type: "error",
    visible: false,
  });
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const showToast = useCallback((message: string, type: ToastType = "error") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ message, type, visible: true });
    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4000);
  }, []);

  return { toast, showToast };
}

export function useToast() {
  return useContext(ToastContext);
}
