<script lang="ts">
  import Card from './Card.svelte';

  export let show: boolean = false;
</script>

{#if show}
  <div class="pop-below-container">
    <div class="pop-below">
      <Card>
        <slot />
      </Card>
    </div>
  </div>
{/if}

<style lang="scss">
  .pop-below-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 110px;
    display: flex;
    justify-content: center;
  }

  .pop-below {
    width: 100%;
    display: flex;
    box-shadow: 0px 4px 20px 3px hsl(var(--color-shadow) / 0.28);
    overflow: hidden;

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
    }

    :global(button) {
      margin-left: 10px;
    }
  }
</style>
