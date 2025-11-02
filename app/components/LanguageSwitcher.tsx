"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/cs";

  const isCzech = pathname.startsWith("/cs");
  const isEnglish = pathname.startsWith("/en");

  // pokud je root "/" přesměrujeme na /cs jako výchozí
  const normalized = pathname === "/" ? "/cs" : pathname;

  const switchLink = normalized.startsWith("/cs")
    ? normalized.replace("/cs", "/en")
    : normalized.replace("/en", "/cs");

  const switchLabel = normalized.startsWith("/cs") ? "🇬🇧 English" : "🇨🇿 Čeština";

  // Pokud cesta neobsahuje ani /cs ani /en (výjimečně), nabídni odkaz na /cs
  if (!isCzech && !isEnglish) {
    return (
      <nav>
        <Link href="/cs">🇬🇧 English</Link>
      </nav>
    );
  }

  return (
    <nav>
      <Link href={switchLink}>{switchLabel}</Link>
    </nav>
  );
}