import clsx from "clsx";
import { Country as TCountry } from "@/model";
import { Format } from "@/utils";
import { Data } from "@/components";

type CountryProps = TCountry & {
  className?: string;
};
export function Country({
  className,
  name,
  flag,
  population,
  region,
  capital,
}: CountryProps) {
  return (
    <div className={clsx(className, "min-h-[21rem]")}>
      <div className="h-40 flex justify-center">
        <img src={flag} alt={`${name}'s flag`} />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="font-bold text-lg">{name}</h2>

        <ul className="text-sm space-y-1">
          {Object.entries({
            Population: Format.number(population),
            Region: region,
            Capital: capital.join(", "),
          }).map(([title, value]) => (
            <li key={title}>
              <Data title={title} value={value} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
