import { Input } from "@/components/ui/Input";
import { Lock, Search } from "lucide-react";
import { ComponentCategory } from "../data";

export const inputData: ComponentCategory = {
  cols: 4,
  title: "Input",
  subtitle: "A collection of Inputs for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge"
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
      title: "Simple Input",
      component: (props: any) => <Input {...props} label="Username" placeholder="Enter Username" />,
      code: ""
    },
    {
      title: "Input with Description",
      component: (props: any) => <Input {...props} label="Username" description="Username must contain alphabets, at least one numeric value, and no special symbols." placeholder="Enter Username" />,
      code: ""
    },
    {
      title: "Input with Left Icon",
      component: (props: any) => <Input {...props} label="Search" placeholder="Search for users..." leftIcon={<Search className="size-[18px]" />} />,
      code: ""
    },
    {
      title: "Input with Right Icon",
      component: (props: any) => <Input {...props} label="Password" placeholder="Enter password" type="password" rightIcon={<Lock className="size-[18px]" />} />,
      code: ""
    },
    {
      title: "Input with Both Icons",
      component: (props: any) => <Input {...props} label="Just for Fun" placeholder="I have 2 icons" leftIcon={<Search className="size-[18px]" />} rightIcon={<Lock className="size-[18px]" />} />,
      code: ""
    },
    {
      title: "Disabled Input",
      component: (props: any) => <Input {...props} label="Username" placeholder="Enter Username" defaultValue="JoyBrar2001" description="Username can no longer be changed" disabled={true} />,
      code: ""
    },
    {
      title: "Error Input",
      component: (props: any) => <Input label="Username" placeholder="Enter Username" defaultValue="JoyBrar" error="Invalid Entry - Username must contain one numeric" {...props} />,
      code: ""
    },
  ],
};