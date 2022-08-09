<script lang="ts">
  import '$lib/styles/index.scss';
  import { onMount } from 'svelte';
  import { time } from '$lib/stores/time';
  import { clocks } from '$lib/stores/clocks';
  import Placeholder from '$lib/components/Placeholder.svelte';
  import ThemeSetter from '$lib/components/ThemeSetter.svelte';

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

<ThemeSetter />
<main>
  {#if $clocks.length}
    {#await import('$lib/components/Clocks.svelte') then c}
      <svelte:component this={c.default} />
    {/await}
  {/if}
  <Placeholder />
</main>

{#await import('$lib/components/ModalAndControl.svelte') then c}
  <svelte:component this={c.default} />
{/await}

<style lang="scss">
  main {
    @media (min-width: 1024px) {
      max-width: 650px;
      margin: 0 auto;
    }
  }
</style>
