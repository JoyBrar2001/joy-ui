import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export function AvatarWithFallbackText() {
  return (
    <Avatar rounded>
      <AvatarImage src="" />
      <AvatarFallback>JB</AvatarFallback>
    </Avatar>
  );
}
