<script lang="ts">
  import VirtualList from 'svelte-tiny-virtual-list';
  import { cities, getFilteredCities } from '$lib/stores/cities';
  import { search } from '$lib/stores/search';
  import SearchResult from './SearchResult.svelte';
  import SearchResultBase from './SearchResultBase.svelte';

  $: citiesList = getFilteredCities($cities, $search);
</script>

<div class="searchBox">
  <div class="list">
    {#if citiesList.length}
      <VirtualList width="100%" height={400} itemCount={citiesList.length} itemSize={50}>
        <div slot="item" let:index let:style {style}>
          <SearchResult city={citiesList[index]} />
        </div>
      </VirtualList>
    {:else}
      <div style="height: 50px">
        <SearchResultBase preventHover={true}>
          <span>No results</span>
        </SearchResultBase>
      </div>
    {/if}
  </div>
</div>
