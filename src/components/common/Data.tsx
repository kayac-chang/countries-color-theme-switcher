type DataProps = {
  title: string | number;
  value: string | number;
};
export function Data({ title, value }: DataProps) {
  return (
    <div className="space-x-1">
      <span>{title}:</span>
      <span className="font-light">{value}</span>
    </div>
  );
}
