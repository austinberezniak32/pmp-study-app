/* PMP Study service worker — offline cache + installability */
const CACHE = "pmp-study-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/data.js",
  "/js/app.js",
  "/icon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/manifest.webmanifest"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first for HTML (so updates show), cache-first for static assets.
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const isHTML = req.mode === "navigate" || req.headers.get("accept")?.includes("text/html");
  if (isHTML) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match("/index.html")))
    );
  } else {
    e.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }))
    );
  }
});
