export const simpleDropdownMenuCode = `import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";

export function SimpleDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="Open menu"><MoreHorizontal /></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>View profile</DropdownMenuItem>
        <DropdownMenuItem>Account settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export const actionsDropdownMenuCode = `import { Copy, Edit, MoreVertical, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";

export function ActionsDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="Open actions"><MoreVertical /></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem><Edit />Edit</DropdownMenuItem>
        <DropdownMenuItem><Copy />Duplicate</DropdownMenuItem>
        <DropdownMenuItem><Trash2 />Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export const checkboxDropdownMenuCode = `"use client";

import { useState } from "react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";

export function CheckboxDropdownMenu() {
  const [showStatus, setShowStatus] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><button>View options</button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>Status</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

export const nestedDropdownMenuCode = `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";

export function NestedDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><button>Share</button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Copy link</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Share with</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Team members</DropdownMenuItem>
            <DropdownMenuItem>Project group</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;
