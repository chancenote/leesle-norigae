"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="pt-28 pb-14">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Decorative knot motif */}
        <div className="deco-line mb-8 max-w-xs mx-auto">
          <div className="deco-diamond" />
        </div>

        <h1 className="font-heading text-3xl md:text-[2.5rem] font-bold tracking-tight mb-4 leading-tight">
          {t("hero_title")}
        </h1>

        <p
          className="text-gray-muted text-base md:text-lg leading-relaxed max-w-md mx-auto font-light"
          dangerouslySetInnerHTML={{ __html: t("hero_desc") }}
        />

        {/* Bottom decorative line */}
        <div className="deco-line mt-10 max-w-xs mx-auto">
          <div className="deco-diamond" />
        </div>
      </div>
    </section>
  );
}
