<script lang="ts">
  type BtnColor = 'default' | 'grey' | 'white' | 'primary' | 'danger';

  export let outline: boolean = false;
  export let color: BtnColor = 'default';
  export let elevation: boolean = false;
  export let name: string = '';
</script>

<button
  on:click
  class:elevation
  class:outline
  class={`button-base color--${color} ${$$props.class ? $$props.class : ''}`}
  aria-label={name}
>
  <slot />
</button>

<style lang="scss">
  .button-base {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    color: inherit;
    transition: color 300ms, background-color 300ms;
    fill: currentColor;

    &.elevation {
      box-shadow: 0.3px 0.5px 0.7px hsl(var(--color-shadow) / 0.26),
        0.8px 1.6px 2px -0.8px hsl(var(--color-shadow) / 0.26),
        2.1px 4.1px 5.2px -1.7px hsl(var(--color-shadow) / 0.26),
        5px 10px 12.6px -2.5px hsl(var(--color-shadow) / 0.26);
    }

    &.outline {
      border: 1px solid var(--color-border-button);
    }

    &.color {
      &--default {
        &:hover {
          background-color: var(--color-bg-button-default-hover);
        }

        &:active {
          background-color: var(--color-bg-button-default-active);
        }
      }

      &--grey {
        background-color: var(--color-bg-button-grey);

        &:hover {
          background-color: var(--color-bg-button-grey-hover);
        }

        &:active {
          background-color: var(--color-bg-button-grey-active);
        }
      }

      &--white {
        background-color: var(--color-bg-button-white);

        &:hover {
          background-color: var(--color-bg-button-white-hover);
        }

        &:active {
          background-color: var(--color-bg-button-white-active);
        }
      }

      &--primary {
        background-color: var(--color-bg-button-primary);

        &:hover {
          background-color: var(--color-bg-button-primary-hover);
        }

        &:active {
          background-color: var(--color-bg-button-primary-active);
        }
      }
    }
  }
</style>
