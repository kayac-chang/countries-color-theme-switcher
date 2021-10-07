import { Link } from "react-router-dom";
import { ButtonLike, Icon } from "@/components";

export function Back() {
  return (
    <ButtonLike>
      <Link className="py-2" to="/">
        <span className="w-4">
          <Icon.ArrowLeft />
        </span>
        <span className="text-xs">Back</span>
      </Link>
    </ButtonLike>
  );
}
