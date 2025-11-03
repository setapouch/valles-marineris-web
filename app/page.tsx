import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default function RootPage() {
  // získáme všechny hlavičky HTTP requestu
  const acceptedLanguages = headers().get("accept-language");

  // zjistíme, zda obsahuje češtinu (např. cs, cs-CZ)
  const isCzech = acceptedLanguages?.toLowerCase().includes("cs");

  // přesměrujeme podle preferovaného jazyka
  if (isCzech) {
    redirect("/cs");
  } else {
    redirect("/en");
  }
}

