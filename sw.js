const CACHE_NAME = 'grok-shopping-v1';
const urlsToCache = [
    './',
    'v1.html'   // or shopping-list.html if that's your filename
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
