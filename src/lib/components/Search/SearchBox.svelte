<script lang="ts">
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
      {#each citiesList as city}
        <div style="height: 50px">
          <SearchResult {city} />
        </div>
      {/each}
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

  .list {
    min-height: 200px;
    max-height: clamp(200px, 55vh, 500px);
    overflow: auto;

    @media (min-width: 1024px) {
      min-height: initial;
      max-height: clamp(200px, 30vh, 500px);
    }
  }
</style>
