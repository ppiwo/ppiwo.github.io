self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('jsrun-store').then(function(cache) {
        return cache.addAll([
          '/JSRUNNER/',
          'index.html',
          'index.js',
          'images/icon-192x192.png',
          'images/icon-512x512.png',
          'https://www.w3schools.com/w3css/4/w3.css',
          'https://www.w3schools.com/lib/w3.js'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });