import "./globals.css";
import LanguageSwitcher from "./components/LanguageSwitcher";

export const metadata = {
  title: "Valles Marineris – Grand Canyon Marsu",
  description:
    "Valles Marineris je systém kaňonů na Marsu, který se táhne přes čtvrtinu obvodu planety.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "2rem",
            display: "flex",
            gap: "1rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <LanguageSwitcher />
        </div>
        {children}
      </body>
    </html>
  );
}
