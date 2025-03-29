export const horizontalScrollAreaCode = `import { ScrollArea } from "@/components/ui/ScrollArea";

export function HorizontalScrollArea() {
  return (
    <ScrollArea>
      <h3 className="text-sm font-semibold text-neutral-300 bg-neutral-900/80 backdrop-blur-md sticky top-0 left-0 py-2 px-5">
        Scrollable Tags
      </h3>

      <div className="whitespace-nowrap px-5 py-3">
        <div className="flex gap-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-center items-center min-h-[120px] min-w-[120px] rounded-lg bg-neutral-800 px-4 py-2 text-center text-xs text-neutral-300 border border-neutral-700"
            >
              Tag {i + 1}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}`;

export const scrollAreaWithStickyFooterCode = `import React from "react";
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
            .map((_, i, a) => \v1.2.0-beta.\${a.length - i}\`)
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
}`;

export const scrollAreaWithStickyHeaderCode = `import React from "react";
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
          .map((_, i, a) => \`v1.2.0-beta.\${a.length - i}\`)
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
}`;

export const simpleScrollAreaCode = `import React from "react";
import { Separator } from "@/components/ui/Separator";
import { ScrollArea } from "@/components/ui/ScrollArea";

export function SimpleScrollArea() {
  return (
    <ScrollArea>
      <div className="px-5 py-4">
        <h3 className="text-sm font-semibold text-neutral-300">Tags</h3>
        {Array.from({ length: 50 })
          .map((_, i, a) => \v1.2.0-beta.\${a.length - i}\)
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
}`;