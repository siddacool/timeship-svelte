// 'Sao Paulo', 'BR', 'America/Sao_Paulo', 'São Paulo'

export type CityName = string;
export type CountryCode = string;
export type Timezone = string;
export type CityNameNative = string | undefined;

export type CountryName = string;

export type City = [CityName, CountryCode, Timezone, CityNameNative];

export type Cities = City[];

export interface Countries {
  [key: CountryCode]: CountryName;
}

export interface Clock {
  cityName: CityName;
  cityNameNative: CityNameNative;
  countryName: CountryName;
  countryCode: CountryCode;
  timezone: Timezone;
  id?: string | undefined; // cityName__countryCode__timezone
}

export enum SettingsThemes {
  auto,
  light,
  dark,
}

export enum SettingsClockFormats {
  hour12,
  hour24,
}

export enum SettingsCountryFormats {
  countryName,
  countryCode,
}

export type SettingsTheme = SettingsThemes.auto | SettingsThemes.light | SettingsThemes.dark;
export type SettingsClockFormat = SettingsClockFormats.hour12 | SettingsClockFormats.hour24;
export type SettingsCountryFormat =
  | SettingsCountryFormats.countryName
  | SettingsCountryFormats.countryCode;
export type SettingsFreezeTimeAt = null | string;

export interface Settings {
  theme: SettingsTheme;
  clockFormat: SettingsClockFormat;
  countryFormat: SettingsCountryFormat;
  freezeTimeAt: SettingsFreezeTimeAt;
}

export interface CitiesData {
  cities: Cities;
  countries: Countries;
}
