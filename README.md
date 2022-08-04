# Timeship

## Builing

1. `npm install` or `pnpm install`
2. 🔴 Fix workbox settings for PWA

   1. Head to `node_modules/workbox-window`
   2. Add this entry in `package.json`

   ```json
   "exports": {
    ".": {
      "import": "./build/workbox-window.prod.es5.mjs",
      "require": "./build/workbox-window.prod.umd.js"
    },
    "./*": "./*"
   }
   ```
