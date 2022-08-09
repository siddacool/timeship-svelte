<script lang="ts">
  import type { City } from '$lib/types';
  import { cities } from '$lib/stores/cities';
  import { clocks } from '$lib/stores/clocks';
  import { generateClockId, getRandomNumber } from '$lib/utils';
  import { search } from '$lib/stores/search';
  import SearchResultBase from './SearchResultBase.svelte';
  import { general } from '$lib/stores/general';

  export let city: City;

  const [cityName = '', countryCode = '', timezone = '', cityNameNative = ''] = city || [];

  const formattedName = cityNameNative || cityName;

  const countryName = $cities.countries[countryCode] ? $cities.countries[countryCode] : countryCode;

  const addData = {
    cityName,
    cityNameNative,
    countryName,
    countryCode,
    timezone,
    id: '',
    color: '',
  };

  addData.id = generateClockId(addData);
  addData.color = `${getRandomNumber(11)}`;

  const ifExistInClocks = $clocks.find((d) => d.id === addData.id) ? true : false;

  const onCityClick = () => {
    if (ifExistInClocks) {
      return;
    }

    clocks.add(addData);
    search.clearSearch();
    general.setSearchModal(false);
  };
</script>

<SearchResultBase disabled={ifExistInClocks} on:click={onCityClick}>
  <b>{formattedName}</b>
  <span>{countryName}</span>
</SearchResultBase>
