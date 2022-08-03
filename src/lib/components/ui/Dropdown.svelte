<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let show: boolean = false;

  const dispatch = createEventDispatcher();

  function closeEvent() {
    dispatch('close');
  }
</script>

{#if show}
  <div class="dropdown">
    <div class="backdrop" on:click={closeEvent} />
    <slot />
  </div>
{/if}

<style lang="scss">
  .dropdown {
    display: block;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
    }

    :global(.card) {
      overflow: hidden;
      width: 350px;
      position: absolute;
    }
  }
</style>
