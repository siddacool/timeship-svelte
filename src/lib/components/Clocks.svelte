<script lang="ts">
  import { flip } from 'svelte/animate';
  import { onMount } from 'svelte';
  import { dndzone } from 'svelte-dnd-action';
  import { clocks } from '$lib/stores/clocks';
  import type { Clock as ClockType } from '$lib/types';
  import Clock from './Clock.svelte';
  import { time } from '$lib/stores/time';

  interface DragEvent {
    detail: {
      items: ClockType[];
    };
  }

  const flipDurationMs = 300;
  let dragDisabled = false;

  const handleDndConsider = (e: DragEvent) => {
    clocks.organize(e.detail.items);
  };

  const handleDndFinalize = (e: DragEvent) => {
    clocks.organize(e.detail.items);
  };

  // const toggleDrag = () => {
  //   dragDisabled != dragDisabled;
  // };

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

<ul
  use:dndzone={{
    items: $clocks,
    flipDurationMs,
    dragDisabled,
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

<style lang="scss">
  .clocks {
    display: block;
    margin: 0;
    padding: 0;
  }
  .clock-wrapper {
    padding: 10px;
    display: flex;
  }
</style>
