<script lang="ts">
  import ButtonBase from './ButtonBase.svelte';

  type BtnColor = 'default' | 'grey' | 'white' | 'primary' | 'danger';

  export let outline: boolean = false;
  export let color: BtnColor = 'default';
  export let elevation: boolean = false;
</script>

<ButtonBase
  on:click
  {elevation}
  {outline}
  {color}
  class={`icon-button ${$$props.class ? $$props.class : ''}`}
>
  <slot />
</ButtonBase>

<style lang="scss">
  :global(.icon-button) {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 0;
  }
</style>
