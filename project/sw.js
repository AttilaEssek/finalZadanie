self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
        return cache.addAll(["./","./scripts/cookies.js","./styles/style.css","./scripts/easy.json","./scripts/elements.js","./scripts/hard.json","./scripts/script1.js","./scripts/script2.js","./images/angle.svg","./images/arrowDown.png","./images/arrowUp.png","./images/cross.svg","./images/from.svg","./images/from2.svg","./images/straigt.svg","./images/tail.svg","./images/to.svg","./images/to2.svg","./images/triangle.svg","./images/wall2.jpg","./lib/bootstrap.bundle.min.js","./lib/bootstrap.bundle.min.js.map","./lib/bootstrap.min.css","./lib/bootstrap.min.css.map","./lib/jquery-3.6.0.min.js"]);
        })
    );
    console.log("install");
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});