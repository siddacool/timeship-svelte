<script lang="ts">
  import '$lib/styles/index.scss';
  import { cities } from '$lib/stores/cities';
  import { onMount } from 'svelte';
  import SearchBox from '$lib/components/SearchBox.svelte';
  import Clocks from '$lib/components/Clocks.svelte';

  onMount(() => {
    cities.fetchData();
  });
</script>

<SearchBox />
<Clocks />

<style lang="scss">
</style>
