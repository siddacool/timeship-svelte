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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_20_264"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect x="0.466309" width="22.8356" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_20_264)">
          <path
            d="M19.1153 21L13.121 14.7C12.6453 15.1 12.0982 15.4167 11.4797 15.65C10.8612 15.8833 10.2031 16 9.50538 16C7.77685 16 6.3141 15.371 5.11714 14.113C3.91954 12.8543 3.32074 11.3167 3.32074 9.5C3.32074 7.68333 3.91954 6.14567 5.11714 4.887C6.3141 3.629 7.77685 3 9.50538 3C11.2339 3 12.697 3.629 13.8946 4.887C15.0915 6.14567 15.69 7.68333 15.69 9.5C15.69 10.2333 15.579 10.925 15.357 11.575C15.135 12.225 14.8337 12.8 14.4531 13.3L20.4474 19.6L19.1153 21ZM9.50538 14C10.6947 14 11.7058 13.5627 12.5387 12.688C13.3709 11.8127 13.787 10.75 13.787 9.5C13.787 8.25 13.3709 7.18733 12.5387 6.312C11.7058 5.43733 10.6947 5 9.50538 5C8.31602 5 7.30491 5.43733 6.47205 6.312C5.63982 7.18733 5.2237 8.25 5.2237 9.5C5.2237 10.75 5.63982 11.8127 6.47205 12.688C7.30491 13.5627 8.31602 14 9.50538 14Z"
            fill="currentColor"
          />
        </g>
      </svg>
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_20_267"
              style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect x="0.30188" width="22.8356" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_20_267)">
              <path
                d="M6.3914 19L5.05933 17.6L10.3876 12L5.05933 6.4L6.3914 5L11.7197 10.6L17.048 5L18.3801 6.4L13.0518 12L18.3801 17.6L17.048 19L11.7197 13.4L6.3914 19Z"
                fill="#7D7D7D"
              />
            </g>
          </svg>
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
      background-color: var(--color-bg-grey-1);
      border: 1px solid var(--color-border-text-box-grey-1);
      padding: 0 40px;
      outline: none;
      color: inherit;
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-normal);
    }

    .icon {
      position: absolute;
      color: var(--color-font-grey-2);
      display: inline-flex;

      &--search {
        top: 9px;
        left: 12px;
        pointer-events: none;
      }

      &--close {
        top: 0;
        right: 1px;
      }
    }

    :global(.icon-button) {
      width: 40px;
      height: 40px;
    }
  }
</style>
