/* MZN World Cup – Service Worker.
   Tikslas: kad įdiegta programėlė (home-screen app) VISADA gautų naujausią
   versiją, o ne užstrigtų senoje iš talpyklos.
   Strategija: „network-first" mūsų pačių failams — pirma bandom internetą
   (naujausia), tik nepavykus imam iš talpyklos (kad veiktų ir be interneto).
   API (thesportsdb ir kt.) NELIEČIAM — jie eina tiesiai. */
const CACHE = 'mzn-wc-cache';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim())
));

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // svetimi (API) – nekišam nagų

  e.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)); // atsargai (offline)
        return res;
      })
      .catch(() => caches.match(req)) // interneto nėra – imam paskutinę įsimintą
  );
});
