/* needed to fix a bug from migrating from old React website 
 * with a service worker to a gatsby site with no service worker 
 */

const filesToCache = [
  '/',
  'index.html',
];


self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('static-v1').then(cache => {
      console.log("adding files to cache");
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(clients.claim());

  self.clients.matchAll().then(function(clients) {
    for (const client of clients){
      client.navigate(client.url)
    }
  });
  


  // self.registration.unregister()
  // .then(function() {
  //   caches.keys().then(function(names) {
  //   for (let name of names)
  //         caches.delete(name);
  //   });
  //   return self.clients.matchAll();
  // })
  // .then(function(clients) {
  //   clients.forEach(client => client.navigate(client.url))
  // });
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.origin == location.origin && filesToCache.includes(url.pathname)) {
    console.log("serving " + url.pathname);
    event.respondWith(caches.match(url.pathname));
  }
});
