import { redirect } from "next/navigation";

export default function RootPage() {
  // přesměrujeme uživatele rovnou na výchozí jazyk
  redirect("/en");
}