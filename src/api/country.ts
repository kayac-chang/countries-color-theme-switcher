import { toJSON, URL } from "./base";
import { Country as TCountry } from "@/model";
import { isObject, has, isString } from "@/utils";
import { map } from "ramda";

const API = (endpoint: string) =>
  URL(`https://restcountries.com/v3.1/${endpoint}`, {
    fields: [
      "name",
      "flags",
      "population",
      "capital",
      "region",
      "tld",
      "subregion",
      "languages",
      "currencies",
    ],
  });

function getNativeName(data: any): string[] {
  const result: string[] = [];

  for (const item of Object.values(data)) {
    if (
      isObject(item) &&
      has("official", item) &&
      isString(item.official)
      //
    ) {
      result.push(item.official);
    }
  }

  return result;
}

function getCurrencies(data: any): string[] {
  const result: string[] = [];

  for (const item of Object.values(data)) {
    if (
      isObject(item) &&
      has("name", item) &&
      isString(item.name)
      //
    ) {
      result.push(item.name);
    }
  }

  return result;
}

function get(name?: string): Promise<TCountry[]> {
  const url = name ? `name/${name}` : "all";

  return fetch(API(url))
    .then(toJSON)
    .then(
      map<any, TCountry>((item) => ({
        name: item.name.common,
        nativeName: getNativeName(item.name.nativeName),
        flag: item.flags.png,
        population: item.population,
        capital: item.capital,
        region: item.region,
        subRegion: item.subregion,
        topLevelDomain: item.tld,
        currencies: getCurrencies(item.currencies),
        languages: Object.values(item.languages),
        borderCountries: [],
      }))
    );
}

export const Country = {
  get,
};
