import { Card } from "@/components";

type FlagProps = {
  src: string;
  name: string;
};
export function Flag({ src, name }: FlagProps) {
  return (
    <Card>
      <div className="h-56 my-12 flex justify-center">
        <img src={src} alt={`${name}'s flag`} />
      </div>
    </Card>
  );
}
