export const selectDisabledCode = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectDisabled() {
  return (
    <Select disabled>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2" animate={false}>
        <SelectViewport className="py-0">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectStatusCode = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectStatus() {
  return (
    <Select defaultValue="online">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="online">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500" /> Online
            </span>
          </SelectItem>
          <SelectItem value="away">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-amber-500" /> Away
            </span>
          </SelectItem>
          <SelectItem value="brb">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-yellow-500" /> Be Right Back
            </span>
          </SelectItem>
          <SelectItem value="dnd">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-red-500" /> Do not disturb
            </span>
          </SelectItem>
          <SelectItem value="offline">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-neutral-500" /> Offline
            </span>
          </SelectItem>
          <SelectItem value="leave">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-purple-500" /> On Leave
            </span>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectWithAvatarCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectWithAvatar() {
  return (
    <Select defaultValue="joy">
      <SelectTrigger className="w-[200px] h-12">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="joy" className="h-10 not-first:mt-2">
            <div className="flex items-center gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className="size-8"
                  src="https://avatars.githubusercontent.com/u/194884352?v=4"
                  alt="@radix_ui"
                />
                <AvatarFallback className="size-8">JB</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-left">
                <h2 className="text-sm font-semibold">Joy Brar</h2>
                <p className="-mt-1 text-xs text-neutral-400">@joybrar2001</p>
              </div>
            </div>
          </SelectItem>
          <SelectItem value="john" className="h-10 not-first:mt-2">
            <div className="flex items-center gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className="size-8"
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="@radix_ui"
                />
                <AvatarFallback className="size-8">JD</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-left">
                <h2 className="text-sm font-semibold">John Doe</h2>
                <p className="-mt-1 text-xs text-neutral-400">@johndoe1234</p>
              </div>
            </div>
          </SelectItem>
          <SelectItem value="sofie" className="h-10 not-first:mt-2">
            <div className="flex items-center gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className="size-8"
                  src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="@radix_ui"
                />
                <AvatarFallback className="size-8">SS</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-left">
                <h2 className="text-sm font-semibold">Sofie S.</h2>
                <p className="-mt-1 text-xs text-neutral-400">@sofiesss</p>
              </div>
            </div>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectWithCustomIconCode = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";
import { Minus, Plus } from "lucide-react";

export function SelectWithCustomIcon() {
  return (
    <Select defaultValue="light">
      <SelectTrigger
        className="w-[200px]"
        icon={<div className="relative size-6">
          <Plus size={20} className="absolute top-1/2 left-1/2 -translate-1/2 transition-transform duration-150 group-data-[state=open]:scale-0 group-data-[state=closed]:scale-100" />
          <Minus size={20} className="absolute top-1/2 left-1/2 -translate-1/2 transition-transform duration-150 group-data-[state=closed]:scale-0 group-data-[state=open]:scale-100" />
        </div>}
      >
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectWithDefaultValueCode = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectWithDefaultValue() {
  return (
    <Select defaultValue="light">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectWithDisabledOptionsCode = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectWithDisabledOptions() {
  return (
    <Select defaultValue="light">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark" disabled>Dark</SelectItem>
          <SelectItem value="custom">Custom</SelectItem>
          <SelectItem value="system" disabled>System</SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectWithGroupsCode = `import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectWithGroups() {
  return (
    <Select defaultValue="red">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>
          
          <SelectGroup className="mt-2">
            <SelectLabel>Color</SelectLabel>
            <SelectItem value="neutral">Neutral</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="cyan">Cyan</SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectWithIconsCode = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";
import { Cpu, Moon, Sun } from "lucide-react";

export function SelectWithIcons() {
  return (
    <Select defaultValue="light">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="light">
            <span className="flex items-center gap-2">
              <Sun size={16} /> Light
            </span>
          </SelectItem>
          <SelectItem value="dark">
            <span className="flex items-center gap-2">
              <Moon size={16} /> Dark
            </span>
          </SelectItem>
          <SelectItem value="system">
            <span className="flex items-center gap-2">
              <Cpu size={16} /> System
            </span>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectWithScrollCode = `import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";
import { Separator } from "@/components/ui/Separator";

export function SelectWithScroll() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] h-[300px] py-2 overflow-y-auto">
        <SelectViewport className="py-0">
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>

          <Separator className="my-2" />

          <SelectGroup>
            <SelectLabel>Color</SelectLabel>
            <SelectItem value="neutral">Neutral</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
            <SelectItem value="cyan">Cyan</SelectItem>
            <SelectItem value="purple">Purple</SelectItem>
          </SelectGroup>

          <Separator className="my-2" />

          <SelectGroup>
            <SelectLabel>Mode</SelectLabel>
            <SelectItem value="compact">Compact</SelectItem>
            <SelectItem value="spacious">Spacious</SelectItem>
            <SelectItem value="minimal">Minimal</SelectItem>
            <SelectItem value="detailed">Detailed</SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectWithScrollIconsCode = `import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";
import { Separator } from "@/components/ui/Separator";

export function SelectWithScrollIcons() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] h-[300px] py-2 overflow-y-auto">
        <SelectScrollUpButton />

        <SelectViewport className="py-0">
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>

          <Separator className="my-2" />

          <SelectGroup>
            <SelectLabel>Color</SelectLabel>
            <SelectItem value="neutral">Neutral</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
            <SelectItem value="cyan">Cyan</SelectItem>
            <SelectItem value="purple">Purple</SelectItem>
          </SelectGroup>

          <Separator className="my-2" />

          <SelectGroup>
            <SelectLabel>Mode</SelectLabel>
            <SelectItem value="compact">Compact</SelectItem>
            <SelectItem value="spacious">Spacious</SelectItem>
            <SelectItem value="minimal">Minimal</SelectItem>
            <SelectItem value="detailed">Detailed</SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton />
      </SelectContent>
    </Select>
  );
}`;

export const selectWithSearchCode = `"use client"

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/Separator";

export function SelectWithSearch() {
  const [search, setSearch] = useState("");

  const options = [
    { group: "Theme", items: ["Light", "Dark", "System"] },
    { group: "Color", items: ["Neutral", "Red", "Green", "Cyan"] },
  ];

  const filteredOptions = options.map(({ group, items }) => ({
    group,
    items: items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    ),
  }));

  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme or Color" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <div
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-none"
            leftInlineIcon={<Search size={16} />}
          />
        </div>

        <Separator />

        <SelectViewport className="py-2">
          {filteredOptions.map(({ group, items }, index) => {
            if (items.length <= 0) return null
            return (
              <React.Fragment key={\`\${index}-\${group}\`}>
                <SelectGroup key={group}>
                  <SelectLabel>{group}</SelectLabel>
                  {items.map((item) => (
                    <SelectItem key={item} value={item.toLowerCase()}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
                <Separator className="my-2 last:hidden" />
              </React.Fragment>
            )
          })}
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const selectWithSeparatorCode = `import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";
import { Separator } from "@/components/ui/Separator";

export function SelectWithSeparator() {
  return (
    <Select defaultValue="red">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>
          
          <Separator className="mt-2" />

          <SelectGroup className="mt-2">
            <SelectLabel>Color</SelectLabel>
            <SelectItem value="neutral">Neutral</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="cyan">Cyan</SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const simpleSelectCode = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SimpleSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2" animate={false}>
        <SelectViewport className="py-0">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;

export const simpleSelectAnimatedCode = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SimpleSelectAnimated() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}`;