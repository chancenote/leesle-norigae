"use client";

import { useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { ReservationPayload } from "@/types";

export function useReservation() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const checkCapacity = useCallback(
    async (slotId: string): Promise<{ current_count: number; max_capacity: number } | null> => {
      if (!supabase) return null;
      const { data, error } = await supabase
        .from("time_slots")
        .select("current_count, max_capacity")
        .eq("id", slotId)
        .single();
      if (error) throw error;
      return data;
    },
    [],
  );

  const createReservation = useCallback(
    async (payload: ReservationPayload): Promise<{ id: string }> => {
      if (!supabase) {
        // Demo mode
        return {
          id: "DEMO-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
        };
      }
      const { data, error } = await supabase
        .from("reservations")
        .insert(payload)
        .select("id")
        .single();
      if (error) throw error;
      return data;
    },
    [],
  );

  return { isSubmitting, setIsSubmitting, checkCapacity, createReservation };
}
