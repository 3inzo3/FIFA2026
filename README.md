# MZN World Cup ⚽

Asmeninis **2026 FIFA Pasaulio čempionato** dashboard'as — vienas failas
[`index.html`](./index.html) (grynas HTML + CSS + JavaScript, be jokio build
proceso, be npm, be framework'ų).

## Kaip naudoti
Atidaryk `index.html` naršyklėje (telefone ar kompiuteryje). Duomenys
įsikrauna automatiškai. Spausk **„Atnaujinti"**, kad gautum naujausius rezultatus.

## Skiltys
- **Rungtynės** — būsimos ir pasibaigusios. Laikas **Lietuvos laiku (LT)**,
  grupė arba atkrintamųjų etapas (1/16, 1/8, …), miestas, statusas ir **HYPE 🔥**.
  Galima rūšiuoti pagal laiką arba pagal hype. Būsimoms rodoma laimėjimo
  tikimybė: grupėse 3-krypčių (1/X/2), atkrintamosiose 2-krypčių
  (**kas pereina toliau**, be lygiųjų).
- **Lentelės** — visų grupių lentelės. 1–2 vietos (kyla) žymimos **žaliai**,
  3-ia (galimai kyla) — **geltonai**.
- **Tinklelis** — klasikinis horizontalus medis: 1/16 → 1/8 → ketvirtfinaliai →
  pusfinaliai → finalas (+ dėl 3 vietos). R32 poros žinomos (grupių etapas
  baigtas); vėlesni etapai užsipildo automatiškai, kai sužaidžiamos rungtynės
  (laimėtojai keliami toliau). Slinkti galima į šoną ir žemyn.
- **Reitingai** — FIFA reitingai (pagal juos skaičiuojamas HYPE) ir paaiškinimas.

## Duomenų šaltinis
- **TheSportsDB** v1 API (nemokamas raktas `123`), kviečiamas tiesiai iš naršyklės.
- Lyga: **FIFA World Cup, `idLeague = 4429`**, sezonas **`2026`**.
- Grupių etapas: **`eventsround.php`** turais (r=1,2,3) — grąžina visas 72
  rungtynes su grupėmis ir rezultatais (nemokamame rakte neribojama).
- Atkrintamosios: **`eventsnextleague.php`** + **`eventspastleague.php`**.
  Kadangi API jas paskelbia pamažu, turo „karkasą" (poras ir tvarkaraštį)
  laikome pagal oficialią FIFA schemą, o realų laiką/rezultatą paimame iš API,
  kai tik jis atsiranda. Taip iškart matosi **visos** likusios rungtynės.
- **Koeficientai** — `odds.json` (statinis failas, be API rakto). Realūs
  bukmekerių koeficientai paversti tikimybėmis (pašalinus maržą). Atkrintamosioms,
  kurioms koeficientų dar nėra, rodomas įvertis pagal reitingus (žymimas „≈").
- Jei API negrąžina duomenų — bent jau rodomas atkrintamųjų tvarkaraštis.
  **Jokių išgalvotų rezultatų.**

## HYPE balas (1–100)
Skaičiuojamas vietoje (tokio API nėra) pagal apytikslius FIFA reitingus +
bonusai „didžiosioms" komandoms ir lemiamoms / atkrintamosioms rungtynėms.
Rodomas kaip 🔥 su spalva: žalia (žemas) → geltona (vidutinis) → raudona (aukštas).

## Laikas
Visi laikai konvertuojami į **Lietuvos laiką** (`Europe/Vilnius`, vasarą EEST/UTC+3)
ir žymimi „(LT)". Datos rodomos kaip „Šiandien" / „Rytoj" / pilna data.
