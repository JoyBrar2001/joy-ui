import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { HoverCardWithArrow, ProfileHoverCard, SimpleHoverCard, SimpleHoverCardLeft, SimpleHoverCardRight, SimpleHoverCardTop } from "./components";

export const hoverCardData: ComponentCategory = {
  cols: 4,
  title: "Input",
  subtitle: "A collection of Inputs for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-hover-card"
      ]
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: cnFile
        }
      ]
    },
    {
      type: "source",
      name: "Input.tsx",
      path: "@/components/ui/Input.tsx",
      language: "tsx",
      code: `import React from "react";
import { cn } from "@/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  className?: string;
  description?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Input({
  label,
  error,
  className = "",
  description,
  leftIcon,
  rightIcon,
  ...props
}: Input02Props) {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="w-full flex items-center">
        {leftIcon && (
          <div className="h-full bg-white dark:bg-neutral-900 border border-neutral-600 px-2 flex items-center justify-center rounded-l-lg">
            {leftIcon}
          </div>
        )}
        <input
          className={cn(
            "w-full px-3 py-2 rounded-lg border border-neutral-600 shadow-sm text-sm placeholder:text-sm placeholder:text-zinc-400 focus:outline-none",
            "disabled:bg-neutral-400 dark:disabled:bg-neutral-600 disabled:cursor-not-allowed",
            leftIcon && "rounded-l-none border-l-0",
            rightIcon && "rounded-r-none border-r-0",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="h-full bg-white dark:bg-neutral-900 border border-neutral-600 px-2 flex items-center justify-center rounded-r-lg">
            {rightIcon}
          </div>
        )}
      </div>
      {description && <p className="text-neutral-500 text-sm">{description}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}`
    }
  ],
  components: [
    {
      title: "Simple Hover Card",
      component: SimpleHoverCard
    },
    {
      title: "Hover Card with Arrow",
      component: HoverCardWithArrow
    },
    {
      title: "Profile Hover Card",
      component: ProfileHoverCard
    },
    {
      title: "Simple Hover Card (Left)",
      component: SimpleHoverCardLeft
    },
    {
      title: "Simple Hover Card (Right)",
      component: SimpleHoverCardRight
    },
    {
      title: "Simple Hover Card (Top)",
      component: SimpleHoverCardTop
    },
  ]
}