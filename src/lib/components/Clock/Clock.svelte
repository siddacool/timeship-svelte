<script lang="ts">
  import { clocks } from '$lib/stores/clocks';
  import { general } from '$lib/stores/general';
  import type { CityName, CityNameNative, CountryCode, CountryName, Timezone } from '$lib/types';
  import Card from '../ui/Card.svelte';
  import City from './City.svelte';
  import DeleteButton from './DeleteButton.svelte';
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

  let showExtendedInfo = false;

  const toggleExtendedInfo = () => {
    showExtendedInfo = !showExtendedInfo;
  };

  const closeExtendedInfo = () => {
    showExtendedInfo = false;
  };
</script>

<Card>
  <div class="clock" class:draggable={$general.reorder}>
    <DragHandle isActive={$general.reorder} />
    <Time {timezone} />
    <City {cityNameNative} {cityName} {countryName} {countryCode} />
    <RederderBtn isActive={showExtendedInfo && !$general.reorder} {closeExtendedInfo} />
    <DeleteButton isActive={$general.reorder} {id} />
    <ExtendedInfo {timezone} isActive={showExtendedInfo && !$general.reorder} />
    <ExpandBtn
      on:click={toggleExtendedInfo}
      isOpen={showExtendedInfo}
      isActive={!$general.reorder}
    />
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
