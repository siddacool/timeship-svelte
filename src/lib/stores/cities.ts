import { writable } from 'svelte/store';
import { fetchYou } from '$lib/utils';
import type { Cities, City, CitiesData } from '$lib/types';

const citiesWritableDefaultValue: CitiesData = { cities: [], countries: {} };

function createCities() {
  const { update, subscribe } = writable(citiesWritableDefaultValue);

  return {
    subscribe,
    fetchData: async () => {
      try {
        const data = await fetchYou('./cities.data.json');

        return update(() => data);
      } catch (e) {
        return update((d) => d);
      }
    },
  };
}

export const getFilteredCities = (citiesData: CitiesData, searchFilter: string) => {
  if (!searchFilter || searchFilter.trim() === '') {
    return [];
  }

  const newDataStartsWith: Cities = [];
  const newDataIncludes: Cities = [];
  const newDataCountryStartsWith: Cities = [];
  const newDataCountryIncludes: Cities = [];

  const includer = searchFilter.trim().toLowerCase();

  const { cities = [], countries = {} } = citiesData;

  cities.forEach((city: City) => {
    const [, countryCode = '', ,] = city || [];
    let [cityName = '', , , cityNameNative = ''] = city || [];
    cityName = cityName.trim().toLowerCase();
    cityNameNative = cityNameNative.trim().toLowerCase();

    const countryName = countries[countryCode] ? countries[countryCode].trim().toLowerCase() : '';

    if (cityName.startsWith(includer) || cityNameNative.startsWith(includer)) {
      newDataStartsWith.push(city);
    } else if (cityName.includes(includer) || cityNameNative.includes(includer)) {
      newDataIncludes.push(city);
    } else if (countryName.startsWith(includer)) {
      newDataCountryStartsWith.push(city);
    } else if (countryName.includes(includer)) {
      newDataCountryIncludes.push(city);
    }
  });

  return [
    ...newDataStartsWith,
    ...newDataIncludes,
    ...newDataCountryStartsWith,
    ...newDataCountryIncludes,
  ];
};

export const cities = createCities();
