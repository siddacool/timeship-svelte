<script lang="ts">
  import type { CityName, CityNameNative, CountryCode, CountryName, Timezone } from '$lib/types';
  import Card from '../ui/Card.svelte';
  import City from './City.svelte';
  import DeleteButton from './DeleteButton.svelte';
  import Time from './Time.svelte';

  export let id: string | undefined;
  export let cityNameNative: CityNameNative;
  export let cityName: CityName;
  export let countryName: CountryName;
  export let timezone: Timezone;
  export let countryCode: CountryCode;
  export let color: string = '';
</script>

<Card
  style="background-color: var({`--color-bg-clock-${color}`});
    color: var({`--color-font-clock-${color}`})"
>
  <div class="clock">
    <DeleteButton {id} />
    <Time {timezone} />
    <City {cityNameNative} {cityName} {countryName} {countryCode} />
  </div>
</Card>

<style lang="scss">
  .clock {
    padding: 0 9px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 58px;
    transition: padding 300ms;
  }
</style>
