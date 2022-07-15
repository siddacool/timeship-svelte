<script lang="ts">
  import { onMount } from 'svelte';
  import { clocks } from '$lib/stores/clocks';
  import Clock from './Clock.svelte';
  import { time } from '$lib/stores/time';

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

<ul class="clocks">
  {#each $clocks as { id = '', cityNameNative = '', ...clock }}
    <Clock {...clock} {id} {cityNameNative} />
  {/each}
</ul>

<style lang="scss">
</style>
