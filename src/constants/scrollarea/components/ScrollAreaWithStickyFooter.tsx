import React from "react";
import { Separator } from "@/components/ui/Separator";
import { ScrollArea } from "@/components/ui/ScrollArea";

export function ScrollAreaWithStickyFooter() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="px-5 py-4 flex flex-col h-[250px]">
        <h3 className="text-sm font-semibold text-neutral-300 bg-neutral-900/80 backdrop-blur-md sticky top-0 py-2">
          Tags
        </h3>

        <div className="flex-1">
          {Array.from({ length: 50 })
            .map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
            .map((tag, i) => (
              <React.Fragment key={i}>
                <div
                  key={tag}
                  className="py-2 text-xs text-neutral-400"
                >
                  {tag}
                </div>
                <Separator className="last:hidden" />
              </React.Fragment>
            ))}
        </div>

        <div className="sticky bottom-0 bg-neutral-900/80 backdrop-blur-md py-2 text-center text-xs text-neutral-400">
          <Separator className="mb-2" />
          End of List
        </div>
      </div>
    </ScrollArea>
  );
}