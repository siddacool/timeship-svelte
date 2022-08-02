<script lang="ts">
  import '$lib/styles/index.scss';
  import { cities } from '$lib/stores/cities';
  import { onMount } from 'svelte';
  import SearchBox from '$lib/components/SearchBox.svelte';
  import Clocks from '$lib/components/Clocks.svelte';
  import ReorderPopBelow from '$lib/components/ReorderPopBelow.svelte';
  import Controls from '$lib/components/Controls.svelte';

  onMount(() => {
    cities.fetchData();
  });
</script>

<main>
  <Clocks />
</main>
<Controls />
<ReorderPopBelow />

<style lang="scss">
  main {
    @media (min-width: 1024px) {
      max-width: 650px;
      margin: 0 auto;
    }
  }
</style>
