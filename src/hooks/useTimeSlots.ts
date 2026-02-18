"use client";

import { useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { TimeSlot } from "@/types";

export function useTimeSlots() {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSlots = useCallback(async (dateStr: string) => {
    setLoading(true);
    setError(null);
    setSlots([]);

    try {
      if (!supabase) {
        setSlots([]);
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("time_slots")
        .select("*")
        .eq("date", dateStr)
        .eq("is_active", true)
        .order("start_time");

      if (fetchError) throw fetchError;
      setSlots(data ?? []);
    } catch {
      setError("Failed to load time slots");
      setSlots([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { slots, loading, error, fetchSlots };
}
