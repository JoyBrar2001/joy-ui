import { Button } from "@/components/ui/Button";
import { FaGoogle, FaGithub, FaTwitter, FaMicrosoft } from "react-icons/fa";

export function AuthButtonsWithTitles() {
  return (
    <div className="flex flex-col justify-start gap-2 mx-auto">
      <Button className="px-12" variant="outline" leftIcon={<FaGoogle className="size-4" />}>
        Login with Google
      </Button>
      <Button className="px-12" variant="outline" leftIcon={<FaGithub className="size-4" />}>
        Login with Github
      </Button>
      <Button className="px-12" variant="outline" leftIcon={<FaTwitter className="size-4" />}>
        Login with Twitter
      </Button>
      <Button className="px-12" variant="outline" leftIcon={<FaMicrosoft className="size-4" />}>
        Login with Microsoft
      </Button>
    </div>
  );
}
