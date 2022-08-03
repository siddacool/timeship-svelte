<script lang="ts">
  export let disabled: boolean = false;
  export let preventHover: boolean = false;
</script>

<div class="searchResultBase" class:preventHover class:disabled on:click>
  <slot />
</div>

<style lang="scss">
  .searchResultBase {
    display: flex;
    padding: 0 20px;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
    font-size: var(--font-size-normal);
    border-bottom: 1px solid var(--color-border-text-box-grey-1);

    &:not(.preventHover) {
      &:hover {
        background-color: var(--color-bg-grey-1);
      }
    }

    &.disabled {
      color: var(--color-font-grey-1);
    }

    :global(b) {
      font-weight: var(--font-weight-bold);
      margin-right: 6px;
    }
  }
</style>
