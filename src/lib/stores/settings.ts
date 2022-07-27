import { writable } from 'svelte/store';
import type {
  Settings,
  SettingsClockFormat,
  SettingsCountryFormat,
  SettingsFreezeTimeAt,
  SettingsTheme,
} from '$lib/types';
import { getStoredValue, setStoredValue } from '$lib/utils';

const settingsLocalStorage = getStoredValue('settings', {
  theme: 'auto',
  clockFormat: '12hour',
  countryFormat: 'countryCode',
  freezeTimeAt: 'Delhi__IN__Asia/Kolkata__12:44:12:18:07:2022',
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
    setFreezeTimeAt: (freezeTimeAt: SettingsFreezeTimeAt = null) => {
      return update((d) => {
        d.freezeTimeAt = freezeTimeAt;
        setStoredValue('settings', d);

        return d;
      });
    },
  };
}

export const settings = createSettings();
