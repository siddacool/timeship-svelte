<script lang="ts">
  import IconButton from '../ui/IconButton.svelte';

  export let isOpen: boolean;
  export let isActive: boolean;
</script>

{#if isActive}
  <div class="expand-btn">
    <IconButton on:click>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="svg-icon" class:isOpen>
        <path d="M12 15.825 5.55 9.35 7.4 7.5l4.6 4.6 4.6-4.6 1.85 1.85Z" />
      </svg>
    </IconButton>
  </div>
{/if}

<style lang="scss">
  .expand-btn {
    display: block;
    position: absolute;
    bottom: 8px;
    right: 8px;

    .svg-icon {
      transition: transform 200ms;
      &.isOpen {
        transform: rotate(180deg);
      }
    }
  }
</style>
