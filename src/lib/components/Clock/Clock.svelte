<script lang="ts">
  import { general } from '$lib/stores/general';
  import type { CityName, CityNameNative, CountryCode, CountryName, Timezone } from '$lib/types';
  import Card from '../ui/Card.svelte';
  import City from './City.svelte';
  import DragHandle from './DragHandle.svelte';
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
  style="background-color: var({$general.reorder
    ? '--color-bg-surface-main'
    : `--color-bg-clock-${color}`});
    color: var({$general.reorder ? '--color-font-main' : `--color-font-clock-${color}`})"
>
  <div class="clock">
    <DragHandle on:mousedown on:touchstart on:mouseup on:touchend />
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
    padding-left: 40px;
  }
</style>
