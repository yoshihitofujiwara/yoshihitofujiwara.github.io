"use strict";

var CACHE_NAME = 'google-map-test1-caches';
var urlsToCache = ['../../map1.html', 'libs.js', '../common.css', '../index.css'];
self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(urlsToCache);
  }));
});
self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    return response ? response : fetch(event.request);
  }));
});