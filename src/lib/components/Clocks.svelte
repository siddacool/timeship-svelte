<script lang="ts">
  import { flip } from 'svelte/animate';
  import { clocks } from '$lib/stores/clocks';
  import Clock from './Clock';
</script>

{#if $clocks.length}
  <ul class="clocks">
    {#each $clocks as clock (clock.id)}
      <li class="clock-wrapper" animate:flip={{ duration: 200 }}>
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
