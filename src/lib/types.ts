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
