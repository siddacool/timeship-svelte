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

    span {
      display: block;
      padding-bottom: 10px;
    }

    div {
    }
  }
</style>
