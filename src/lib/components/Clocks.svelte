<script lang="ts">
  import { flip } from 'svelte/animate';
  import { onMount } from 'svelte';
  import { dndzone } from 'svelte-dnd-action';
  import { clocks } from '$lib/stores/clocks';
  import type { Clock as ClockType } from '$lib/types';
  import Clock from './Clock';
  import { time } from '$lib/stores/time';
  import { general } from '$lib/stores/general';

  interface DragEvent {
    detail: {
      items: ClockType[];
    };
  }

  const flipDurationMs = 300;

  const handleDndConsider = (e: DragEvent) => {
    clocks.organize(e.detail.items);
  };

  const handleDndFinalize = (e: DragEvent) => {
    clocks.organize(e.detail.items);
  };

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

{#if $clocks.length}
  <ul
    use:dndzone={{
      items: $clocks,
      flipDurationMs,
      dragDisabled: !$general.reorder,
      dropTargetStyle: { outline: 'none' },
    }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
    class="clocks"
  >
    {#each $clocks as clock (clock.id)}
      <li class="clock-wrapper" animate:flip={{ duration: flipDurationMs }}>
        <Clock {...clock} id={clock.id} cityNameNative={clock.cityNameNative} />
      </li>
    {/each}
  </ul>
{/if}

<style lang="scss">
  .clocks {
    display: block;
    margin: 0;
    padding-bottom: 150px;
    padding-top: 24px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .clock-wrapper {
    display: flex;
    width: 100%;
    margin-bottom: 24px;
  }
</style>
