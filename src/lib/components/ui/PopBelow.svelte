<script lang="ts">
  import Card from './Card.svelte';

  export let show: boolean = false;
</script>

<div class="pop-below-container" class:show>
  <div class="pop-below">
    <Card elevation={true}>
      <slot />
    </Card>
  </div>
</div>

<style lang="scss">
  .pop-below-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 110px;
    display: flex;
    justify-content: center;
    transition: transform 200ms;
    transform: translate(0, 120px);

    &.show {
      transform: translate(0, 0);
    }
  }

  .pop-below {
    width: 100%;
    display: flex;

    @media (min-width: 1024px) {
      max-width: 650px;
    }

    :global(.card) {
      display: flex;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      padding: 20px;
      padding-bottom: 24px;
      align-items: flex-end;
      justify-content: flex-end;
      overflow: hidden;
    }

    :global(button) {
      margin-left: 10px;
    }
  }
</style>
