<script lang="ts">
  import { browser } from '$app/env';

  import { settings } from '$lib/stores/settings';
  import { SettingsThemes } from '$lib/types';
  import { onDestroy } from 'svelte';

  let bodyItem: HTMLBodyElement | null = null;

  const unsubscribe = settings.subscribe(({ theme }) => {
    if (browser) {
      bodyItem = bodyItem === null ? document.querySelector('body') : bodyItem;

      switch (theme) {
        case SettingsThemes.auto:
          const prefersDark =
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

          if (prefersDark) {
            bodyItem?.setAttribute('data-theme', 'dark');
          } else {
            bodyItem?.setAttribute('data-theme', 'light');
          }

          break;
        case SettingsThemes.dark:
          bodyItem?.setAttribute('data-theme', 'dark');
          break;
        default:
          bodyItem?.setAttribute('data-theme', 'light');
      }
    }
  });

  onDestroy(unsubscribe);
</script>
