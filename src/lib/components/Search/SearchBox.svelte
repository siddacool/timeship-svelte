<script lang="ts">
  import VirtualList from 'svelte-tiny-virtual-list';
  import { cities, getFilteredCities } from '$lib/stores/cities';
  import { search } from '$lib/stores/search';
  import SearchResult from './SearchResult.svelte';
  import SearchResultBase from './SearchResultBase.svelte';
  import LoadingBars from '../ui/LoadingBars.svelte';

  $: citiesList = getFilteredCities($cities, $search);
</script>

<div class="searchBox">
  <div class="list">
    {#if $cities?.cities.length && citiesList.length}
      <VirtualList width="100%" height={400} itemCount={citiesList.length} itemSize={50}>
        <div slot="item" let:index let:style {style}>
          <SearchResult city={citiesList[index]} />
        </div>
      </VirtualList>
    {:else if $cities?.cities.length && !citiesList.length}
      <div style="height: 50px">
        <SearchResultBase preventHover={true}>
          <span>No results</span>
        </SearchResultBase>
      </div>
    {:else}
      <div style="height: 50px" class="loading">
        <SearchResultBase preventHover={true}>
          <LoadingBars />
          Loading...
        </SearchResultBase>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .loading {
    text-align: center;
    :global(span) {
      margin-right: 6px;
    }

    :global(.searchResultBase) {
      justify-content: center;
    }
  }
</style>
