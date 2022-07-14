<script lang="ts">
  import '$lib/styles/index.scss';
  import { cities } from '$lib/stores/cities';
  import { onMount } from 'svelte';
  import CitiesList from '$lib/components/CitiesList.svelte';
  import { settings } from '$lib/stores/settings';

  onMount(() => {
    cities.fetchData();
    settings.setClockFormat('24hour');
  });
</script>

<CitiesList />

<style lang="scss">
</style>
