import IntroSection from "./components/IntroSection";

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Valles Marineris – The Grand Canyon of Mars
      </h1>
      <p style={{ maxWidth: '600px', textAlign: 'center', lineHeight: '1.6' }}>
        Valles Marineris is a vast canyon system stretching over 4,000 kilometers across Mars.
        This site explores its geological features, history, and the missions that revealed it.
      </p>
      <IntroSection />
    </main>
  );
}
