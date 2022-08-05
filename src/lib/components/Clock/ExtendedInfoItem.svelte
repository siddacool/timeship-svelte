<script lang="ts">
  export let title = '';
</script>

<div class="extended-info-item">
  <div class="title">{title}:</div>
  <div class="description"><slot /></div>
</div>

<style lang="scss">
  .extended-info-item {
    font-size: var(--font-size-normal);
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .title {
    font-weight: var(--font-weight-bold);
    margin-bottom: 5px;
  }
</style>
