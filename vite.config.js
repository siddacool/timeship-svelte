import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { pwaConfiguration } from './pwa-configuration.js';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [VitePWA(pwaConfiguration), sveltekit()],
};

export default config;
