<script lang="ts">
  import { settings } from '$lib/stores/settings';
  import { SettingsClockFormats, type SettingsClockFormat } from '$lib/types';

  import SwitchButton from '../ui/SwitchButton.svelte';
  import SwitchButtonSection from '../ui/SwitchButtonSection.svelte';
  import ListOption from './ListOption.svelte';

  let active: SettingsClockFormat = $settings.clockFormat;

  const onSwitch = (e: { detail: { value: SettingsClockFormat } }) => {
    const { detail } = e;
    const { value = SettingsClockFormats.hour12 } = detail;

    active = value;

    settings.setClockFormat(value);
  };
</script>

<ListOption title="Time format">
  <SwitchButton {active} total={2}>
    <SwitchButtonSection value={SettingsClockFormats.hour12} on:switch={onSwitch} {active}>
      12 Hrs
    </SwitchButtonSection>
    <SwitchButtonSection value={SettingsClockFormats.hour24} on:switch={onSwitch} {active}>
      24 Hrs
    </SwitchButtonSection>
  </SwitchButton>
</ListOption>
