'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cc207231a57985c49e5efd1c1f30ae35",
"assets/AssetManifest.bin.json": "6597ccdc18e546714e2bae24ba0bd1ff",
"assets/AssetManifest.json": "0cc4fac8687a29504a89cb3da7fad9ef",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/1.png": "1b8f24917043e840feac9fde897eeec4",
"assets/assets/images/2.png": "d45383ec0f59b47b6bc2e3e94525b5cc",
"assets/assets/images/3.png": "f010675ac1e7f32a56d59c2cc6171994",
"assets/assets/images/4.png": "f415ca127b5f586edd99056590340658",
"assets/assets/images/5.png": "febfd8c22a4b7c09fbf3eb67bda5b3f8",
"assets/assets/images/6.png": "b2643af217c83ddcbf052c83349fd232",
"assets/assets/images/calendar.jpg": "63c4c8eeec4e3830be29217f892bd5ec",
"assets/assets/images/greenline.png": "3b98bd8b7c2ca7422c567cce39a5c610",
"assets/assets/images/greyline.png": "5b44e5eec66fcbb03f6c458579553afd",
"assets/assets/images/grocery_images/apple.png": "2b5b931d0b7d6a85193e01a298f9e876",
"assets/assets/images/grocery_images/bellcolorpepper.png": "bc60d7212c31b8add83a26f6b509c9f6",
"assets/assets/images/grocery_images/bellPepper.png": "8e8ad43c3a4bc9d236312fed50d7162e",
"assets/assets/images/grocery_images/broccoli.png": "52f3cf7ee18c6c5e3157b49782a8180e",
"assets/assets/images/grocery_images/cheese.png": "5980dc600efc2ddcd2ec48236e159fe4",
"assets/assets/images/grocery_images/greensalad.png": "5bc8a7d393f5fe8d589c3c26ee6c3ff9",
"assets/assets/images/grocery_images/lambmeat.png": "2f28b1b7d266620659b359178753807e",
"assets/assets/images/grocery_images/meat.png": "fc4402527798cf11fa374bd62426c17b",
"assets/assets/images/grocery_images/onion.png": "5bf674b318e1ad5de80fdbe257d3ba9a",
"assets/assets/images/grocery_images/peas.png": "158115bf6e5903e6c71ff42542c35feb",
"assets/assets/images/grocery_images/pic17.png": "fe1dfa95dfd43dc07949153755635d54",
"assets/assets/images/grocery_images/pic18.png": "092592aaef10dfa38b4565fc85703de2",
"assets/assets/images/grocery_images/potatos.png": "5bf3985aa0e1e24f4e51bfcf0d37d364",
"assets/assets/images/grocery_images/tomato.png": "67cf989b8cee3b9c661852a209e9e530",
"assets/assets/images/line.png": "eb8906f1c8699ea547bba27b8f9c447a",
"assets/assets/images/linebar.png": "ab18bc321d7061334c7d0d4043a5e8bf",
"assets/assets/images/map.png": "89567d6088771ee5be5a28e225936587",
"assets/assets/images/pic.png": "b6fb281053f17671106df7a1b42f861b",
"assets/assets/images/pic1.png": "4f17d3abfd3ef99f24a171dab515ed98",
"assets/assets/images/pic2.png": "c6468394be593cb81f34cb82e16af7fc",
"assets/assets/images/pic3.png": "4409baa3e69766235acb12c0b8d51aff",
"assets/assets/images/pic4.png": "5e49fbbede22b6c00ab1141e71788050",
"assets/FontManifest.json": "25191eae2a6d418826713cfc616b4b22",
"assets/fonts/MaterialIcons-Regular.otf": "2a6a1f73f841c07d904c05767a02a7f3",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d6e100a32357c55cd6c10d2222e05201",
"/": "d6e100a32357c55cd6c10d2222e05201",
"main.dart.js": "7ca4be1b1b2d8d0a3d6ef6c592a25603",
"manifest.json": "857d7438891fe081a903fd431d44ce05",
"version.json": "868c6fca6cfa40393c07f0ab75b73b60"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
