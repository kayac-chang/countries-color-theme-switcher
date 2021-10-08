export interface Country {
  name: string;
  nativeName: string[];

  flag: string;
  population: number;

  region: string;
  subRegion: string;

  capital: string[];

  topLevelDomain: string[];
  currencies: string[];

  languages: string[];
}
