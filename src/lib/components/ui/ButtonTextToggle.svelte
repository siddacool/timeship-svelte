<script lang="ts">
  import ButtonBase from './ButtonBase.svelte';

  type BtnColor = 'default' | 'grey' | 'white' | 'primary' | 'danger';

  export let outline: boolean = false;
  export let color: BtnColor = 'default';
  export let elevation: boolean = false;
  export let showText: boolean = false;
  export let responsive: boolean = false;
</script>

<ButtonBase
  on:click
  {elevation}
  {outline}
  {color}
  class={`button-text-toogle ${showText ? 'button-text-toogle-showText' : ''} ${
    responsive ? 'button-text-toogle-responsive' : ''
  } ${$$props.class ? $$props.class : ''}`}
>
  <slot name="icon" />
  <div class="btn-text" class:showText class:responsive><slot /></div>
</ButtonBase>

<style lang="scss">
  :global(.button-text-toogle) {
    font-size: 17px;
    font-weight: var(--font-weight-semi-bold);
    font-family: inherit;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding-left: 6px;
    padding-right: 6px;
    color: inherit;
    justify-content: center;
  }

  .btn-text {
    display: none;
    margin-left: 6px;

    &.showText {
      display: block;
    }

    &.responsive {
      @media (min-width: 1024px) {
        display: block;
      }
    }
  }

  :global(.button-text-toogle-responsive) {
    @media (min-width: 1024px) {
      justify-content: flex-start;
      border-radius: 25px;
      width: initial;
      min-width: 129px;
      padding-left: 8px;
      padding-right: 8px;
    }
  }

  :global(.button-text-toogle-showText) {
    justify-content: flex-start;
    border-radius: 25px;
    width: initial;
    min-width: 129px;
    padding-left: 8px;
    padding-right: 8px;
  }
</style>
