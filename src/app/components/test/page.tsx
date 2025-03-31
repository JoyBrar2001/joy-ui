"use client";

import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectTrigger, SelectValue, SelectViewport } from "./Select";
import { Separator } from "@/components/ui/Separator";

export default function Example() {
  return (
    <div className="max-w-[100rem] mx-auto h-full flex pt-24 bg-neutral-100 dark:bg-black">
      <section className="flex-1 p-6 min-h-screen h-full">
        <h2 className="mb-4 text-xl font-semibold text-white">Select a Food Item</h2>

        <Select defaultValue="light">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Theme" />
          </SelectTrigger>

          <SelectContent className="w-[200px] mt-2">
            <SelectScrollUpButton />

            <SelectViewport>
              <SelectGroup>
                <SelectLabel>Themes</SelectLabel>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectGroup>

              <Separator className="my-2" />

              <SelectGroup>
                <SelectLabel>Colors</SelectLabel>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="green">Green</SelectItem>
              </SelectGroup>

            </SelectViewport>
            <SelectScrollDownButton />
          </SelectContent>
        </Select>
      </section>
    </div>
  );
}
