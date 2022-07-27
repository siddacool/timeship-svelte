<script lang="ts">
  import { clocks } from '$lib/stores/clocks';
  import type { CityName, CityNameNative, CountryCode, CountryName, Timezone } from '$lib/types';
  import Card from '../Card.svelte';
  import City from './City.svelte';
  import DragHandle from './DragHandle.svelte';
  import ExpandBtn from './ExpandBtn.svelte';
  import ExtendedInfo from './ExtendedInfo.svelte';
  import RederderBtn from './RederderBtn.svelte';
  import Time from './Time.svelte';

  export let id: string | undefined;
  export let cityNameNative: CityNameNative;
  export let cityName: CityName;
  export let countryName: CountryName;
  export let timezone: Timezone;
  export let countryCode: CountryCode;
  export let isDragable: boolean = false;
  export let toggleDrag = () => {};

  let showExtendedInfo = false;

  const handleCityDelete = () => {
    clocks.remove(id);
  };

  const toggleExtendedInfo = () => {
    showExtendedInfo = !showExtendedInfo;
  };
</script>

<Card>
  <div class="clock" class:draggable={isDragable}>
    <DragHandle isActive={isDragable} />
    <Time {timezone} />
    <City {cityNameNative} {cityName} {countryName} />
    <RederderBtn isActive={showExtendedInfo && !isDragable} on:click={toggleDrag} />
    <ExtendedInfo {timezone} isActive={showExtendedInfo && !isDragable} />
    <ExpandBtn on:click={toggleExtendedInfo} isOpen={showExtendedInfo} isActive={!isDragable} />
  </div>
</Card>

<style lang="scss">
  .clock {
    padding: 0 9px;
    padding-top: 4px;
    padding-right: 58px;
    transition: padding 300ms;

    &.draggable {
      padding-left: 50px;
    }
  }
</style>
