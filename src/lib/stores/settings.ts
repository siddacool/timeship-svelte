import { writable } from 'svelte/store';
import {
  SettingsClockFormats,
  SettingsCountryFormats,
  SettingsThemes,
  type Settings,
  type SettingsClockFormat,
  type SettingsCountryFormat,
  type SettingsTheme,
} from '$lib/types';
import { getStoredValue, setStoredValue } from '$lib/utils';

const settingsLocalStorage = getStoredValue('settings', {
  theme: 'auto',
  clockFormat: '12hour',
  countryFormat: 'countryCode',
});

const settingsDefaultValue: Settings = settingsLocalStorage;

function createSettings() {
  const { update, subscribe } = writable(settingsDefaultValue);

  return {
    subscribe,
    setTheme: (theme: SettingsTheme = SettingsThemes.auto) => {
      return update((d) => {
        d.theme = theme;

        setStoredValue('settings', d);

        return d;
      });
    },
    setClockFormat: (clockFormat: SettingsClockFormat = SettingsClockFormats.hour12) => {
      return update((d) => {
        d.clockFormat = clockFormat;

        setStoredValue('settings', d);

        return d;
      });
    },
    setCountryFormat: (
      countryFormat: SettingsCountryFormat = SettingsCountryFormats.countryName
    ) => {
      return update((d) => {
        d.countryFormat = countryFormat;

        setStoredValue('settings', d);

        return d;
      });
    },
  };
}

export const settings = createSettings();
