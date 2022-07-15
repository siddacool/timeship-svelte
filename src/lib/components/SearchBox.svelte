<script lang="ts">
  import VirtualList from 'svelte-tiny-virtual-list';
  import { cities, getFilteredCities } from '$lib/stores/cities';
  import { search } from '$lib/stores/search';
  import SearchInput from './SearchInput.svelte';
  import SearchResult from './SearchResult.svelte';

  $: citiesList = getFilteredCities($cities, $search);
</script>

<div class="searchBox">
  <SearchInput />

  <div class="list">
    {#if citiesList.length}
      <VirtualList width="100%" height={400} itemCount={citiesList.length} itemSize={50}>
        <div slot="item" let:index let:style {style}>
          <SearchResult city={citiesList[index]} />
        </div>
      </VirtualList>
    {:else}
      <div>No results</div>
    {/if}
  </div>
</div>

<style lang="scss">
  .list {
    // :global(.virtual-list-inner) {
    // }
  }
</style>
