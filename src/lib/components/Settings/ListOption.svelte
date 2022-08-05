<script lang="ts">
  export let title: string = '';
</script>

<li>
  <span>{title}:</span>
  <div>
    <slot />
  </div>
</li>

<style lang="scss">
  li {
    margin: 0;
    padding-bottom: 20px;
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-normal);

    &:last-child {
      padding-bottom: 0;
    }

    span {
      display: block;
      padding-bottom: 10px;
      font-weight: var(--font-weight-semi-bold);
      font-size: 0.9rem;
    }

    div {
    }
  }
</style>
