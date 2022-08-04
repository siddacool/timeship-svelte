<script lang="ts">
  import { settings } from '$lib/stores/settings';
  import type { SettingsClockFormat } from '$lib/types';

  import SwitchButton from '../ui/SwitchButton.svelte';
  import SwitchButtonSection from '../ui/SwitchButtonSection.svelte';
  import ListOption from './ListOption.svelte';

  const timeFormatOptions = ['12hour', '24hour'];

  let activeValue: SettingsClockFormat = $settings.clockFormat;
  let activePosition: number = timeFormatOptions.findIndex((d) => d === $settings.clockFormat);

  const onSwitch = (e: { detail: { value: SettingsClockFormat; position: number } }) => {
    const { detail } = e;
    const { value = '12hour', position = 0 } = detail;

    activeValue = value;
    activePosition = position;

    settings.setClockFormat(value);
  };
</script>

<ListOption title="Time format">
  <SwitchButton {activePosition} total={2}>
    <SwitchButtonSection value="12hour" position={0} on:switch={onSwitch} {activePosition}>
      12 Hrs
    </SwitchButtonSection>
    <SwitchButtonSection value="24hour" position={1} on:switch={onSwitch} {activePosition}>
      24 Hrs
    </SwitchButtonSection>
  </SwitchButton>
</ListOption>
