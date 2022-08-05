<script lang="ts">
  import { settings } from '$lib/stores/settings';

  import { time } from '$lib/stores/time';
  import { SettingsClockFormats, type Timezone } from '$lib/types';
  import { getTime } from '$lib/utils';

  export let timezone: Timezone;

  const timeFormat = 'h:mm';
  const timeFormat24 = 'HH:mm';
  const timeFormatExtraInfo = 'a';
</script>

<div class="time">
  {#if $settings.clockFormat === SettingsClockFormats.hour24}
    <span class="main">{getTime($time, timezone, timeFormat24)}</span>
  {:else}
    <span class="main">{getTime($time, timezone, timeFormat)}</span>
    <span class="extra-info">{getTime($time, timezone, timeFormatExtraInfo)}</span>
  {/if}
</div>

<style lang="scss">
  .main {
    font-size: var(--font-size-x-large);
    font-weight: var(--font-weight-semi-bold);
  }

  .extra-info {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-normal);
  }
</style>
