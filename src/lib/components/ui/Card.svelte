<script lang="ts">
</script>

<div class={`card ${$$props.class ? $$props.class : ''}`}>
  <slot />
</div>

<style lang="scss">
  .card {
    background-color: var(--color-bg-surface-main);
    border-radius: var(--border-radius-1);
    display: block;
    width: 100%;
    position: relative;
  }
</style>
