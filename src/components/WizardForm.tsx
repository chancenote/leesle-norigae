"use client";

import { useState, useCallback } from "react";
import type { GuestFormData, TimeSlot } from "@/types";
import { useTimeSlots } from "@/hooks/useTimeSlots";
import { useReservation } from "@/hooks/useReservation";
import { useToast } from "@/hooks/useToast";
import { useTranslation } from "@/i18n/useTranslation";
import ProgressBar from "./ProgressBar";
import StepDateTime from "./steps/StepDateTime";
import StepGuestInfo from "./steps/StepGuestInfo";
import StepReview from "./steps/StepReview";
import Confirmation from "./steps/Confirmation";

export default function WizardForm() {
  const { t } = useTranslation();
  const { showToast } = useToast();

  // Step state
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1 state
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const { slots, loading: slotsLoading, fetchSlots } = useTimeSlots();

  // Step 2 state
  const [formData, setFormData] = useState<GuestFormData>({
    guestName: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    nationality: "",
    partySize: 1,
    specialRequest: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Step 3 state
  const [specialRequest, setSpecialRequest] = useState("");

  // Confirmation state
  const [confirmationRef, setConfirmationRef] = useState("");
  const { isSubmitting, setIsSubmitting, checkCapacity, createReservation } =
    useReservation();

  // Handlers
  const handleSelectDate = useCallback(
    (date: string) => {
      setSelectedDate(date);
      setSelectedSlot(null);
      fetchSlots(date);
    },
    [fetchSlots],
  );

  const handleSelectSlot = useCallback((slot: TimeSlot) => {
    setSelectedSlot(slot);
    setFormData((prev) => ({ ...prev, partySize: 1 }));
  }, []);

  const handleFormChange = useCallback((partial: Partial<GuestFormData>) => {
    setFormData((prev) => ({ ...prev, ...partial }));
    // Clear errors for changed fields
    setErrors((prev) => {
      const next = { ...prev };
      if ("guestName" in partial) delete next.name;
      if ("email" in partial) delete next.email;
      if ("phoneNumber" in partial) delete next.phone;
      if ("partySize" in partial) delete next.party;
      return next;
    });
  }, []);

  const goTo = useCallback((step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const validateStep2 = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.guestName.trim()) {
      newErrors.name = t("err_name");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t("err_email");
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phone = t("err_phone");
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      showToast(t("toast_validation"), "error");
      return false;
    }
    return true;
  }, [formData, t, showToast]);

  const handleStep1Next = useCallback(() => {
    if (!selectedDate || !selectedSlot) return;
    goTo(2);
  }, [selectedDate, selectedSlot, goTo]);

  const handleStep2Next = useCallback(() => {
    if (!validateStep2()) return;
    goTo(3);
  }, [validateStep2, goTo]);

  const handleSubmit = useCallback(async () => {
    if (!selectedSlot || !selectedDate) return;
    setIsSubmitting(true);

    try {
      // Re-check capacity
      const fresh = await checkCapacity(selectedSlot.id);
      if (fresh) {
        const remaining = fresh.max_capacity - fresh.current_count;
        if (formData.partySize > remaining) {
          showToast(t("toast_capacity"), "error");
          setIsSubmitting(false);
          return;
        }
      }

      const result = await createReservation({
        time_slot_id: selectedSlot.id,
        guest_name: formData.guestName.trim(),
        email: formData.email.trim(),
        country_code: formData.countryCode,
        phone_number: formData.phoneNumber.trim(),
        nationality: formData.nationality || null,
        party_size: formData.partySize,
        special_request: specialRequest.trim() || null,
      });

      setConfirmationRef(result.id.substring(0, 8).toUpperCase());
      goTo(4);
    } catch {
      showToast(t("toast_submit_error"), "error");
    } finally {
      setIsSubmitting(false);
    }
  }, [
    selectedSlot,
    selectedDate,
    formData,
    specialRequest,
    checkCapacity,
    createReservation,
    setIsSubmitting,
    showToast,
    t,
    goTo,
  ]);

  const maxParty = selectedSlot
    ? selectedSlot.max_capacity - selectedSlot.current_count
    : 1;

  return (
    <main className="max-w-2xl mx-auto px-6 pb-24">
      <ProgressBar currentStep={currentStep} />

      {currentStep === 1 && (
        <StepDateTime
          selectedDate={selectedDate}
          onSelectDate={handleSelectDate}
          slots={slots}
          slotsLoading={slotsLoading}
          selectedSlot={selectedSlot}
          onSelectSlot={handleSelectSlot}
          onNext={handleStep1Next}
        />
      )}

      {currentStep === 2 && (
        <StepGuestInfo
          formData={formData}
          onFormChange={handleFormChange}
          maxParty={maxParty}
          errors={errors}
          onNext={handleStep2Next}
          onBack={() => goTo(1)}
        />
      )}

      {currentStep === 3 && selectedDate && selectedSlot && (
        <StepReview
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          formData={formData}
          specialRequest={specialRequest}
          onSpecialRequestChange={setSpecialRequest}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
          onBack={() => goTo(2)}
        />
      )}

      {currentStep === 4 && selectedSlot && selectedDate && (
        <Confirmation
          refId={confirmationRef}
          date={selectedDate}
          startTime={selectedSlot.start_time}
          endTime={selectedSlot.end_time}
          partySize={formData.partySize}
        />
      )}
    </main>
  );
}
