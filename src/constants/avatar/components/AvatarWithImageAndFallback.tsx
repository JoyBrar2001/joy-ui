import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export function AvatarWithImageAndFallback() {
  return (
    <Avatar rounded>
      <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />
      <AvatarFallback>JB</AvatarFallback>
    </Avatar>
  );
}