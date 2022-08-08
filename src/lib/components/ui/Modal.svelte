<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let show: boolean = false;
  export let mobileOnly: boolean = false;

  const dispatch = createEventDispatcher();

  function closeEvent() {
    dispatch('close');
  }
</script>

{#if show}
  <div class="modal" class:mobileOnly>
    <div class="backdrop" on:click={closeEvent} />

    <div class="content">
      <slot />
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    display: block;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 12px;
    padding-top: 24px;

    @media (min-width: 1024px) {
      padding-top: 10%;
    }

    &.mobileOnly {
      @media (min-width: 1024px) {
        display: none;
      }
    }

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-bg-modal-backdrop);
    }

    .content {
      position: relative;
      z-index: 1200;
      width: 100%;
      display: block;
      height: initial;
      margin: 0 auto;

      @media (min-width: 1024px) {
        max-width: 624px;
      }
    }

    :global(.card) {
      overflow: hidden;
    }
  }
</style>
