# MZN World Cup ⚽

Asmeninis **2026 FIFA Pasaulio čempionato** dashboard'as — vienas failas
[`index.html`](./index.html) (grynas HTML + CSS + JavaScript, be jokio build
proceso, be npm, be framework'ų).

## Kaip naudoti
Atidaryk `index.html` naršyklėje (telefone ar kompiuteryje). Duomenys
įsikrauna automatiškai. Spausk **„Atnaujinti"**, kad gautum naujausius rezultatus.

## Skiltys
- **Rungtynės** — viršuje **„Kita rungtynė"** kortelė su atgaliniu laikrodžiu.
  Žemiau — būsimos ir pasibaigusios. Laikas **Lietuvos laiku (LT)**,
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
- Viskas per **`eventsround.php`** (nemokamame rakte neribojamas). Grupės —
  r=1,2,3 (72 rungtynės su grupėmis ir rezultatais). Atkrintamąsias TheSportsDB
  numeruoja pagal komandų skaičių etape: 1/16 = **r=32**, aštuntfinaliai =
  **r=16**, ketvirtfinaliai = **r=8**, pusfinaliai = **r=4** (finalas patenka į
  r=2 kartu su grupių 2-u turu). Kiekvieną turą pradedame traukti keliomis
  dienomis prieš jam prasidedant — tolimų dar nesiunčiame, kad neišnaudotume
  rakto limito. Užklausos ribojamos (≤3 vienu metu, su pakartojimu).
- 1/16 finalo „karkasą" (poras, laikus, miestus) laikome ir lokaliai pagal
  oficialią FIFA schemą — rezultatai iš API įsilieja pagal komandų porą (namų/
  svečių tvarka sutvarkoma automatiškai, baudinių serijos — taip pat).
- Sėkmingai įkelti duomenys įsimenami (`localStorage`) — jei API laikinai
  neatsako, rodomi paskutiniai įsiminti rezultatai su aiškia žyme.
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
