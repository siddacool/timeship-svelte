import { browser } from '$app/env';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import tz from 'dayjs/plugin/timezone.js';
import type { Clock } from './types';

dayjs.extend(utc);
dayjs.extend(tz);

export const getTimeObjectUTC = () => dayjs.utc();

export const getTimeObject = (timeObject: Dayjs, timezone: string) =>
  dayjs.utc(timeObject).tz(timezone);

export const getTime = (timeObject: Dayjs, timezone: string, format = 'hh:mm:ss A D,MMMM') => {
  const time = timezone ? getTimeObject(timeObject, timezone).format(format) : '';

  return time;
};

export const fetchYou = async (url = '') => {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });

    const res = await response.json();

    if (response.ok) {
      return Promise.resolve(res);
    } else {
      throw new Error(res.message);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

export const generateClockId = (clock: Clock) => {
  let { cityName = '', countryCode = '', timezone = '' } = clock || {};

  cityName = cityName.trim();
  countryCode = countryCode.trim();
  timezone = timezone.trim();

  return `${cityName}__$${countryCode}__${timezone}`;
};

export const getStoredValue = (name: string, substitute: unknown) => {
  if (!browser) {
    return substitute;
  }

  return localStorage.getItem(`timeship__${name}`)
    ? JSON.parse(`${localStorage.getItem(`timeship__${name}`)}`)
    : substitute;
};

export const setStoredValue = (name: string, value: unknown) => {
  if (!browser) {
    return;
  }

  localStorage.setItem(`timeship__${name}`, JSON.stringify(value));
  return;
};
