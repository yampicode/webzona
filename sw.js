self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mi-cache').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'style.min.css',
        'main.min.js',
        'offline.html',
        'icofont.min.css',
        'icofont.ttf',
        'ArchivoBlack-Regular.ttf',
        'fuentes.css',
        'boton-ws.min.css',
        'animate.min.css',
        'scroll.js',
        'loaderPage.min.js',
        'script.min.js',
        'tema.min.js',
        'webzonave.mp4'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

caches.open('mi-cache').then(cache => {
  return cache.add('offline.html');
});