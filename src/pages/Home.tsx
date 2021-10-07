import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Select, Country, Card, VirtualList } from "@/components";
import useStore from "@/data";

const Regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const countries = useStore((state) =>
    state.countries
      .filter((country) => country.name.match(RegExp(`^${search}`, "i")))
      .filter((country) => country.region.match(RegExp(filter, "i")))
  );
  const getAllCountries = useStore((state) => state.getAllCountries);
  useEffect(() => void getAllCountries(), [getAllCountries]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { search, filter } = Object.fromEntries(
        new FormData(event.currentTarget).entries()
      );

      setSearch(String(search));

      if (Regions.includes(String(filter))) setFilter(String(filter));
    },
    [setSearch, setFilter]
  );

  return (
    <form onChangeCapture={onChange} className="space-y-8">
      <Card>
        <Search />
      </Card>

      <div>
        <Select
          placeholder="Filter by Region"
          options={Regions.map((label) => ({ label, value: label }))}
        />

        <VirtualList
          classes={{
            wrapper: "max-h-[70vh] mt-4 p-10",
            list: "flex flex-col",
          }}
          list={countries}
          rowHeight={336}
          visibleCount={2}
          gap={40}
        >
          {(country) => (
            <Link to={`/detail/${country.name}`}>
              <Card>
                <Country {...country} />
              </Card>
            </Link>
          )}
        </VirtualList>
      </div>
    </form>
  );
}

export default Home;
