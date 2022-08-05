<script lang="ts">
  import { settings } from '$lib/stores/settings';

  import { SettingsThemes, type SettingsTheme } from '$lib/types';

  import SwitchButton from '../ui/SwitchButton.svelte';
  import SwitchButtonSection from '../ui/SwitchButtonSection.svelte';
  import ListOption from './ListOption.svelte';

  let active: number = $settings.theme;

  const onSwitch = (e: { detail: { value: SettingsTheme } }) => {
    const { detail } = e;
    const { value = SettingsThemes.auto } = detail;

    active = value;

    settings.setTheme(value);
  };
</script>

<ListOption title="Theme">
  <SwitchButton {active} total={3}>
    <SwitchButtonSection value={SettingsThemes.auto} on:switch={onSwitch} {active}>
      auto
    </SwitchButtonSection>
    <SwitchButtonSection value={SettingsThemes.light} on:switch={onSwitch} {active}>
      light
    </SwitchButtonSection>
    <SwitchButtonSection value={SettingsThemes.dark} on:switch={onSwitch} {active}>
      dark
    </SwitchButtonSection>
  </SwitchButton>
</ListOption>
