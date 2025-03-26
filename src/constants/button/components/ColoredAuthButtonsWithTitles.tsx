import { Button } from "@/components/ui/Button";
import { FaGoogle, FaGithub, FaTwitter, FaMicrosoft } from "react-icons/fa";

export function ColoredAuthButtonsWithTitles() {
  return (
    <div className="flex flex-col justify-start gap-2 mx-auto">
      <Button variant="custom" className="bg-rose-500 hover:bg-rose-600 px-12" leftIcon={<FaGoogle className="size-4" />}>
        Login with Google
      </Button>
      <Button variant="custom" className="bg-neutral-500 hover:bg-neutral-600 px-12" leftIcon={<FaGithub className="size-4" />}>
        Login with Github
      </Button>
      <Button variant="custom" className="bg-sky-500 hover:bg-sky-600 px-12" leftIcon={<FaTwitter className="size-4" />}>
        Login with Twitter
      </Button>
      <Button variant="custom" className="bg-amber-500 hover:bg-amber-600 px-12" leftIcon={<FaMicrosoft className="size-4" />}>
        Login with Microsoft
      </Button>
    </div>
  );
}
