"use client";

import { useState, useCallback, useMemo } from "react";
import { formatDate } from "@/lib/utils";

export interface CalendarDay {
  date: string;
  day: number;
  isToday: boolean;
  isPast: boolean;
  isEmpty: boolean;
}

export function useCalendar() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  const [month, setMonth] = useState(() => new Date().getMonth());

  const prevMonth = useCallback(() => {
    setMonth((m) => {
      if (m === 0) {
        setYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }, []);

  const nextMonth = useCallback(() => {
    setMonth((m) => {
      if (m === 11) {
        setYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }, []);

  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const cells: CalendarDay[] = [];

    // Empty cells for padding
    for (let i = 0; i < firstDay; i++) {
      cells.push({ date: "", day: 0, isToday: false, isPast: false, isEmpty: true });
    }

    // Day cells
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      cells.push({
        date: formatDate(date),
        day: d,
        isToday: date.getTime() === today.getTime(),
        isPast: date < today,
        isEmpty: false,
      });
    }

    return cells;
  }, [year, month]);

  const monthNames = {
    en: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ],
    ko: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  };

  return { year, month, days, prevMonth, nextMonth, monthNames };
}
