<script lang="ts">
  import '$lib/styles/index.scss';
  import { cities } from '$lib/stores/cities';
  import { onMount } from 'svelte';
  import CitiesList from '$lib/components/CitiesList.svelte';

  onMount(() => {
    cities.fetchData();
  });
</script>

<CitiesList />

<style lang="scss">
</style>
