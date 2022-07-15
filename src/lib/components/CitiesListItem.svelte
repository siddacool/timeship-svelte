<script lang="ts">
  import type { City } from '$lib/types';
  import { cities } from '$lib/stores/cities';
  import { getTime } from '$lib/utils';

  export let city: City;

  const [cityName = '', countryCode = '', timezone = '', cityNameNative = ''] = city || [];

  const formattedName = cityNameNative || cityName;

  const time = getTime(timezone);
</script>

<li>
  <span>{formattedName} . </span>
  <span>{$cities.countries[countryCode] ? $cities.countries[countryCode] : countryCode} . </span>
  <b>{time}</b>
</li>

<style>
</style>
