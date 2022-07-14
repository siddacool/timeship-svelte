import { writable } from 'svelte/store';
import { fetchYou } from '$lib/utils';
import type { Cities, Countries, City } from '$lib/types';

interface CitiesWritable {
  cities: Cities;
  countries: Countries;
  search: string;
}

const citiesWritableDefaultValue: CitiesWritable = { cities: [], countries: {}, search: '' };

function createCities() {
  const { update, subscribe } = writable(citiesWritableDefaultValue);

  return {
    subscribe,
    fetchData: async () => {
      try {
        const data = await fetchYou('./cities.data.json');

        return update((d) =>
          Object.assign(
            {},
            {
              ...data,
              search: d.search,
            }
          )
        );
      } catch (e) {
        console.log(e);

        return update((d) => d);
      }
    },
  };
}

export const getFilteredCities = (data: Cities, searchFilter: string, countries: Countries) => {
  if (!searchFilter || searchFilter.trim() === '') {
    return data;
  }

  const newDataStartsWith: Cities = [];
  const newDataIncludes: Cities = [];
  const newDataCountryStartsWith: Cities = [];
  const newDataCountryIncludes: Cities = [];

  const includer = searchFilter.trim().toLowerCase();

  data.forEach((city: City) => {
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
