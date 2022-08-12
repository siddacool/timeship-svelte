<script lang="ts">
  import { search } from '$lib/stores/search';
  import IconButton from '../ui/IconButton.svelte';

  export let focus: boolean = false;

  let timer: string | number | NodeJS.Timeout | undefined;

  const onInput = (e: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      search.setSearch(e.target.value);
    }, 1000);
  };

  const onClear = () => {
    search.clearSearch();
  };
</script>

<div class="searchInput">
  <div class="inputInner">
    <span class="icon icon--search">
      <span class="material-symbols-rounded"> search </span>
    </span>

    <!-- svelte-ignore a11y-autofocus -->
    <input
      type="text"
      value={$search}
      on:input={onInput}
      placeholder="Search City, Country"
      autofocus={focus}
    />

    {#if $search && $search.trim() !== ''}
      <span class="icon icon--close">
        <IconButton on:click={onClear} name="Clear search">
          <span class="material-symbols-rounded"> close </span>
        </IconButton>
      </span>
    {/if}
  </div>
</div>

<style lang="scss">
  .searchInput {
    padding: 12px;
    padding-top: 24px;

    .inputInner {
      position: relative;
    }

    input {
      height: 40px;
      width: 100%;
      border-radius: 22px;
      background-color: var(--color-bg-backdrop-t-1);
      border: 1px solid var(--color-border-text-box-grey-1);
      padding: 0 40px;
      outline: none;
      color: inherit;
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-normal);

      &::-webkit-input-placeholder {
        /* Edge */
        color: currentColor;
      }

      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: currentColor;
      }

      &::placeholder {
        color: currentColor;
      }
    }

    .icon {
      position: absolute;
      display: inline-flex;

      &--search {
        top: 9px;
        left: 12px;
        pointer-events: none;
      }

      &--close {
        top: 0;
        right: 1px;

        path {
          fill: currentColor;
        }
      }
    }

    :global(.icon-button) {
      width: 40px;
      height: 40px;
    }
  }
</style>
