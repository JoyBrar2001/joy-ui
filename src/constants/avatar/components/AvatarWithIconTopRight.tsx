import { Avatar, AvatarFallback, AvatarIcon, AvatarImage } from "@/components/ui/Avatar";

export function AvatarWithIconTopRight() {
  return (
    <Avatar rounded>
      <AvatarIcon position="top-right">
        <div className="size-2 rounded-full bg-green-500 outline-2 outline-neutral-950" />
      </AvatarIcon>
      <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />
      <AvatarFallback>JB</AvatarFallback>
    </Avatar>
  );
}
