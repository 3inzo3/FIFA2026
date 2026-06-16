# MZN World Cup ⚽

Asmeninis **2026 FIFA Pasaulio čempionato** dashboard'as — vienas failas
[`index.html`](./index.html) (grynas HTML + CSS + JavaScript, be jokio build
proceso, be npm, be framework'ų).

## Kaip naudoti
Atidaryk `index.html` naršyklėje (telefone ar kompiuteryje). Duomenys
įsikrauna automatiškai. Spausk **„Atnaujinti"**, kad gautum naujausius rezultatus.

## Skiltys
- **Rungtynės** — šiandienos ir artimiausios. Laikas **Lietuvos laiku (LT)**,
  grupė, statusas (būsima / vyksta / baigta su rezultatu) ir **HYPE 🔥** balas.
  Galima rūšiuoti pagal laiką arba pagal hype.
- **Lentelės** — visų grupių lentelės. 1–2 vietos (kyla) žymimos **žaliai**,
  3-ia (galimai kyla) — **geltonai**.
- **Tinklelis** — Round of 32 → Finalas struktūra. Komandos užpildomos, kai
  grupė pilnai sužaista; kitur — „TBD".
- **Koeficientai** — „Netrukus" (atskira 2 fazė).

## Duomenų šaltinis
- **TheSportsDB** v1 API (nemokamas raktas `123`), kviečiamas tiesiai iš naršyklės.
- Lyga: **FIFA World Cup, `idLeague = 4429`**.
- Sezonas nustatomas automatiškai (iš eilės bandoma `2026`, `2026-2027`, `2025-2026`
  — naudojamas tas, kuris realiai grąžina rungtynes).
- Pagrindinis endpointas: **`eventsseason.php`** — iš jo rodomos rungtynės IR
  apskaičiuojamos grupių lentelės. Atsarginis: **`eventsday.php`** (tik šios dienos).
- Jei API negrąžina duomenų — rodomas aiškus klaidos pranešimas. **Jokių išgalvotų
  rezultatų.**

## HYPE balas (1–100)
Skaičiuojamas vietoje (tokio API nėra) pagal apytikslius FIFA reitingus +
bonusai „didžiosioms" komandoms ir lemiamoms / atkrintamosioms rungtynėms.
Rodomas kaip 🔥 su spalva: žalia (žemas) → geltona (vidutinis) → raudona (aukštas).

## Laikas
Visi laikai konvertuojami į **Lietuvos laiką** (`Europe/Vilnius`, vasarą EEST/UTC+3)
ir žymimi „(LT)". Datos rodomos kaip „Šiandien" / „Rytoj" / pilna data.
