<script lang="ts">
  import { clocks } from '$lib/stores/clocks';
  import { time } from '$lib/stores/time';

  import type { Clock } from '$lib/types';
  import { getTime } from '$lib/utils';

  export let clock: Clock;

  const {
    cityNameNative = '',
    cityName = '',
    countryName = '',
    id = '',
    timezone = '',
  } = clock || {};

  const handleCityDelete = () => {
    clocks.remove(id);
  };
</script>

<li class="clock">
  {cityNameNative || cityName}, {countryName}, {getTime($time, timezone)}
  <button on:click={handleCityDelete}>❌</button>
</li>

<style lang="scss">
  .clock {
    padding: 10px;
  }
</style>
