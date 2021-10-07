import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Select, Country, Card } from "@/components";
import useStore from "@/data";

export function Home() {
  const countries = useStore((state) => state.countries);
  const getAllCountries = useStore((state) => state.getAllCountries);
  useEffect(() => void getAllCountries(), [getAllCountries]);

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
              <Link to={`/detail/${country.name}`}>
                <Card>
                  <Country {...country} />
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
