"use client";

import { useTranslations } from "next-intl";

export default function IntroSection() {
  const t = useTranslations("Intro");

  return (
    <section style={{ padding: "2rem" }}>
      <h2>{t("title")}</h2>
      <p>{t("text")}</p>
    </section>
  );
}
