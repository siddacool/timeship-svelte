<script lang="ts">
  import VirtualList from 'svelte-tiny-virtual-list';
  import { cities, getFilteredCities } from '$lib/stores/cities';
  import CitiesListItem from './CitiesListItem.svelte';

  $: citiesList = getFilteredCities($cities.cities, $cities.search, $cities.countries);
</script>

<VirtualList width="100%" height={800} itemCount={citiesList.length} itemSize={20}>
  <div slot="item" let:index let:style {style}>
    <CitiesListItem city={citiesList[index]} />
  </div>
</VirtualList>

<style>
</style>
