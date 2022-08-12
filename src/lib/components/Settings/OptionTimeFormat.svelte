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
      <span class="material-symbols-rounded icons-time"> schedule </span>
      <span> 12 Hrs </span>
    </SwitchButtonSection>
    <SwitchButtonSection value={SettingsClockFormats.hour24} on:switch={onSwitch} {active}>
      <span class="material-symbols-rounded icons-time"> schedule </span>
      <span> 24 Hrs </span>
    </SwitchButtonSection>
  </SwitchButton>
</ListOption>

<style lang="scss">
  span {
    margin-left: 10px;
  }

  :global(.icons-time) {
    font-size: 24px;
  }
</style>
