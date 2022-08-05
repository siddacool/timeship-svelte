<script lang="ts">
  import { settings } from '$lib/stores/settings';

  import { SettingsCountryFormats, SettingsThemes, type SettingsCountryFormat } from '$lib/types';

  import SwitchButton from '../ui/SwitchButton.svelte';
  import SwitchButtonSection from '../ui/SwitchButtonSection.svelte';
  import ListOption from './ListOption.svelte';

  let active: number = $settings.countryFormat;

  const onSwitch = (e: { detail: { value: SettingsCountryFormat } }) => {
    const { detail } = e;
    const { value = SettingsCountryFormats.countryName } = detail;

    active = value;

    settings.setCountryFormat(value);
  };
</script>

<ListOption title="Country name format">
  <SwitchButton {active} total={2}>
    <SwitchButtonSection value={SettingsCountryFormats.countryName} on:switch={onSwitch} {active}>
      Name
    </SwitchButtonSection>
    <SwitchButtonSection value={SettingsCountryFormats.countryCode} on:switch={onSwitch} {active}>
      Country code
    </SwitchButtonSection>
  </SwitchButton>
</ListOption>
