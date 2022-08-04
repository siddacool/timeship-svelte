<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let value: string | boolean | number = '';
  export let position: number = 0;
  export let activePosition: number = 0;

  const dispatch = createEventDispatcher();

  function switchEvent() {
    dispatch('switch', {
      value,
      position,
    });
  }
</script>

<div
  class="switch-button-section"
  on:click={switchEvent}
  class:activePosition={activePosition === position}
>
  <slot />
</div>

<style lang="scss">
  .switch-button-section {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    overflow: hidden;
    cursor: pointer;
    margin: 0 4px;
    position: relative;
    z-index: 21;

    &:not(.activePosition) {
      &:hover {
        @media (min-width: 1024px) {
          background-color: var(--color-bg-icon-button-grey-hover);
        }
      }
    }
  }
</style>
