<script lang="ts">
  import { clocks } from '$lib/stores/clocks';
  import IconButton from '../ui/IconButton.svelte';

  export let id: string | undefined;

  const handleDelete = () => {
    clocks.remove(id);
  };
</script>

<div class="expand-btn">
  <IconButton on:click={() => handleDelete()} name="Delete city">
    <span class="material-symbols-rounded"> close </span>
  </IconButton>
</div>

<style lang="scss">
  .expand-btn {
    display: block;
    position: absolute;
    top: 8px;
    right: 8px;

    :global(.icon-button) {
      &:hover {
        background-color: var(--color-bg-button-adapt);
      }

      &:active {
        background-color: var(--color-bg-button-adapt-hover);
      }
    }
  }
</style>
