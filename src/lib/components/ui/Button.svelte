<script lang="ts">
  import ButtonBase from './ButtonBase.svelte';

  type BtnColor = 'default' | 'grey' | 'white' | 'primary' | 'danger';

  export let outline: boolean = false;
  export let color: BtnColor = 'default';
  export let elevation: boolean = false;
  export let name: string = '';
</script>

<ButtonBase
  on:click
  {elevation}
  {outline}
  {color}
  {name}
  class={`button ${$$props.class ? $$props.class : ''}`}
>
  <slot />
</ButtonBase>

<style lang="scss">
  :global(.button) {
    font-size: 17px;
    font-weight: var(--font-weight-semi-bold);
    font-family: inherit;
    height: 46px;
    min-width: 120px;
    border-radius: 25px;
    padding-left: 6px;
    padding-right: 6px;
    color: inherit;
  }
</style>
