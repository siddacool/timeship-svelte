<script lang="ts">
  import { cities } from '$lib/stores/cities';

  import type { City } from '$lib/types';
  import { getTimeObjectFromTimezone } from '$lib/utils';

  export let city: City;

  const [cityName = '', countryCode = '', timezone = '', cityNameNative = ''] = city || [];

  const formattedName = cityNameNative || cityName;

  const time = timezone ? getTimeObjectFromTimezone(timezone).format('hh:mm:ss A D,MMMM ') : '';
</script>

<li>
  <span>{formattedName} . </span>
  <span>{$cities.countries[countryCode] ? $cities.countries[countryCode] : countryCode} . </span>
  <b>{time}</b>
</li>

<style>
</style>
