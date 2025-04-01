import { Collapsible, CollapsibleCard, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";
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
}