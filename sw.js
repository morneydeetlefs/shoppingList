// ==================== Wify's List Service Worker ====================

const CACHE_NAME = 'wifey-list-v1';

const urlsToCache = [
    './',           // root
    'index.html',      // your actual file
    'manifest.json' // PWA manifest
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
