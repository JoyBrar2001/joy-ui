import { Card, CardContent } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { ComponentCategory } from "../data";

export const separatorData: ComponentCategory = {
  cols: 4,
  title: "Separator",
  subtitle: "A collection of Separators for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-separator"
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
      name: "Separator.tsx",
      path: "@/components/ui/Separator.tsx",
      language: "tsx",
      code: `import { ComponentPropsWithoutRef } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/utils";

export function Separator({
  orientation = "horizontal",
  decorative = true,
  className,
  ...props
}: SeparatorPrimitive.SeparatorProps & ComponentPropsWithoutRef<"div">) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-neutral-800",
        orientation === "horizontal" && "h-[1px] w-full",
        orientation === "vertical" && "w-[1px] h-full",
        className
      )}
      {...props}
    />
  );
}`
    }
  ],
  components: [
    {
      title: "Horizontal Separator",
      component: () => (
        <div className="flex flex-col">
          <p className="px-4">Option 1</p>
          <Separator orientation="horizontal" className="my-1.5" />
          <p className="px-4">Option 2</p>
        </div>
      ),
    },
    {
      title: "Vertical Separator",
      component: () => (
        <div className="flex">
          <p className="py-2">Option 1</p>
          <Separator orientation="vertical" className="mx-3" />
          <p className="py-2">Option 2</p>
        </div>
      ),
    },
    {
      title: "Grid Separator",
      component: () => (
        <section className="flex flex-col items-center text-white px-6">
          <div className="pb-2">
            <h2 className="text-lg font-semibold">JOY UI</h2>
            <p className="text-sm text-neutral-400">Select from a wide range of UI components</p>
          </div>

          <Separator orientation="horizontal" className="w-full bg-neutral-700" />

          <div className="w-full flex justify-center items-center gap-6 py-2">
            <p className="text-sm font-medium hover:text-blue-400 cursor-pointer">Alerts</p>
            <Separator orientation="vertical" className="h-6 w-[1px] bg-neutral-600" />
            <p className="text-sm font-medium hover:text-blue-400 cursor-pointer">Chips</p>
            <Separator orientation="vertical" className="h-6 w-[1px] bg-neutral-600" />
            <p className="text-sm font-medium hover:text-blue-400 cursor-pointer">Inputs</p>
          </div>
        </section>

      ),
    },
    {
      title: "Card with Separator",
      component: () => (
        <Card className="w-full p-4">
          <CardContent>
            <p className="text-sm">This is a card with a separator.</p>
            <Separator orientation="horizontal" className="my-2" />
            <p className="text-sm">Separated content.</p>
          </CardContent>
        </Card>
      ),
    },
    {
      title: "Buttons with Separator",
      component: () => (
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          <Separator orientation="vertical" className="h-5 w-[2px] bg-neutral-600" />
          <button className="px-4 py-2 bg-gray-700 text-white rounded">Cancel</button>
        </div>
      ),
    },
  ],
};