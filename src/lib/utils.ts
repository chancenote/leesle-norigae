import type { Lang } from "@/types";

export function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function formatTime(timeStr: string, lang: Lang): string {
  const [h, m] = timeStr.split(":");
  const hour = parseInt(h, 10);
  if (lang === "ko") {
    return `${hour < 12 ? "오전" : "오후"} ${hour > 12 ? hour - 12 : hour}:${m}`;
  }
  const ampm = hour >= 12 ? "PM" : "AM";
  const h12 = hour % 12 || 12;
  return `${h12}:${m} ${ampm}`;
}

export function formatDisplayDate(dateStr: string, lang: Lang): string {
  const d = new Date(dateStr + "T00:00:00");
  const locale = lang === "ko" ? "ko-KR" : "en-US";
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
}
