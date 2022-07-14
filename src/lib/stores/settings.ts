import { writable } from 'svelte/store';
import type {
  Settings,
  SettingsClockFormat,
  SettingsCountryFormat,
  SettingsFreezeTime,
  SettingsTheme,
} from '$lib/types';

const settingsDefaultValue: Settings = {
  theme: 'auto',
  clockFormat: '12hour',
  countryFormat: 'countryCode',
  freezeTime: false,
};

function createSettings() {
  const { update, subscribe } = writable(settingsDefaultValue);

  return {
    subscribe,
    setTheme: (theme: SettingsTheme = 'auto') => {
      return update((d) => {
        d.theme = theme;

        return d;
      });
    },
    setClockFormat: (clockFormat: SettingsClockFormat = '12hour') => {
      return update((d) => {
        d.clockFormat = clockFormat;

        return d;
      });
    },
    setCountryFormat: (countryFormat: SettingsCountryFormat = 'countryCode') => {
      return update((d) => {
        d.countryFormat = countryFormat;

        return d;
      });
    },
    setFreezeTime: (freezeTime: SettingsFreezeTime = false) => {
      return update((d) => {
        d.freezeTime = freezeTime;

        return d;
      });
    },
  };
}

export const settings = createSettings();
