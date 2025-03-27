import { ScrollArea } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/Separator";
import React from "react";
import { ComponentCategory } from "../data";

export const scrollareaData: ComponentCategory = {
  cols: 6,
  title: "Scroll Area",
  subtitle: "A collection of Scroll Areas for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-scroll-area"
      ]
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs));
}`
        }
      ]
    },
    {
      type: "source",
      name: "ScrollArea.tsx",
      path: "@/components/ui/ScrollArea.tsx",
      language: "tsx",
      code: `import { cn } from "@/utils";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import React from "react";

export function ScrollArea({ children, className, ...props }: ScrollAreaPrimitive.ScrollAreaProps) {
return <ScrollAreaPrimitive.Root
  className={cn(
    "h-[225px] w-[250px] overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 shadow-lg",
    className
  )}
  {...props}
>
  <ScrollAreaPrimitive.Viewport className="size-full rounded-lg">
    {children}
  </ScrollAreaPrimitive.Viewport>

  <ScrollAreaPrimitive.Scrollbar
    className="flex touch-none select-none bg-neutral-800 p-0.5 transition-all duration-150 ease-out hover:bg-neutral-700 data-[orientation=vertical]:w-2"
    orientation="vertical"
  >
    <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-lg bg-neutral-500 hover:bg-neutral-400" />
  </ScrollAreaPrimitive.Scrollbar>

  <ScrollAreaPrimitive.Scrollbar
    className="flex touch-none select-none bg-neutral-800 p-0.5 transition-all duration-150 ease-out hover:bg-neutral-700 data-[orientation=horizontal]:h-2"
    orientation="horizontal"
  >
    <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-lg bg-neutral-500 hover:bg-neutral-400" />
  </ScrollAreaPrimitive.Scrollbar>

  <ScrollAreaPrimitive.Corner className="bg-neutral-700" />
</ScrollAreaPrimitive.Root>
}`
    }
  ],
  components: [
    {
      title: "Simple Scrollareas",
      component: () => (
        <ScrollArea>
          <div className="px-5 py-4">
            <h3 className="text-sm font-semibold text-neutral-300">Tags</h3>
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
      ),
    },
    {
      title: "Scrollarea with sticky header",
      component: () => (
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
      ),
    },
    {
      title: "Scrollarea with sticky footer",
      component: () => (
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
      ),
    },
    {
      title: "Horizontal Scrollarea",
      component: () => (
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
      ),
    },
  ],
};