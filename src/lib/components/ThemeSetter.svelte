<script lang="ts">
  import { settings } from '$lib/stores/settings';
  import { setTheme } from '$lib/utils';
  import { onDestroy } from 'svelte';

  const unsubscribe = settings.subscribe(({ theme }) => {
    setTheme(theme);
  });

  onDestroy(unsubscribe);
</script>
