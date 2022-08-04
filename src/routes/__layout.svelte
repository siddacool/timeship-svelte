<script>
  import { onMount } from 'svelte';
  import { browser, dev } from '$app/env';
  import { registerSW } from 'virtual:pwa-register';

  const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
  });

  onMount(() => {
    if (!dev && browser) {
      updateSW();
    }
  });
</script>

<svelte:head>
  {#if !dev && browser}
    <link rel="manifest" href="/_app/manifest.webmanifest" />
  {/if}
</svelte:head>

<main>
  <slot />
</main>
