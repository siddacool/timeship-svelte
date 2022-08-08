<script lang="ts">
  import { general } from '$lib/stores/general';
  import { press } from 'svelte-gestures';

  export let isActive: boolean = false;
</script>

{#if isActive}
  <div
    class="longpress-reorder"
    use:press={{ timeframe: 500, triggerBeforeFinished: true }}
    on:press={general.enableReorder}
  />
{/if}

<style>
  .longpress-reorder {
    position: absolute;
    height: 100%;
    width: calc(100% - 110px);
    left: 40px;
    top: 0;
    cursor: pointer;
  }
</style>
