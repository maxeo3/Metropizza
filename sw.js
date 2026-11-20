// Cambia la versione ogni volta che vuoi forzare la pulizia della cache.
const CACHE = 'metropizza-v3';

const APP_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png'
];

const CDN_FILES = [
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      await cache.addAll(APP_FILES);
      // Le risorse esterne non devono bloccare l'installazione se non raggiungibili
      await Promise.allSettled(CDN_FILES.map((url) => cache.add(url)));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function putInCache(request, response) {
  if (response && (response.ok || response.type === 'opaque')) {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET') return;

  const sameOrigin = new URL(request.url).origin === self.location.origin;

  if (sameOrigin) {
    // File dell'app: prima la rete (così gli aggiornamenti arrivano subito), cache se offline
    e.respondWith(
      fetch(request)
        .then((response) => putInCache(request, response))
        .catch(() => caches.match(request).then((cached) =>
          cached || (request.mode === 'navigate' ? caches.match('./index.html') : undefined)
        ))
    );
  } else {
    // Librerie e font esterni (versionati): prima la cache, poi la rete
    e.respondWith(
      caches.match(request).then((cached) =>
        cached || fetch(request).then((response) => putInCache(request, response))
      )
    );
  }
});
