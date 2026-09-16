"use client";
import { useState } from "react";
import {
  Check,
  Copy,
  File,
  Folder,
  MoreHorizontal,
  Scissors,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/ContextMenu";
export function BasicContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-28 w-full items-center justify-center rounded-lg border border-dashed border-neutral-300 text-sm text-neutral-500 dark:border-neutral-700">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
export function CheckboxContextMenu() {
  const [checked, setChecked] = useState(true);
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-28 w-full items-center justify-center rounded-lg border border-dashed border-neutral-300 text-sm text-neutral-500 dark:border-neutral-700">
        Right click to change view
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
          Show sidebar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={!checked}
          onCheckedChange={() => setChecked(false)}
        >
          Compact mode
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
export function NestedContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-28 w-full items-center justify-center rounded-lg border border-dashed border-neutral-300 text-sm text-neutral-500 dark:border-neutral-700">
        Right click for nested actions
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share with</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Design team</ContextMenuItem>
            <ContextMenuItem>Engineering</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Archive</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
export function FileContextMenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-28 w-full items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-5 text-left dark:border-neutral-800 dark:bg-neutral-950">
        <File className="size-6 text-neutral-500" />
        <span>
          <span className="block font-medium">design-system.fig</span>
          <span className="text-xs text-neutral-500">Right click file</span>
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Folder className="size-4" />
          Open
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy className="size-4" />
          Duplicate
        </ContextMenuItem>
        <ContextMenuItem>
          <MoreHorizontal className="size-4" />
          More details
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
export function SelectionContextMenu() {
  const [message, setMessage] = useState("No action selected");
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-28 w-full items-center justify-center rounded-lg bg-neutral-100 text-sm dark:bg-neutral-900">
        {message}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={() => setMessage("Copied")}>
          <Copy className="size-4" />
          Copy
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => setMessage("Cut")}>
          <Scissors className="size-4" />
          Cut
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => setMessage("Selected")}>
          <Check className="size-4" />
          Select
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
