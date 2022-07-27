import { writable } from 'svelte/store';
import type { Clock } from '$lib/types';
import { getStoredValue, setStoredValue } from '$lib/utils';

const clockLocalStorage = getStoredValue('clocks', []);

const clocksWritableDefaultValue: Clock[] = [
  {
    cityName: 'Tokyo',
    cityNameNative: 'Tokyo',
    countryName: 'Japan',
    countryCode: 'JP',
    timezone: 'Asia/Tokyo',
    id: 'Tokyo__Japan__Asia/Tokyo',
  },
  {
    cityName: 'Mumbai',
    cityNameNative: 'Mumbai',
    countryName: 'India',
    countryCode: 'IN',
    timezone: 'Asia/Kolkata',
    id: 'Mumbai__India__Asia/Kolkata',
  },
  {
    cityName: 'New Delhi',
    cityNameNative: 'New Delhi',
    countryName: 'India',
    countryCode: 'IN',
    timezone: 'Asia/Kolkata',
    id: 'New Delhi__India__Asia/Kolkata',
  },
];

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

        // setStoredValue('clocks', d);

        return d;
      });
    },
    remove: (id = '') => {
      return update((d) => {
        const clocks = d.filter((clock) => clock.id !== id);

        // setStoredValue('clocks', clocks);

        return clocks;
      });
    },
    organize: (newData: Clock[]) => {
      return update(() => {
        // setStoredValue('clocks', newData);

        return newData;
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
