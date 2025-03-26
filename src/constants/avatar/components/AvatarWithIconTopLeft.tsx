import { Avatar, AvatarFallback, AvatarIcon, AvatarImage } from "@/components/ui/Avatar";

export function AvatarWithIconTopLeft() {
  return (
    <Avatar rounded>
      <AvatarIcon position="top-left">
        <div className="flex text-xs justify-center items-center size-4 rounded-full bg-neutral-800">
          5
        </div>
      </AvatarIcon>
      <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />
      <AvatarFallback>JB</AvatarFallback>
    </Avatar>
  );
}
