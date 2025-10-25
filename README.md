Web bude zobrazovat interaktivní mapu marsovské lokality Valles Marineris, která je největší soustavou kaňonů ve sluneční soustavě. 
Měl by být určen pro všechny zájemce o Mars,  astronomii a vesmír obecně.

Minimální minimální funkční konfigurace:

- obecné informace o Valles marineris
- 2D interaktivní mapa s informacemi o geologii a historii různých oblastí
- informace o sondách zkoumajících tuto oblast (Mars Express, Mars Reconnaissance Orbiter)

Pravděpodobné použité technologie: html, css (Tailwind CSS), JavaScript (React + Next.js, node.js), MIcrosoft Azure 

# 🚀 Valles Marineris Explorer: Interaktivní mapa Marsu

Webová aplikace zaměřená na **Valles Marineris**, největší soustavu kaňonů ve Sluneční soustavě, s cílem vizualizovat a zpřístupnit vědecká data.

## 🎯 Cílová Skupina

Projekt je určen pro **všechny zájemce o Mars, astronomii a vesmír obecně**, poskytující detailní a poutavé informace o této unikátní marsovské lokalitě.

---

## ✨ Minimální Funkční Konfigurace (MVP)

Prototyp projektu bude obsahovat následující klíčové funkcionality:

- **Obecné Informace o Valles Marineris:** Stručný úvod, rozměry a význam kaňonového systému.
- **2D Interaktivní Mapa:** Umožní prozkoumávat různé regiony Valles Marineris s vizuálním překryvem dat.
    - Zobrazování **informací o geologii** (typy hornin, rysy reliéfu) a **historii** (formování, vodní aktivita) po interakci s mapou.
- **Informace o Sondách:** Přehled hlavních misí zkoumajících oblast:
    - **Mars Express** (ESA)
    - **Mars Reconnaissance Orbiter (MRO)** (NASA)

---

## 🛠️ Předpokládané Technologie

Projekt bude vyvíjen s důrazem na moderní webové technologie a škálovatelnost v cloudu.

- **Frontend & Rozhraní:** `HTML`, `CSS` (Tailwind CSS), `JavaScript`
- **Framework:** `React` / `Next.js` (pro server-side rendering a statické generování)
- **Backend & Data:** `Node.js` (pro API a serverové funkce)
- **Cloud & Infrastruktura:** `Microsoft Azure`

---

## 🗺️ Klíčové Mapové a Datové Zdroje

Pro vizualizaci a geologický kontext budou využita volně dostupná data z kosmických agentur:

1. **NASA MGS – MOLA (Mars Orbiter Laser Altimeter):**
    - **Typ dat:** **Topografie** a **Výškové modely (DEM)**.
    - **Význam:** Nezbytné pro zobrazení hloubky a struktury kaňonů.
2. **NASA MRO – HiRISE/CTX (High Resolution Imaging Science Experiment):**
    - **Typ dat:** Snímky s **vysokým a středním rozlišením**.
    - **Význam:** Poskytuje vizuální základ mapy a ultra-detailní pohledy na lokální geologické rysy.
3. **USGS (U.S. Geological Survey) Astrogeology:**
    - **Typ dat:** **Geologické mapy** a sady minerálního složení.
    - **Význam:** Klíčové pro implementaci informační vrstvy o geologii a historii regionů.
