import { ButtonLike, Icon } from "@/components";

export function Back() {
  return (
    <ButtonLike>
      <a className="py-2" href="">
        <span className="w-4">
          <Icon.ArrowLeft />
        </span>
        <span className="text-xs">Back</span>
      </a>
    </ButtonLike>
  );
}
