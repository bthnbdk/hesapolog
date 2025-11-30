// This service worker is intentionally kept simple.
// For more advanced offline capabilities with Next.js, consider using packages like 'next-pwa'.

const CACHE_NAME = 'hesapolog-cache-v1';
const urlsToCache = [
  '/',
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Let Next.js handle its own framework-specific requests (_next/static, etc.)
  if (event.request.url.includes('/_next/')) {
    return;
  }
  
  // For other requests, use a cache-first strategy.
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});