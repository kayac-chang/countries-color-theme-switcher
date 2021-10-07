import API from "@/api";
import { Country } from "@/model";
import { combine } from "zustand/middleware";

export default combine({ countries: [] as Country[] }, (set) => ({
  getAllCountries: () => {
    API.Country.get().then((countries) => set({ countries }));
  },

  getCountryByName: (name: string) => {
    API.Country.get(name).then((countries) => set({ countries }));
  },
}));
