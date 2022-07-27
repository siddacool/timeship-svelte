<script lang="ts">
  import type { CityName, CityNameNative, CountryName } from '$lib/types';

  export let cityNameNative: CityNameNative;
  export let cityName: CityName;
  export let countryName: CountryName;
</script>

<div class="city">
  <span class="main">{cityNameNative || cityName}</span>
  <span class="extra-info">{countryName}</span>
</div>

<style lang="scss">
  .main {
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-normal);
    letter-spacing: -0.06em;
    margin-right: 6px;
  }

  .extra-info {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-normal);
  }
</style>
