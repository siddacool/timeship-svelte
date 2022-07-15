<script lang="ts">
  import type { City } from '$lib/types';
  import { cities } from '$lib/stores/cities';
  import { clocks } from '$lib/stores/clocks';
  import { generateClockId } from '$lib/utils';
  import { search } from '$lib/stores/search';

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
  };

  addData.id = generateClockId(addData);

  const ifExistInClocks = $clocks.find((d) => d.id === addData.id) ? true : false;

  const onCityClick = () => {
    if (ifExistInClocks) {
      return;
    }

    clocks.add(addData);
    search.clearSearch();
  };
</script>

<div class={`searchResult ${ifExistInClocks ? 'disabled' : ''}`} on:click={onCityClick}>
  <span>{formattedName} . </span>
  <span>{countryName} . </span>
</div>

<style lang="scss">
  .searchResult {
    display: flex;
    padding: 4px 8px;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }

    &.disabled {
      color: #878787;
    }
  }
</style>
