<script lang="ts">
  import { general } from '$lib/stores/general';
  import { search } from '$lib/stores/search';

  import SearchBox from './SearchBox.svelte';
  import SearchInput from './SearchInput.svelte';

  const onBack = () => {
    search.clearSearch();
    general.setSearchModal(false);
  };
</script>

<div class="search-section">
  <SearchInput />
  <SearchBox />
  <div class="back" on:click={onBack}>
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_20_259"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="22"
      >
        <rect width="23.5811" height="22" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_20_259)">
        <path
          d="M10.5378 17.6917L4.15124 11.7333C4.03661 11.6264 3.95473 11.5118 3.9056 11.3896C3.85647 11.2674 3.83191 11.1375 3.83191 11C3.83191 10.8625 3.85647 10.7326 3.9056 10.6104C3.95473 10.4882 4.03661 10.3736 4.15124 10.2667L10.5378 4.30833C10.7507 4.125 11.0087 4.02936 11.312 4.02142C11.6146 4.01408 11.8806 4.10972 12.1098 4.30833C12.3391 4.50695 12.458 4.75139 12.4665 5.04167C12.4744 5.33195 12.3637 5.57639 12.1344 5.775L7.66383 9.94584H18.1525C18.4636 9.94584 18.7299 10.0491 18.9513 10.2557C19.172 10.4616 19.2824 10.7097 19.2824 11C19.2824 11.2903 19.172 11.5384 18.9513 11.7443C18.7299 11.9509 18.4636 12.0542 18.1525 12.0542H7.66383L12.1344 16.225C12.3473 16.4083 12.458 16.6491 12.4665 16.9473C12.4744 17.2449 12.3637 17.4931 12.1344 17.6917C11.9215 17.8903 11.6595 17.9896 11.3484 17.9896C11.0372 17.9896 10.767 17.8903 10.5378 17.6917Z"
          fill="currentColor"
        />
      </g>
    </svg>

    Back
  </div>
</div>

<style lang="scss">
  .back {
    height: 60px;
    color: inherit;
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-semi-bold);
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    svg {
      margin-right: 8px;
    }
  }
</style>
