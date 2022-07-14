<script lang="ts">
  import VirtualList from 'svelte-tiny-virtual-list';
  import { cities } from '$lib/stores/cities';
  import CitiesListItem from './CitiesListItem.svelte';
</script>

<VirtualList width="100%" height={800} itemCount={$cities.cities.length} itemSize={20}>
  <div slot="item" let:index let:style {style}>
    <CitiesListItem city={$cities.cities[index]} />
  </div>
</VirtualList>

<style>
</style>
