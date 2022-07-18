<script lang="ts">
  import { flip } from 'svelte/animate';
  import { clocks } from '$lib/stores/clocks';
  import { time } from '$lib/stores/time';
  import type { CityName, CityNameNative, CountryCode, CountryName, Timezone } from '$lib/types';
  import { getTime } from '$lib/utils';

  export let id: string | undefined;
  export let cityNameNative: CityNameNative;
  export let cityName: CityName;
  export let countryName: CountryName;
  export let timezone: Timezone;
  export let countryCode: CountryCode;

  const handleCityDelete = () => {
    clocks.remove(id);
  };
</script>

<div class="clock">
  {cityNameNative || cityName}, {countryName}, {countryCode}, {getTime($time, timezone)}
  <button on:click={handleCityDelete}>❌</button>
</div>

<style lang="scss">
  .clock {
  }
</style>
