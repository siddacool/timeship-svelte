import { browser } from '$app/env';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import tz from 'dayjs/plugin/timezone.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import { SettingsThemes, type Clock, type SettingsTheme } from './types';

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

export const setTheme = (theme: SettingsTheme) => {
  if (browser) {
    const light = '#dbecf5';
    const dark = '#09253d';
    const bodyItem = document.querySelector('body');
    const themeColor = document.querySelector('meta[name="theme-color"]');

    switch (theme) {
      case SettingsThemes.auto:
        // eslint-disable-next-line no-case-declarations
        const prefersDark =
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (prefersDark) {
          bodyItem?.setAttribute('data-theme', 'dark');
          themeColor?.setAttribute('content', dark);
        } else {
          bodyItem?.setAttribute('data-theme', 'light');
          themeColor?.setAttribute('content', light);
        }

        break;
      case SettingsThemes.dark:
        bodyItem?.setAttribute('data-theme', 'dark');
        themeColor?.setAttribute('content', dark);
        break;
      default:
        bodyItem?.setAttribute('data-theme', 'light');
        themeColor?.setAttribute('content', light);
    }
  }
};

export const generateNumberArray = (total = 1) => {
  const toRetun = [];

  for (let index = 1; index <= total; index++) {
    toRetun.push(index);
  }

  return toRetun;
};

export const getRandomNumber = (total = 11) =>
  generateNumberArray(total).reduce((a, c, i, o) => {
    return o[Math.floor(Math.random() * Math.floor(o.length))];
  });
