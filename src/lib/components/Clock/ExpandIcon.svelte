<script lang="ts">
  import IconButton from '../IconButton.svelte';

  export let isActive: boolean;
</script>

<div class="ExpandIcon">
  <IconButton on:click>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="svg-icon" class:isActive>
      <path d="M12 15.825 5.55 9.35 7.4 7.5l4.6 4.6 4.6-4.6 1.85 1.85Z" />
    </svg>
  </IconButton>
</div>

<style lang="scss">
  .ExpandIcon {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;

    .svg-icon {
      transition: transform 200ms;
      &.isActive {
        transform: rotate(180deg);
      }
    }
  }
</style>
