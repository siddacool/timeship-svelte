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
  import LongPressReorder from './LongPressReorder.svelte';
  import RederderBtn from './RederderBtn.svelte';
  import Time from './Time.svelte';

  export let id: string | undefined;
  export let cityNameNative: CityNameNative;
  export let cityName: CityName;
  export let countryName: CountryName;
  export let timezone: Timezone;
  export let countryCode: CountryCode;
  export let color: string = '';
  export let expanded: boolean = false;

  const toggleExtendedInfo = () => {
    clocks.toggleExpand(id);
  };
</script>

<Card
  style="background-color: var({$general.reorder
    ? '--color-bg-surface-main'
    : `--color-bg-clock-${color}`});
    color: var({$general.reorder ? '--color-font-main' : `--color-font-clock-${color}`})"
>
  <div class="clock" class:draggable={$general.reorder}>
    <DragHandle isActive={$general.reorder} />
    <LongPressReorder isActive={!$general.reorder && !expanded} />
    <Time {timezone} />
    <City {cityNameNative} {cityName} {countryName} {countryCode} />
    <RederderBtn isActive={expanded && !$general.reorder} />
    <DeleteButton isActive={$general.reorder} {id} />
    <ExtendedInfo {timezone} isActive={expanded && !$general.reorder} />
    <ExpandBtn on:click={toggleExtendedInfo} isOpen={expanded} isActive={!$general.reorder} />
  </div>
</Card>

<style lang="scss">
  .clock {
    padding: 0 9px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 58px;
    transition: padding 300ms;

    &.draggable {
      padding-left: 50px;
    }
  }
</style>
