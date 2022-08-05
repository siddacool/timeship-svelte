<script lang="ts">
  import { settings } from '$lib/stores/settings';
  import type { CityName, CityNameNative, CountryName, CountryCode } from '$lib/types';
  import { SettingsCountryFormats } from '$lib/types';

  export let cityNameNative: CityNameNative;
  export let cityName: CityName;
  export let countryName: CountryName;
  export let countryCode: CountryCode;
</script>

<div class="city">
  <span class="main">{cityNameNative || cityName}</span>
  <span class="extra-info">
    {$settings.countryFormat === SettingsCountryFormats.countryCode ? countryCode : countryName}
  </span>
</div>

<style lang="scss">
  .city {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }

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
