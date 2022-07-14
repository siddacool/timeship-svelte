import { writable } from 'svelte/store';
import type {
  Settings,
  SettingsClockFormat,
  SettingsCountryFormat,
  SettingsFreezeTime,
  SettingsTheme,
} from '$lib/types';
import { getStoredValue, setStoredValue } from '$lib/utils';

const settingsLocalStorage = getStoredValue('settings', {
  theme: 'auto',
  clockFormat: '12hour',
  countryFormat: 'countryCode',
  freezeTime: false,
});

const settingsDefaultValue: Settings = settingsLocalStorage;

function createSettings() {
  const { update, subscribe } = writable(settingsDefaultValue);

  return {
    subscribe,
    setTheme: (theme: SettingsTheme = 'auto') => {
      return update((d) => {
        d.theme = theme;

        setStoredValue('settings', d);

        return d;
      });
    },
    setClockFormat: (clockFormat: SettingsClockFormat = '12hour') => {
      return update((d) => {
        d.clockFormat = clockFormat;

        setStoredValue('settings', d);

        return d;
      });
    },
    setCountryFormat: (countryFormat: SettingsCountryFormat = 'countryCode') => {
      return update((d) => {
        d.countryFormat = countryFormat;

        setStoredValue('settings', d);

        return d;
      });
    },
    setFreezeTime: (freezeTime: SettingsFreezeTime = false) => {
      return update((d) => {
        d.freezeTime = freezeTime;
        setStoredValue('settings', d);

        return d;
      });
    },
  };
}

export const settings = createSettings();
