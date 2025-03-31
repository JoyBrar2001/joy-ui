"use client"

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
              <React.Fragment key={`${index}-${group}`}>
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
}
