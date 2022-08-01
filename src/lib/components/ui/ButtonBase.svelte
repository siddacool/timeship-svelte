<script lang="ts">
  type BtnColor = 'default' | 'grey' | 'white' | 'primary' | 'danger';

  export let outline: boolean = false;
  export let color: BtnColor = 'default';
  export let elevation: boolean = false;
</script>

<button
  on:click
  class:elevation
  class:outline
  class={`button-base color--${color} ${$$props.class ? $$props.class : ''}`}
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
    padding: 0;
    color: inherit;
    transition: color 300ms, background-color 300ms;
    fill: currentColor;

    &.elevation {
    }

    &.outline {
      border: 1px solid var(--color-border-icon-button);
    }

    &.color {
      &--default {
        &:hover {
          background-color: var(--color-bg-icon-button-default-hover);
        }

        &:active {
          background-color: var(--color-bg-icon-button-default-active);
        }
      }

      &--grey {
        background-color: var(--color-bg-icon-button-grey);

        &:hover {
          background-color: var(--color-bg-icon-button-grey-hover);
        }

        &:active {
          background-color: var(--color-bg-icon-button-grey-active);
        }
      }

      &--white {
        background-color: var(--color-bg-icon-button-white);

        &:hover {
          background-color: var(--color-bg-icon-button-white-hover);
        }

        &:active {
          background-color: var(--color-bg-icon-button-white-active);
        }
      }

      &--primary {
        background-color: var(--color-bg-icon-button-primary);

        &:hover {
          background-color: var(--color-bg-icon-button-primary-hover);
        }

        &:active {
          background-color: var(--color-bg-icon-button-primary-active);
        }
      }

      &--danger {
        background-color: var(--color-bg-icon-button-danger);

        &:hover {
          background-color: var(--color-bg-icon-button-danger-hover);
        }

        &:active {
          background-color: var(--color-bg-icon-button-danger-active);
        }
      }
    }
  }
</style>
