<script lang="ts">
  export let elevation: boolean = false;
</script>

<div
  class={`card ${$$props.class ? $$props.class : ''}`}
  class:elevation
  style={`${$$props.style ? $$props.style : ''}`}
>
  <slot />
</div>

<style lang="scss">
  .card {
    background-color: var(--color-bg-surface-main);
    border-radius: var(--border-radius-1);
    display: block;
    width: 100%;
    position: relative;

    &.elevation {
      box-shadow: 0px 4px 20px 3px hsl(var(--color-shadow) / 0.28);
    }
  }
</style>
