<script lang="ts">
  import { settings } from '$lib/stores/settings';

  import type { SettingsTheme } from '$lib/types';

  import SwitchButton from '../ui/SwitchButton.svelte';
  import SwitchButtonSection from '../ui/SwitchButtonSection.svelte';
  import ListOption from './ListOption.svelte';

  const themeOptions = ['auto', 'light', 'dark'];

  let activeValue: SettingsTheme = $settings.theme;
  let activePosition: number = themeOptions.findIndex((d) => d === $settings.theme);

  const onSwitch = (e: { detail: { value: SettingsTheme; position: number } }) => {
    const { detail } = e;
    const { value = 'auto', position = 0 } = detail;

    activeValue = value;
    activePosition = position;

    settings.setTheme(value);
  };
</script>

<ListOption title="Theme">
  <SwitchButton {activePosition} total={3}>
    <SwitchButtonSection value="auto" position={0} on:switch={onSwitch} {activePosition}>
      auto
    </SwitchButtonSection>
    <SwitchButtonSection value="light" position={1} on:switch={onSwitch} {activePosition}>
      light
    </SwitchButtonSection>
    <SwitchButtonSection value="light" position={2} on:switch={onSwitch} {activePosition}>
      dark
    </SwitchButtonSection>
  </SwitchButton>
</ListOption>
