'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "e32b16494c7f0ca36c1b1d5941556c95",
"/assets\assets\images\background.png": "bf362ede14cbcc2e9db79d03fa864cad",
"/assets\assets\images\background2.png": "f6035cb24046eeee3370aefd3fe613ab",
"/assets\assets\images\bottom_right_design.png": "b55070d56429ddea168e364b50d5f1d9",
"/assets\assets\images\chanceCardBackground.png": "dfbcb4f36591cfa389bb4658c2eeea8a",
"/assets\assets\images\negative.png": "6c3a58ca41b2f0928326520ce91c1e17",
"/assets\assets\images\positive.png": "a5cc7d469647473624a97e0f4352b011",
"/assets\assets\images\SituationFeedbackBackground.png": "de7fdfd507306012b1544d7c642d8c5a",
"/assets\assets\images\SituationFeedbackHeader.png": "1bf5947f9504029b7bc064a6d04333c9",
"/assets\assets\images\timer.png": "138ae4e718db0e6de2669a7412d6e681",
"/assets\assets\svgs\bottom_right_design.svg": "225c3df69b0c4c6134a2a3b1f90ae335",
"/assets\assets\svgs\catalyst_logo.png": "7193787625c2b7c5e5d4bb675f071349",
"/assets\assets\svgs\catalyst_logo.svg": "789492e120cbd0cc86df466f4ec58444",
"/assets\assets\svgs\email.png": "d15a36d92d0b9eb3002193d497d5c1c1",
"/assets\assets\svgs\logo.png": "677de607655ccd891e32b7dbd2535020",
"/assets\assets\svgs\logout.svg": "7c3be74d7a20e4d6df073bcbcc91f73a",
"/assets\assets\svgs\password.png": "31c0a97a95ec9ed1a59864f704537434",
"/assets\assets\svgs\password_eye.png": "88b4926c96ce66a8e36d0ba4de0b30db",
"/assets\assets\svgs\radio_circle_fill.svg": "34cac718a01ff40de00c9249742153c8",
"/assets\assets\svgs\radio_filled.svg": "e2efd567fae0778225de63c8df6ed418",
"/assets\assets\svgs\radio_fill_inner.svg": "e237c004d5aa6a9d53fb7ed88eab93d9",
"/assets\assets\svgs\timer.svg": "4ce517792be027b3e7349c87d1df1cd0",
"/assets\FontManifest.json": "a58fcc79100fdbd2863730baa931bcc0",
"/assets\fonts\Acumin-RPro.otf": "bdb37477b68d098317daaf939f295527",
"/assets\fonts\BebasNeue-Regular.ttf": "47f711bd1524b9283aa92d3d74db16a8",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"/assets\fonts\Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"/assets\fonts\Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"/assets\LICENSE": "7dc83d5c5df77392b4cf10ec7f679fee",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "78b9a619c7d7a8f75654dea5a5c55553",
"/main.dart.js": "ac58ef6409f631e3eb6afced3594b3aa",
"/manifest.json": "a82f78cc290a0a2973aa476d49a3c24b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
