"use client";

import { I18nProvider } from "@/i18n/I18nProvider";
import { ToastContext } from "@/hooks/useToast";
import { useToastProvider } from "@/hooks/useToast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WizardForm from "@/components/WizardForm";
import Toast from "@/components/ui/Toast";

export default function Home() {
  const toastValue = useToastProvider();

  return (
    <I18nProvider>
      <ToastContext.Provider value={toastValue}>
        <Header />
        <Hero />
        <WizardForm />
        <Toast />
      </ToastContext.Provider>
    </I18nProvider>
  );
}
