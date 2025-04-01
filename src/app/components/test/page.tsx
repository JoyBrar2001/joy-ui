import React from "react";
import { ChevronsUpDown, ExpandIcon, X } from "lucide-react";
import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "./Collapsible";

export default function Example() {
  return (
    <div className="max-w-[100rem] mx-auto h-full flex pt-24 bg-neutral-100 dark:bg-black">
      <section className="flex-1 p-6 min-h-screen h-full">
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
            <CollapsibleCard variant="secondary">
              <span className="text-[15px] leading-[25px]">
                @radix-ui/colors
              </span>
            </CollapsibleCard>
            <CollapsibleCard variant="outline">
              <span className="text-[15px] leading-[25px]">
                @radix-ui/themes
              </span>
            </CollapsibleCard>
            <CollapsibleCard variant="ghost">
              <span className="text-[15px] leading-[25px]">
                @radix-ui/scroll-area
              </span>
            </CollapsibleCard>
            <CollapsibleCard variant="destructive">
              <span className="text-[15px] leading-[25px]">
                @radix-ui/collapsible
              </span>
            </CollapsibleCard>
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  );
}
