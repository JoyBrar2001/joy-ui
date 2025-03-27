export const avatarWithFallbackIconCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
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
}`;

export const avatarWithFallbackTextCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export function AvatarWithFallbackText() {
  return (
    <Avatar rounded>
      <AvatarImage src="" />
      <AvatarFallback>JB</AvatarFallback>
    </Avatar>
  );
}`;

export const avatarWithIconBottomRightCode = `import { Avatar, AvatarFallback, AvatarIcon, AvatarImage } from "@/components/ui/Avatar";

export function AvatarWithIconBottomRight() {
  return (
    <Avatar rounded>
      <AvatarIcon position="bottom-right">
        <div className="flex text-xs justify-center items-center size-4 rounded-full bg-neutral-800">
          5
        </div>
      </AvatarIcon>
      <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />
      <AvatarFallback>JB</AvatarFallback>
    </Avatar>
  );
}`;

export const avatarWithIconTopLeftCode = `import { Avatar, AvatarFallback, AvatarIcon, AvatarImage } from "@/components/ui/Avatar";

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
}`;

export const avatarWithIconTopRightCode = `import { Avatar, AvatarFallback, AvatarIcon, AvatarImage } from "@/components/ui/Avatar";

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
}`;

export const avatarWithImageAndFallbackCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export function AvatarWithImageAndFallback() {
  return (
    <Avatar rounded>
      <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />
      <AvatarFallback>JB</AvatarFallback>
    </Avatar>
  );
}`;

export const groupAvatarsCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export function GroupAvatars() {
  return (
    <div className="flex">
      {["https://avatars.githubusercontent.com/u/194884352?v=4", 
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80"]
        .map((src, index) => (
          <Avatar key={index} rounded className="not-first:-ml-3">
            <AvatarImage src={src} />
            <AvatarFallback>JB</AvatarFallback>
          </Avatar>
        ))}
    </div>
  );
}`;
