<script lang="ts">
  import { time } from '$lib/stores/time';
  import type { Timezone } from '$lib/types';
  import { getTime } from '$lib/utils';
  import type { Dayjs } from 'dayjs';

  export let timezone: Timezone;

  const getDayData = (t: Dayjs, tz: Timezone) => {
    const localDay = getTime(t, Intl.DateTimeFormat().resolvedOptions().timeZone, 'DD');
    const targetDay = getTime(t, tz, 'DD');

    if (localDay !== targetDay) {
      return getTime(t, tz, ', MMM, D');
    } else {
      return '';
    }
  };
</script>

{getDayData($time, timezone)}
