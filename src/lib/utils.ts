import { browser } from '$app/env';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import tz from 'dayjs/plugin/timezone.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import type { Clock } from './types';

dayjs.extend(utc);
dayjs.extend(tz);
dayjs.extend(customParseFormat);

export const getTimeObjectUTC = () => dayjs.utc();

export const getTimeObject = (timeObject: Dayjs, timezone: string) =>
  dayjs.utc(timeObject).tz(timezone);

export const getTime = (timeObject: Dayjs, timezone: string, format = 'hh:mm:ss A D,MMMM') => {
  const time = timezone ? getTimeObject(timeObject, timezone).format(format) : '';

  return time;
};

export const getTimeFromFzid = (fzId: string, format = 'hh:mm:ss A D,MMMM') => {
  if (!fzId) {
    return '';
  }

  const [, , timezone = '', time = ''] = fzId.split('__');

  const frozenObject = dayjs(time, 'HH:mm:ss:DD:MM:YYYY').tz(timezone);

  const isValid = frozenObject.isValid();

  if (!isValid) {
    return '';
  }

  return frozenObject.format(format);
};

export const fetchYou = async (url = '') => {
  try {
    // Default options are marked with *
    const response = await fetch(url);

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

  return `${cityName}__${countryCode}__${timezone}`;
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
