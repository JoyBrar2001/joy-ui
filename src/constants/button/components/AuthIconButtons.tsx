import { Button } from "@/components/ui/Button";
import { FaGoogle, FaGithub, FaTwitter, FaMicrosoft } from "react-icons/fa";

export function AuthIconButtons() {
  return (
    <div className="w-full flex justify-start gap-2">
      <Button variant="outline" className="w-full">
        <FaGoogle className="size-4" />
      </Button>
      <Button variant="outline" className="w-full">
        <FaGithub className="size-4" />
      </Button>
      <Button variant="outline" className="w-full">
        <FaTwitter className="size-4" />
      </Button>
      <Button variant="outline" className="w-full">
        <FaMicrosoft className="size-4" />
      </Button>
    </div>
  );
}
