"use client";

import { useState } from "react";
import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";
import { ChevronsUpDown, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const users = [
  { id: 1, name: "Joy Brar", username: "@joybrar", avatar: "https://avatars.githubusercontent.com/u/194884352?v=4" },
  { id: 2, name: "Alice Smith", username: "@alice", avatar: "https://images.unsplash.com/photo-1564564295391-7f24f26f568b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Bob Johnson", username: "@bobby", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export function ProfileSelector() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [otherUsers, setOtherUsers] = useState(users.slice(1));

  const handleSelectUser = (user: typeof users[number]) => {
    setOtherUsers([selectedUser, ...otherUsers.filter((u) => u.id !== user.id)]);
    setSelectedUser(user);
  };

  return (
    <Collapsible className="w-64 items-center justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm leading-6 text-white">
          Select your profile
        </span>

        <CollapsibleTrigger asChild>
          <button className="text-white inline-flex items-center justify-center p-1.5 rounded-full transition duration-200 hover:bg-neutral-800 group data-[state=open]:bg-neutral-800">
            <X size={16} className="hidden group-data-[state=open]:block" />
            <ChevronsUpDown size={16} className="block group-data-[state=open]:hidden" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleCard variant="outline" className="flex gap-2 items-center py-1">
        <Avatar className="cursor-pointer">
          <AvatarImage
            className="size-10"
            src={selectedUser.avatar}
            alt={selectedUser.username}
          />
          <AvatarFallback className="size-10">
            {selectedUser.name.split(" ").map(word => word[0])}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{selectedUser.name}</p>
          <p className="text-xs text-neutral-500">{selectedUser.username}</p>
        </div>
      </CollapsibleCard>

      <CollapsibleContent>
        {otherUsers.map((user) => (
          <CollapsibleCard
            key={user.id}
            variant="outline" className="flex gap-2 items-center py-1 hover:bg-neutral-800"
            onClick={() => handleSelectUser(user)}
          >
            <Avatar className="cursor-pointer">
              <AvatarImage
                className="size-10"
                src={user.avatar}
                alt={user.username}
              />
              <AvatarFallback className="size-10">
                {user.name.split(" ").map(word => word[0])}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-neutral-500">{user.username}</p>
            </div>
          </CollapsibleCard>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
