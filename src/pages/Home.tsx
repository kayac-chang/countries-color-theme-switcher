import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Select, Country, Card, VirtualList } from "@/components";
import useStore from "@/data";
import clsx from "clsx";

const Regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const countries = useStore(
    useCallback(
      (state) =>
        state.countries
          .filter(({ name }) => name.match(RegExp(`^${search}`, "i")))
          .filter(({ region }) => region.match(RegExp(`^${filter}`, "i"))),
      [search, filter]
    )
  );
  const getAllCountries = useStore((state) => state.getAllCountries);
  useEffect(() => void getAllCountries(), []);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const { search, filter } = Object.fromEntries(
        new FormData(event.currentTarget).entries()
      );

      setSearch(String(search));

      setFilter(Regions.includes(String(filter)) ? String(filter) : "");
    },
    [setSearch, setFilter]
  );

  return (
    <form onChangeCapture={onChange}>
      <div className="flex flex-col md:flex-row md:h-14 gap-8 my-8 justify-between">
        <Card>
          <Search className="w-full lg:max-w-[32vw] py-2 " />
        </Card>

        <Select
          classes={{
            wrapper: "w-[12rem] sm:w-[20rem]",
          }}
          options={[
            { label: "Filter by Region", value: "Filter by Region" },
            ...Regions.map((label) => ({ label, value: label })),
          ]}
        />
      </div>

      <div className="hidden sm:block">
        <ul
          className={clsx(
            "-mx-4 px-4",
            "max-h-[68vh] overflow-auto",
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          )}
        >
          {countries.map((country) => (
            <li key={country.name}>
              <Link to={`/detail/${encodeURI(country.name)}`}>
                <Card>
                  <Country {...country} />
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden">
        <VirtualList
          classes={{
            wrapper: "max-h-[68vh] px-10 md:p-0",
            list: "flex flex-col",
          }}
          list={countries}
          rowHeight={336}
          visibleCount={2}
          gap={40}
        >
          {(country) => (
            <Link to={`/detail/${encodeURI(country.name)}`}>
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
