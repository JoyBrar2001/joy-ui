"use client";

import { useState } from "react";
import { Settings2 } from "lucide-react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";

export function CheckboxDropdownMenu() {
  const [showStatus, setShowStatus] = useState(true);
  const [showDate, setShowDate] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
          <Settings2 className="size-4" />View options
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>Status</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showDate} onCheckedChange={setShowDate}>Created date</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
