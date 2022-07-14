import { writable } from 'svelte/store';
import { fetchYou } from '$lib/utils';
import type { Cities, Countries } from '$lib/types';

interface CitiesWritable {
  cities: Cities;
  countries: Countries;
}

const citiesWritableDefaultValue: CitiesWritable = { cities: [], countries: {} };

function createCities() {
  const { update, subscribe } = writable(citiesWritableDefaultValue);

  return {
    subscribe,
    // increment: () => update((n) => n + 1),
    // decrement: () => update((n) => n - 1),
    // reset: () => set(0),
    fetchData: async () => {
      try {
        const data = await fetchYou('./cities.data.json');

        return update(() => data);
      } catch (e) {
        console.log(e);

        return update((d) => d);
      }
    },
  };
}

export const cities = createCities();
