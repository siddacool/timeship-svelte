<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let value: number = 0;
  export let active: number = 0;

  const dispatch = createEventDispatcher();

  function switchEvent() {
    dispatch('switch', {
      value,
    });
  }
</script>

<div class="switch-button-section" on:click={switchEvent} class:activePosition={active === value}>
  <slot />
</div>

<style lang="scss">
  .switch-button-section {
    -webkit-tap-highlight-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-2);
    overflow: hidden;
    cursor: pointer;
    margin: 0 4px;
    position: relative;
    z-index: 21;
    transition: background-color 200ms;

    &:not(.activePosition) {
      &:hover {
        background-color: var(--color-bg-icon-button-grey-hover);
      }
    }
  }
</style>
