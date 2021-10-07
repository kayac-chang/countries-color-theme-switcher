import { useEffect, useState } from "react";
import { Back, List, Flag, Tag } from "@/components";
import { Country } from "@/model";
import API from "@/api";
import { Format, head } from "@/utils";
import { join } from "ramda";

const format = join(", ");

export function Detail() {
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    API.Country.get("Belgium").then(head).then(setCountry);
  }, []);

  return (
    <div className="p-4">
      <div className="w-24">
        <Back />
      </div>

      {country && (
        <div className="text-sm">
          <Flag src={country.flag} name={country.name} />

          <h2 className="text-2xl font-bold mb-4">{country.name}</h2>

          <div className="flex flex-col gap-8">
            <List
              item={{
                "Native Name": format(country.nativeName),
                Population: Format.number(country.population),
                Region: country.region,
                "Sub Region": country.subRegion,
                Capital: format(country.capital),
              }}
            />

            <List
              item={{
                "Top Level Domain": format(country.topLevelDomain),
                Currencies: format(country.currencies),
                Languages: format(country.languages),
              }}
            />

            <div className="flex flex-col gap-2 ">
              <h3>Border Countries: </h3>

              <ul className="grid grid-cols-3 gap-2 font-light text-xs">
                {["France", "Germany", "Netherlands"].map((name) => (
                  <li key={name}>
                    <Tag>{name}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
