<script lang="ts">
  import { clocks } from '$lib/stores/clocks';
  import { time } from '$lib/stores/time';
  import type { CityName, CityNameNative, CountryName, Timezone } from '$lib/types';
  import { getTime } from '$lib/utils';

  export let id: string | undefined;
  export let cityNameNative: CityNameNative;
  export let cityName: CityName;
  export let countryName: CountryName;
  export let timezone: Timezone;

  const handleCityDelete = () => {
    clocks.remove(id);
  };
</script>

<li class="clock">
  {cityNameNative || cityName}, {countryName}, {getTime($time, timezone)}
  <button on:click={handleCityDelete}>❌</button>
</li>

<style lang="scss">
  .clock {
    padding: 10px;
  }
</style>
