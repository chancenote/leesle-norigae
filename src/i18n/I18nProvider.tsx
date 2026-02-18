"use client";

import { createContext, useState, useCallback, type ReactNode } from "react";
import type { Lang } from "@/types";
import { dictionaries, type DictKey } from "./dictionaries";

interface I18nContextValue {
  lang: Lang;
  toggle: () => void;
  t: (key: DictKey, params?: Record<string, string | number>) => string;
}

export const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  toggle: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ko" : "en"));
  }, []);

  const t = useCallback(
    (key: DictKey, params?: Record<string, string | number>) => {
      let str: string =
        dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          str = str.replace(`{${k}}`, String(v));
        });
      }
      return str;
    },
    [lang],
  );

  return (
    <I18nContext.Provider value={{ lang, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
}
