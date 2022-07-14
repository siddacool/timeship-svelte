// 'Sao Paulo', 'BR', 'America/Sao_Paulo', 'São Paulo'

export type CityName = string;
export type CountyCode = string;
export type Timezone = string;
export type CityNameNative = string | undefined;

export type CountyName = string;

export type City = [CityName, CountyCode, Timezone, CityNameNative];

export type Cities = City[];

export interface Countries {
  [key: CountyCode]: CountyName;
}

export interface Clock {
  cityName: CityName;
  CityNameNative: CityNameNative;
  countryName: CountyName;
  countryCode: CountyCode;
  timezone: Timezone;
  id: string | undefined; // cityName__countryCode__timezone
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
