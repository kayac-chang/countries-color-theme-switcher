type CountryProps = {
  className?: string,
};
export function Country({ className }: CountryProps) {
  return (
    <div className={className}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg"
        alt=""
      />

      <div className="p-6 space-y-4">
        <h2 className="font-bold text-lg">Germany</h2>

        <ul className="text-sm space-y-1">
          <li>
            <div className="space-x-1">
              <strong className="font-semibold">Population:</strong>
              <span>81,770,900</span>
            </div>
          </li>

          <li>
            <div className="space-x-1">
              <strong className="font-semibold">Region:</strong>
              <span>Europe</span>
            </div>
          </li>

          <li>
            <div className="space-x-1">
              <strong className="font-semibold">Capital:</strong>
              <span>Berlin</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
