<script lang="ts">
  import { general } from '$lib/stores/general';
  import { search } from '$lib/stores/search';

  export let focus: boolean = false;

  import SearchBox from './SearchBox.svelte';
  import SearchInput from './SearchInput.svelte';

  const onBack = () => {
    search.clearSearch();
    general.setSearchModal(false);
  };
</script>

<div class="search-section">
  <SearchInput {focus} />
  <SearchBox />
  <div class="back" on:click={onBack}>
    <span class="material-symbols-rounded"> arrow_back </span>
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

    .material-symbols-rounded {
      margin-right: 8px;
    }
  }
</style>
