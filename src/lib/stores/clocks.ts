import { writable } from 'svelte/store';
import type { Clock } from '$lib/types';
import { getStoredValue, setStoredValue } from '$lib/utils';

const clockLocalStorage = getStoredValue('clocks', []);

const clocksWritableDefaultValue: Clock[] = clockLocalStorage;

function createClocks() {
  const { update, set, subscribe } = writable(clocksWritableDefaultValue);

  return {
    subscribe,
    add: (clock: Clock) => {
      return update((d) => {
        const ifExist = d.find((d) => d.id === clock.id);

        if (ifExist && ifExist.id) {
          return d;
        }

        d.push(clock);

        setStoredValue('clocks', d);

        return d;
      });
    },
    remove: (id = '') => {
      return update((d) => {
        const clocks = [...d];

        setStoredValue(
          'clocks',
          clocks.filter((clock) => clock.id !== id)
        );

        return [...clocks.filter((clock) => clock.id !== id)];
      });
    },
  };
}

export const clocks = createClocks();

export const getClockFromId = (clockData: Clock[], id: string) => {
  return clockData.find((clock) => clock.id === id)
    ? clockData.find((clock) => clock.id === id)
    : { cityNameNative: '', cityName: '', countryName: '', id: '', timezone: '' };
};
