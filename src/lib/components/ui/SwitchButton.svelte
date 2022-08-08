<script lang="ts">
  export let active: number = 0;
  export let total: number = 2;

  const widthCalculater = (t: number) => {
    return 100 / t > 0 ? (100 / t).toFixed(3) : '10';
  };

  const positionCalculater = (t: number, pos: number) => {
    const width = 100 / t > 0 ? 100 / t : 10;
    const position = pos * width;

    return position;
  };
</script>

<div class="switch-button">
  <slot />

  <div
    class="highlighter"
    style="width: {widthCalculater(total)}%; left: {positionCalculater(total, active)}%;"
  >
    <span />
  </div>
</div>

<style lang="scss">
  .switch-button {
    display: flex;
    flex-wrap: nowrap;
    background-color: var(--color-bg-backdrop-t-1);
    height: 70px;
    padding: 8px 4px;
    border-radius: var(--border-radius-2);
    overflow: hidden;
    position: relative;
    -webkit-tap-highlight-color: transparent;
  }

  :global(.switch-button-section) {
    flex: 1;
  }

  .highlighter {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    padding: 8px;
    z-index: 20;
    transition: left 200ms;

    span {
      height: 100%;
      display: flex;
      background-color: var(--color-bg-button-primary);
      border-radius: var(--border-radius-2);
      border: 1px solid var(--color-border-button);
    }
  }
</style>
