const h = [
  "/_app/immutable/start-a78416b6.js",
  "/_app/immutable/layout.svelte-7f00c8bc.js",
  "/_app/immutable/error.svelte-3b0f8ec6.js",
  "/_app/immutable/pages/index.svelte-7deb7b64.js",
  "/_app/immutable/assets/index-d1c3ed02.css",
  "/_app/immutable/chunks/index-f5e4aa99.js",
  "/_app/immutable/chunks/index-97599203.js"
], p = [
  "/BingSiteAuth.xml",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/google573023f379f7259c.html",
  "/manifest.json",
  "/maskable_icon_x512.png",
  "/mstile-150x150.png",
  "/og.webp",
  "/robots.txt",
  "/safari-pinned-tab.svg"
], o = "1660299796061", d = ["/google573023f379f7259c.html", "/BingSiteAuth.xml", "/og.png", "/og.webp"], a = self, i = `cache${o}`, l = h.concat(p).filter((e) => !d.includes(e)), f = new Set(l);
a.addEventListener("install", (e) => {
  e.waitUntil(caches.open(i).then((t) => t.addAll(l)).then(() => {
    a.skipWaiting();
  }));
});
a.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then(async (t) => {
    for (const s of t)
      s !== i && await caches.delete(s);
    a.clients.claim();
  }));
});
async function m(e) {
  const t = await caches.open(`offline${o}`);
  try {
    const s = await fetch(e);
    return t.put(e, s.clone()), s;
  } catch (s) {
    const c = await t.match(e);
    if (c)
      return c;
    throw s;
  }
}
a.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const t = new URL(e.request.url), s = t.protocol.startsWith("http"), c = t.hostname === self.location.hostname && t.port !== self.location.port, n = t.host === self.location.host && f.has(t.pathname), r = e.request.cache === "only-if-cached" && !n;
  s && !c && !r && e.respondWith((async () => n && await caches.match(e.request) || m(e.request))());
});
