<script lang="ts">
  import { clocks } from '$lib/stores/clocks';
  import IconButton from '../ui/IconButton.svelte';

  export let isActive: boolean;
  export let id: string | undefined;

  const handleDelete = () => {
    clocks.remove(id);
  };
</script>

{#if isActive}
  <div class="delete-btn">
    <IconButton on:click={() => handleDelete()} color="danger" name="Delete city">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path
          d="M6.925 21.2q-.925 0-1.6-.662-.675-.663-.675-1.613V6.075H3.525V3.8H8.85V2.65h6.275V3.8h5.35v2.275H19.35v12.85q0 .95-.675 1.613-.675.662-1.6.662Zm10.15-15.125H6.925v12.85h10.15ZM8.9 17h2.125V8H8.9Zm4.075 0H15.1V8h-2.125ZM6.925 6.075v12.85Z"
        />
      </svg>
    </IconButton>
  </div>
{/if}

<style lang="scss">
  .delete-btn {
    display: block;
    position: absolute;
    top: 8px;
    right: 8px;
  }
</style>
