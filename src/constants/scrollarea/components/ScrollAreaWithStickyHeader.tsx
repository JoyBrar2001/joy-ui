import React from "react";
import { Separator } from "@/components/ui/Separator";
import { ScrollArea } from "@/components/ui/ScrollArea";

export function ScrollAreaWithStickyHeader() {
  return (
    <ScrollArea>
      <div className="px-5 py-4">
        <h3 className="text-sm font-semibold text-neutral-300 bg-neutral-900 sticky top-0 py-2">
          Tags
        </h3>

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
    </ScrollArea>
  );
}