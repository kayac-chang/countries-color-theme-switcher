import { useEffect, useState } from "react";
import { Header, Search, Select, Country, Card } from "./components";
import API from "./api";
import { Country as TCountry } from "./model";

function App() {
  const [countries, setCountries] = useState<TCountry[]>([]);

  useEffect(() => {
    API.Country.get().then(setCountries);
  }, [setCountries]);

  return (
    <main>
      <Header />

      <div className="p-4 flex flex-col gap-10">
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
      </div>
    </main>
  );
}

export default App;
