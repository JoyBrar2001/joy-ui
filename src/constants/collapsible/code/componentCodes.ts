export const animatedCollapsibleCode = `import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";
import { ChevronsUpDown, X } from "lucide-react";

export function AnimatedCollapsible() {
  return (
    <Collapsible className="w-64 items-center justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm leading-6 text-white">
          @peduarte starred 3 repositories
        </span>

        <CollapsibleTrigger asChild>
          <button className="text-white inline-flex items-center justify-center p-1.5 rounded-full transition duration-200 hover:bg-neutral-800 group data-[state=open]:bg-neutral-800">
            <X size={16} className="hidden group-data-[state=open]:block" />
            <ChevronsUpDown size={16} className="block group-data-[state=open]:hidden" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleCard>
        <span className="text-[15px] leading-[25px] text-neutral-800">
          @radix-ui/primitives
        </span>
      </CollapsibleCard>

      <CollapsibleContent>
        <CollapsibleCard>
          <span className="text-[15px] leading-[25px]">
            @radix-ui/colors
          </span>
        </CollapsibleCard>
        <CollapsibleCard>
          <span className="text-[15px] leading-[25px]">
            @radix-ui/themes
          </span>
        </CollapsibleCard>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

export const profileSelectorCode = `"use client";

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
}`;

export const profileSelectorControlledCode = `"use client";

import { useState } from "react";
import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";
import { ChevronsUpDown, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const users = [
  { id: 1, name: "Joy Brar", username: "@joybrar", avatar: "https://avatars.githubusercontent.com/u/194884352?v=4" },
  { id: 2, name: "Alice Smith", username: "@alice", avatar: "https://images.unsplash.com/photo-1564564295391-7f24f26f568b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Bob Johnson", username: "@bobby", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export function ProfileSelectorControlled() {
  const [open, setOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [otherUsers, setOtherUsers] = useState(users.slice(1));

  const handleSelectUser = (user: typeof users[number]) => {
    setOtherUsers([selectedUser, ...otherUsers.filter((u) => u.id !== user.id)]);
    setSelectedUser(user);
    setOpen(false);
  };

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-64 items-center justify-between">
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
}`;

export const selectableCollapsibleCode = `"use client";

import { useState } from "react";
import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";
import { ChevronsUpDown, X } from "lucide-react";

const repos = [
  { id: 1, name: "@radix-ui/primitives" },
  { id: 2, name: "@radix-ui/colors" },
  { id: 3, name: "@radix-ui/themes" },
];

export function SelectableCollapsible() {
  const [open, setOpen] = useState(false);

  const [selectedRepo, setSelectedRepo] = useState(repos[0]);
  const [otherRepos, setOtherRepos] = useState(repos.slice(1));

  const handleSelectRepo = (repo: typeof repos[number]) => {
    setOtherRepos([selectedRepo, ...otherRepos.filter((r) => r.id !== repo.id)]);
    setSelectedRepo(repo);
    setOpen(false);
  };

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-64 items-center justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm leading-6 text-white">
          Pick your repo
        </span>

        <CollapsibleTrigger asChild>
          <button className="text-white inline-flex items-center justify-center p-1.5 rounded-full transition duration-200 hover:bg-neutral-800 group data-[state=open]:bg-neutral-800">
            <X size={16} className="hidden group-data-[state=open]:block" />
            <ChevronsUpDown size={16} className="block group-data-[state=open]:hidden" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleCard variant="outline">
        <div>
          <p className="text-sm font-medium">{selectedRepo.name}</p>
        </div>
      </CollapsibleCard>

      <CollapsibleContent>
        {otherRepos.map((repo) => (
          <CollapsibleCard
            key={repo.id}
            variant="outline"
            className="hover:bg-neutral-600 cursor-pointer"
            onClick={() => handleSelectRepo(repo)}
          >
            <p className="text-sm font-medium">{repo.name}</p>
          </CollapsibleCard>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}`;

export const simpleCollapsibleCode = `import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";
import { ChevronsUpDown, X } from "lucide-react";

export function SimpleCollapsible() {
  return (
    <Collapsible className="w-64 items-center justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm leading-6 text-white">
          @peduarte starred 3 repositories
        </span>

        <CollapsibleTrigger asChild>
          <button className="text-white inline-flex items-center justify-center p-1.5 rounded-full transition duration-200 hover:bg-neutral-800 group data-[state=open]:bg-neutral-800">
            <X size={16} className="hidden group-data-[state=open]:block" />
            <ChevronsUpDown size={16} className="block group-data-[state=open]:hidden" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleCard>
        <span className="text-[15px] leading-[25px] text-neutral-800">
          @radix-ui/primitives
        </span>
      </CollapsibleCard>

      <CollapsibleContent animate={false}>
        <CollapsibleCard>
          <span className="text-[15px] leading-[25px]">
            @radix-ui/colors
          </span>
        </CollapsibleCard>
        <CollapsibleCard>
          <span className="text-[15px] leading-[25px]">
            @radix-ui/themes
          </span>
        </CollapsibleCard>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

export const simpleCollapsibleOutlinedCode = `import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";
import { ChevronsUpDown, X } from "lucide-react";

export function SimpleCollapsibleOutlined() {
  return (
    <Collapsible className="w-64 items-center justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm leading-6 text-white">
          @peduarte starred 3 repositories
        </span>

        <CollapsibleTrigger asChild>
          <button className="text-white inline-flex items-center justify-center p-1.5 rounded-full transition duration-200 hover:bg-neutral-800 group data-[state=open]:bg-neutral-800">
            <X size={16} className="hidden group-data-[state=open]:block" />
            <ChevronsUpDown size={16} className="block group-data-[state=open]:hidden" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleCard variant="outline">
        <span className="text-[15px] leading-[25px]">
          @radix-ui/primitives
        </span>
      </CollapsibleCard>

      <CollapsibleContent>
        <CollapsibleCard variant="outline">
          <span className="text-[15px] leading-[25px]">
            @radix-ui/colors
          </span>
        </CollapsibleCard>
        <CollapsibleCard variant="outline">
          <span className="text-[15px] leading-[25px]">
            @radix-ui/themes
          </span>
        </CollapsibleCard>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

export const simpleCollapsibleSecondaryCode = `import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";
import { ChevronsUpDown, X } from "lucide-react";

export function SimpleCollapsibleSecondary() {
  return (
    <Collapsible className="w-64 items-center justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm leading-6 text-white">
          @peduarte starred 3 repositories
        </span>

        <CollapsibleTrigger asChild>
          <button className="text-white inline-flex items-center justify-center p-1.5 rounded-full transition duration-200 hover:bg-neutral-800 group data-[state=open]:bg-neutral-800">
            <X size={16} className="hidden group-data-[state=open]:block" />
            <ChevronsUpDown size={16} className="block group-data-[state=open]:hidden" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleCard variant="secondary">
        <span className="text-[15px] leading-[25px]">
          @radix-ui/primitives
        </span>
      </CollapsibleCard>

      <CollapsibleContent>
        <CollapsibleCard variant="secondary">
          <span className="text-[15px] leading-[25px]">
            @radix-ui/colors
          </span>
        </CollapsibleCard>
        <CollapsibleCard variant="secondary">
          <span className="text-[15px] leading-[25px]">
            @radix-ui/themes
          </span>
        </CollapsibleCard>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

export const statusSelectorCode = `"use client";

import { useState } from "react";
import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";
import { ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/utils";

const options = [
  { id: 1, status: "Online", bg: "bg-green-500" },
  { id: 2, status: "Away", bg: "bg-amber-500" },
  { id: 3, status: "Be Right Back", bg: "bg-sky-500" },
  { id: 4, status: "Busy", bg: "bg-red-500" },
  { id: 5, status: "Offline", bg: "bg-neutral-500" },
  { id: 6, status: "On Leave", bg: "bg-purple-500" },
];

export function StatusSelector() {
  const [open, setOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [otherOptions, setOtherOptions] = useState(options.slice(1));

  const handleSelectOption = (option: typeof options[number]) => {
    setOtherOptions([selectedOption, ...otherOptions.filter((op) => op.id !== option.id)]);
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-64 items-center justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm leading-6 text-white">
          Pick your repo
        </span>

        <CollapsibleTrigger asChild>
          <button className="text-white inline-flex items-center justify-center p-1.5 rounded-full transition duration-200 hover:bg-neutral-800 group data-[state=open]:bg-neutral-800">
            <X size={16} className="hidden group-data-[state=open]:block" />
            <ChevronsUpDown size={16} className="block group-data-[state=open]:hidden" />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleCard variant="outline" onClick={() => setOpen(true)} className="cursor-pointer hover:bg-neutral-800">
        <div className="flex justify-start items-center gap-2">
          <div className={cn("size-2 rounded-full", selectedOption.bg)} />
          <p className="text-sm font-medium">{selectedOption.status}</p>
        </div>
      </CollapsibleCard>

      <CollapsibleContent>
        {otherOptions.map((option) => (
          <CollapsibleCard
            key={option.id}
            variant="outline"
            className="flex justify-start items-center gap-2 hover:bg-neutral-600 cursor-pointer"
            onClick={() => handleSelectOption(option)}
          >
            <div className={cn("size-2 rounded-full", option.bg)} />
            <p className="text-sm font-medium">{option.status}</p>
          </CollapsibleCard>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}`;