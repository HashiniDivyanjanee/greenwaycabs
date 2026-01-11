
const CACHE_NAME = 'greenway-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // force new SW
});

self.addEventListener('activate', (event) => {
  clients.claim(); // take control immediately
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

