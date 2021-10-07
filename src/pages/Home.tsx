import { useEffect, useState } from "react";
import { Search, Select, Country, Card } from "@/components";
import API from "@/api";
import { Country as TCountry } from "@/model";

export function Home() {
  const [countries, setCountries] = useState<TCountry[]>([]);

  useEffect(() => {
    API.Country.get().then(setCountries);
  }, [setCountries]);

  return (
    <>
      <Card>
        <Search />
      </Card>

      <div>
        <Select
          placeholder="Filter by Region"
          options={[
            { label: "Africa", value: "Africa" },
            { label: "America", value: "America" },
            { label: "Asia", value: "Asia" },
            { label: "Europe", value: "Europe" },
            { label: "Oceania", value: "Oceania" },
          ]}
        />

        <ul className="p-10 flex flex-col gap-10">
          {countries.map((country) => (
            <li key={country.name}>
              <Card>
                <Country {...country} />
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
