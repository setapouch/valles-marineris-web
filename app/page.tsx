import IntroSection from "./components/IntroSectionCS";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Valles Marineris – Grand Canyon Marsu
      </h1>
      <p style={{ maxWidth: "600px", textAlign: "center", lineHeight: "1.6" }}>
        Valles Marineris je obrovský systém kaňonů rozprostírající se přes
        čtvrtinu obvodu planety Mars. Tento web nabízí přehledné informace, mapy
        a vizualizace jedné z nejpůsobivějších geologických struktur ve Sluneční
        soustavě.
      </p>
      <IntroSection />
    </main>
  );
}
