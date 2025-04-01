"use client";

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
}
