import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

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
}
