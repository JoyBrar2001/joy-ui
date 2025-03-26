import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { User } from "lucide-react";

export function AvatarWithFallbackIcon() {
  return (
    <Avatar rounded>
      <AvatarImage src="" />
      <AvatarFallback>
        <User size={20} />
      </AvatarFallback>
    </Avatar>
  );
}
