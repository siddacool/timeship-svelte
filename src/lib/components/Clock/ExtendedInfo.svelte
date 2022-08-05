<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import ExtendedInfoItem from './ExtendedInfoItem.svelte';
  import { time } from '$lib/stores/time';
  import { SettingsClockFormats, type Timezone } from '$lib/types';
  import { getTime } from '$lib/utils';
  import { settings } from '$lib/stores/settings';

  export let timezone: Timezone;
  export let isActive: boolean;
</script>

{#if isActive}
  <div class="extended-info" transition:slide={{ delay: 50, duration: 200, easing: quintOut }}>
    {#if $settings.clockFormat === SettingsClockFormats.hour24}
      <ExtendedInfoItem title="Standard time">
        {getTime($time, timezone, 'hh:mm A')}
      </ExtendedInfoItem>
    {:else}
      <ExtendedInfoItem title="Military time">{getTime($time, timezone, 'HH:mm')}</ExtendedInfoItem>
    {/if}

    <ExtendedInfoItem title="Date">
      {getTime($time, timezone, 'ddd, MMM D, YYYY')}
    </ExtendedInfoItem>
  </div>
{/if}

<style lang="scss">
  .extended-info {
    padding-top: 16px;
    padding-bottom: 8px;
  }
</style>
