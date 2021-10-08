import API from "@/api";
import { Country } from "@/model";
import { combine } from "zustand/middleware";

export default combine({ countries: [] as Country[] }, (set, get) => {
  const update = (countries: Country[]) => set({ countries });

  return {
    getAllCountries: () => API.Country.getAll().then(update),

    getCountryByName: (name: string) => {
      if (get().countries.find((country) => country.name === name)) return;

      API.Country.getByName(name).then(update);
    },

    getCountryBySubRegion: (subRegion: string) => {
      if (get().countries.find((country) => country.subRegion === subRegion))
        return;

      API.Country.getBySubRegion(subRegion).then(update);
    },
  };
});
