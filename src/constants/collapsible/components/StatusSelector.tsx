"use client";

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
}
