import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  // `headers()` je asynchronní v nových verzích Next.js
  const allHeaders = await headers();
  const acceptedLanguages = allHeaders.get("accept-language");

  // jednoduchá detekce češtiny
  const isCzech = acceptedLanguages?.toLowerCase().includes("cs");

  // přesměrování podle jazyka
  if (isCzech) {
    redirect("/cs");
  } else {
    redirect("/en");
  }
}
