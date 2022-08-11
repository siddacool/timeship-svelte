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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_20_267"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect x="0.30188" width="22.8356" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_20_267)">
        <path
          d="M6.3914 19L5.05933 17.6L10.3876 12L5.05933 6.4L6.3914 5L11.7197 10.6L17.048 5L18.3801 6.4L13.0518 12L18.3801 17.6L17.048 19L11.7197 13.4L6.3914 19Z"
          fill="#7D7D7D"
        />
      </g>
    </svg>
  </IconButton>
</div>

<style lang="scss">
  .expand-btn {
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    svg {
      path {
        fill: currentColor;
      }
    }

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
