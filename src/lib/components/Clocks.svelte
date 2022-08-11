<script lang="ts">
  import { flip } from 'svelte/animate';
  import { dndzone } from 'svelte-dnd-action';
  import { clocks } from '$lib/stores/clocks';
  import type { Clock as ClockType } from '$lib/types';
  import Clock from './Clock';
  import { general } from '$lib/stores/general';

  interface DragEvent {
    detail: {
      items: ClockType[];
    };
  }

  const flipDurationMs = 200;
  let dragDisabled = true;

  const handleConsider = (evt: { detail: { items: any } }) => {
    clocks.organize(evt.detail.items);
  };

  const handleFinalize = (evt: { detail: { items: any } }) => {
    clocks.organize(evt.detail.items);
    // Ensure dragging is stopped on drag finish
    dragDisabled = true;
  };

  const startDrag = () => {
    dragDisabled = false;
  };

  const stopDrag = () => {
    dragDisabled = true;
  };
</script>

{#if $clocks.length}
  <ul
    use:dndzone={{
      items: $clocks,
      flipDurationMs,
      dragDisabled: dragDisabled,
      dropTargetStyle: { outline: 'none' },
    }}
    on:consider={handleConsider}
    on:finalize={handleFinalize}
    class="clocks"
  >
    {#each $clocks as clock (clock.id)}
      <li class="clock-wrapper" animate:flip={{ duration: flipDurationMs }}>
        <Clock
          {...clock}
          id={clock.id}
          cityNameNative={clock.cityNameNative}
          on:mousedown={startDrag}
          on:touchstart={startDrag}
          on:mouseup={stopDrag}
          on:touchend={stopDrag}
        />
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
