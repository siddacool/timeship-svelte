<script lang="ts">
  import { clocks } from '$lib/stores/clocks';
  import type { CityName, CityNameNative, CountryCode, CountryName, Timezone } from '$lib/types';
  import Card from '../Card.svelte';
  import City from './City.svelte';
  import ExpandIcon from './ExpandIcon.svelte';
  import ExtendedInfo from './ExtendedInfo.svelte';
  import Time from './Time.svelte';

  export let id: string | undefined;
  export let cityNameNative: CityNameNative;
  export let cityName: CityName;
  export let countryName: CountryName;
  export let timezone: Timezone;
  export let countryCode: CountryCode;

  let showExtendedInfo = false;

  const handleCityDelete = () => {
    clocks.remove(id);
  };

  const toggleExtendedInfo = () => {
    showExtendedInfo = !showExtendedInfo;
  };
</script>

<Card>
  <div class="clock">
    <Time {timezone} />
    <City {cityNameNative} {cityName} {countryName} />
    <ExtendedInfo {timezone} isActive={showExtendedInfo} />
    <ExpandIcon on:click={toggleExtendedInfo} isActive={showExtendedInfo} />
  </div>
</Card>

<style lang="scss">
  .clock {
    padding: 0 9px;
    padding-top: 4px;
    padding-right: 50px;
  }
</style>
