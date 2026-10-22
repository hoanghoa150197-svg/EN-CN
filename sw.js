/* Bump CACHE_VERSION when publishing a new release. */
const CACHE_VERSION='language-hub-v2-20261022';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE_VERSION).then(cache=>cache.addAll(SHELL))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('language-hub-')&&key!==CACHE_VERSION)await caches.delete(key);await self.clients.claim()})()));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;event.respondWith((async()=>{const cache=await caches.open(CACHE_VERSION);const cached=await cache.match(req);if(req.mode==='navigate'){try{const response=await fetch(req);if(response.ok)await cache.put(req,response.clone());return response}catch{return cached||await cache.match('./index.html')||Response.error()}}if(cached)return cached;try{const response=await fetch(req);if(response.ok)await cache.put(req,response.clone());return response}catch{return Response.error()}})())});
