import clsx from "clsx";

interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

function format(value: number) {
  return new Intl.NumberFormat().format(value);
}

type CountryProps = Country & {
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
      <img src={flag} alt={`${name}'s flag`} />

      <div className="p-6 space-y-4">
        <h2 className="font-bold text-lg">{name}</h2>

        <ul className="text-sm space-y-1">
          {Object.entries({
            Population: format(population),
            Region: region,
            Capital: capital,
          }).map(([title, value]) => (
            <li key={title}>
              <div className="space-x-1">
                <strong className="font-semibold">{title}:</strong>
                <span className="font-light">{value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
