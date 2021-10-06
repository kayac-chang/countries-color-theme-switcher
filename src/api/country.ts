import { toJSON } from "./base";
import { Country as TCountry } from "../model";

const API = `https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region`;

function format(captial: string | string[]) {
  return Array.isArray(captial) ? captial.join() : captial;
}

export const Country = {
  get: () =>
    fetch(API)
      .then(toJSON)
      .then(
        (res) =>
          res.map((item: any) => ({
            name: item.name.common,
            flag: item.flags.png,
            population: item.population,
            capital: format(item.capital),
            region: item.region,
          })) as TCountry[]
      ),
};
