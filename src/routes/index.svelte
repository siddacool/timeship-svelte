<script lang="ts">
  import '$lib/styles/index.scss';
  import { onMount } from 'svelte';
  import { time } from '$lib/stores/time';
  import Placeholder from '$lib/components/Placeholder.svelte';
  import ThemeSetter from '$lib/components/ThemeSetter.svelte';
  import Controls from '$lib/components/Controls.svelte';
  import ReorderPopBelow from '$lib/components/ReorderPopBelow.svelte';
  import SearchModal from '$lib/components/Search/SearchModal.svelte';
  import SearchDropdown from '$lib/components/Search/SearchDropdown.svelte';
  import SettingsModal from '$lib/components/Settings/SettingsModal.svelte';
  import SettingsDropdown from '$lib/components/Settings/SettingsDropdown.svelte';
  import Clocks from '$lib/components/Clocks.svelte';

  onMount(() => {
    let frame: number;

    function loop() {
      frame = requestAnimationFrame(loop);

      time.setTime();
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });
</script>

<main>
  <ThemeSetter />
  <Placeholder />
  <Clocks />
  <Controls />
</main>

<ReorderPopBelow />
<SearchModal />
<SearchDropdown />
<SettingsModal />
<SettingsDropdown />

<style lang="scss">
  main {
    @media (min-width: 1024px) {
      max-width: 650px;
      margin: 0 auto;
    }
  }
</style>
