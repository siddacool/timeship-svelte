<script lang="ts">
  import { time } from '$lib/stores/time';
  import type { Timezone } from '$lib/types';
  import { getTime } from '$lib/utils';

  export let timezone: Timezone;

  const timeFormat = 'h:mm';
  const timeFormatExtraInfo = 'a';
</script>

<div class="time">
  <span class="main">{getTime($time, timezone, timeFormat)}</span>
  <span class="extra-info">{getTime($time, timezone, timeFormatExtraInfo)}</span>
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
