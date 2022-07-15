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

export type SettingsTheme = 'auto' | 'light' | 'dark';
export type SettingsClockFormat = '12hour' | '24hour';
export type SettingsCountryFormat = 'countryCode' | 'countryName';
export type SettingsFreezeTime = boolean;

export interface Settings {
  theme: SettingsTheme;
  clockFormat: SettingsClockFormat;
  countryFormat: SettingsCountryFormat;
  freezeTime: SettingsFreezeTime;
}

export interface CitiesData {
  cities: Cities;
  countries: Countries;
}
