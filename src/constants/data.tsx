import { CodeBlock } from "@/components/ui/CodeBlock";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxSubLabel, CheckboxDescription } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/Separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

import { BatteryMedium, BellIcon, Check, Cpu, FilmIcon, Lock, MoonIcon, SaveIcon, Search, StarIcon, X } from "lucide-react";
import { FaBalanceScale } from "react-icons/fa";

import RemovableChip from "./RemovableChip";
import React from "react";

import { accordionData } from "./accordion";
import { alertData } from "./alert";
import { avatarData } from "./avatar";
import { buttonData } from "./button";
import { tabsData } from "./tabs";

export type ComponentEntry = {
  title: string;
  component: (props?: any) => React.ReactNode;
};

export type StepType = "dependencies" | "utilities" | "source";

export type LanguageType = "css" | "shell" | "typescript" | "tsx" | "javascript" | "jsx" | "python" | "cpp";

export type DependeciesStep = {
  type: StepType;
  libraries: Array<string>;
}

export type UtilitiesStep = {
  type: StepType;
  files: Array<{
    name: string;
    path: string;
    language: LanguageType;
    code: string;
  }>
};

export type SourceStep = {
  type: StepType;
  name: string;
  path: string;
  language: LanguageType;
  code: string;
};

export type ComponentCategory = {
  cols: 4 | 6 | 12;
  title: string;
  subtitle: string;
  steps: Array<DependeciesStep | UtilitiesStep | SourceStep>;
  components: ComponentEntry[];
};

export type ComponentData = Record<string, ComponentCategory>;

export const data: ComponentData = {
  accordion: accordionData,
  alert: alertData,
  avatar: avatarData,
  button: buttonData,
  checkbox: {
    cols: 4,
    title: "Checkbox",
    subtitle: "A collection of Checkboxes for you to use",
    steps: [
      {
        type: "dependencies",
        libraries: [
          "clsx",
          "tailwind-merge",
          "@radix-ui/react-checkbox"
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
        name: "Checkbox.tsx",
        path: "@/components/ui/Checkbox.tsx",
        language: "tsx",
        code: `import { cn } from "@/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export function CheckboxRoot({ children, className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center gap-2.5", className)} {...props}>
      {children}
    </div>
  );
}

export function Checkbox({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled = false,
  animate = true,
  size = "md",
  className,
  ...props
}: CheckboxPrimitive.CheckboxProps & {
  animate?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  const iconSize = {
    sm: 12,
    md: 16,
    lg: 20,
  };

  return (
    <CheckboxPrimitive.Root
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(
        "shrink-0 flex items-center justify-center appearance-none rounded bg-neutral-950 outline-[1px] outline-neutral-800 transition-all hover:bg-neutral-800 active:bg-neutral-900",
        disabled && "opacity-50 cursor-not-allowed",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.CheckboxIndicator
        className={cn(
          "transition-transform duration-300",
          animate && "data-[state=checked]:animate-scaleUp data-[state=unchecked]:animate-scaleDown"
        )}
      >
        <CheckIcon size={iconSize[size]} />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
}

export function CheckboxLabel({ children, className, htmlFor, ...props }: ComponentPropsWithoutRef<"label">) {
  return (
    <label className={cn("text-sm leading-none text-white flex items-center gap-1", className)} htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}

export function CheckboxSubLabel({ children, className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span className={cn("text-xs text-neutral-400", className)} {...props}>
      {children}
    </span>
  );
}

export function CheckboxDescription({ children, className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p className={cn("text-xs leading-none text-neutral-600", className)} {...props}>
      {children}
    </p>
  );
}`
      }
    ],
    components: [
      {
        title: "Simple Checkbox",
        component: () => <Checkbox size="sm" animate={false} />
      },
      {
        title: "Animate Checkbox",
        component: () => <Checkbox size="sm" animate />
      },
      {
        title: "Default Checked",
        component: () => <Checkbox size="sm" defaultChecked />
      },
      {
        title: "Labeled Checkbox",
        component: () => <CheckboxRoot>
          <Checkbox id="terms0" size="sm" animate />
          <CheckboxLabel htmlFor="terms0">
            Accept Terms and Conditions
          </CheckboxLabel>
        </CheckboxRoot>
      },
      {
        title: "Sub-Labeled Checkbox",
        component: () => <CheckboxRoot>
          <Checkbox id="terms2" size="sm" animate />
          <CheckboxLabel htmlFor="terms2">
            Accept Terms and Conditions
            <CheckboxSubLabel>
              (Required)
            </CheckboxSubLabel>
          </CheckboxLabel>
        </CheckboxRoot>
      },
      {
        title: "Checkbox Description",
        component: () => <CheckboxRoot className="items-start">
          <Checkbox id="terms3" size="sm" animate />
          <div className="flex flex-col gap-1">
            <CheckboxLabel htmlFor="terms3">
              Accept Terms and Conditions
              <CheckboxSubLabel>
                (Required)
              </CheckboxSubLabel>
            </CheckboxLabel>
            <CheckboxDescription>
              Please go through the terms and conditions throughly before accepting them.
            </CheckboxDescription>
          </div>
        </CheckboxRoot>
      },
      {
        title: "Colored Checkbox",
        component: () => <CheckboxRoot className="items-start">
          <Checkbox
            id="terms4"
            size="sm"
            animate
            defaultChecked
            className="data-[state=checked]:bg-green-500 text-neutral-950"
          />
          <CheckboxLabel htmlFor="terms4">
            Accept Terms and Conditions
          </CheckboxLabel>
        </CheckboxRoot>
      },
      {
        title: "Reversed Checkbox",
        component: () => <CheckboxRoot>
          <Checkbox
            id="terms5"
            size="sm"
            animate
            className="peer"
            defaultChecked
          />
          <CheckboxLabel htmlFor="terms5" className="peer-data-[state=checked]:line-through">
            Accept Terms and Conditions
          </CheckboxLabel>
        </CheckboxRoot>
      },
      {
        title: "Strikethrough Checkbox",
        component: () => <CheckboxRoot className="w-full flex flex-row-reverse justify-between pr-2">
          <Checkbox
            id="terms6"
            size="sm"
            animate
            defaultChecked
          />
          <CheckboxLabel htmlFor="terms6" className="peer-data-[state=checked]:line-through">
            Accept Terms and Conditions
          </CheckboxLabel>
        </CheckboxRoot>
      },
      {
        title: "Labeled Checkbox",
        component: () => <div className="flex gap-4">
          <CheckboxRoot>
            <Checkbox id="l1" size="sm" animate />
            <CheckboxLabel htmlFor="l1">
              iPhone
            </CheckboxLabel>
          </CheckboxRoot>
          <CheckboxRoot>
            <Checkbox id="l2" size="sm" animate />
            <CheckboxLabel htmlFor="l2">
              Android
            </CheckboxLabel>
          </CheckboxRoot>
          <CheckboxRoot>
            <Checkbox id="l3" size="sm" animate />
            <CheckboxLabel htmlFor="l3">
              Other
            </CheckboxLabel>
          </CheckboxRoot>
        </div>
      },
      {
        title: "Labeled Checkbox (Col)",
        component: () => <div className="flex flex-col gap-4">
          <CheckboxRoot>
            <Checkbox id="l4" size="sm" animate />
            <CheckboxLabel htmlFor="l4">
              iPhone
            </CheckboxLabel>
          </CheckboxRoot>
          <CheckboxRoot>
            <Checkbox id="l5" size="sm" animate />
            <CheckboxLabel htmlFor="l5">
              Android
            </CheckboxLabel>
          </CheckboxRoot>
          <CheckboxRoot>
            <Checkbox id="termsl6" size="sm" animate />
            <CheckboxLabel htmlFor="termsl6">
              Other
              <CheckboxSubLabel>
                (like Blackberry, Nokia, Windows, etc...)
              </CheckboxSubLabel>
            </CheckboxLabel>
          </CheckboxRoot>
        </div>
      },
      {
        title: "Checkbox Card",
        component: () => <Card className="w-full">
          <CardContent>
            <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
              <Checkbox
                id="card1"
                size="sm"
                animate
                defaultChecked
              />
              <CheckboxLabel htmlFor="card1">
                Label
                <CheckboxSubLabel>
                  (Sublabel)
                </CheckboxSubLabel>
              </CheckboxLabel>
            </CheckboxRoot>
            <CheckboxDescription className="mt-1">
              (This is some description for the checkbox)
            </CheckboxDescription>
          </CardContent>
        </Card >
      },
      {
        title: "Checkbox with Icon",
        component: () => (
          <Card className="w-full">
            <CardContent>
              <CheckboxRoot className="w-full flex flex-row-reverse justify-between items-center">
                <Checkbox id="card2" size="md" animate />
                <div className="flex gap-2">
                  <Button variant="outline" className="p-2">
                    <StarIcon size={16} />
                  </Button>

                  <div className="flex flex-col">
                    <CheckboxLabel htmlFor="card2" className="flex items-center gap-2">
                      Starred Item
                      <CheckboxSubLabel>(Mark as favorite)</CheckboxSubLabel>
                    </CheckboxLabel>
                    <CheckboxDescription className="mt-1">
                      (This item will be added to your starred list)
                    </CheckboxDescription>
                  </div>
                </div>
              </CheckboxRoot>
            </CardContent>
          </Card >
        )
      },
      {
        title: "Checkbox with Footer",
        component: () => (
          <Card className="w-full">
            <CardContent className="flex flex-col gap-2">
              <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
                <Checkbox id="card3" size="sm" animate />
                <CheckboxLabel htmlFor="card3">
                  Enable Notifications
                  <CheckboxSubLabel>(Receive email updates)</CheckboxSubLabel>
                </CheckboxLabel>
              </CheckboxRoot>
              <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
                <Checkbox id="card4" size="sm" animate />
                <CheckboxLabel htmlFor="card4">
                  Newletter
                  <CheckboxSubLabel>(Subscribe to newsletter)</CheckboxSubLabel>
                </CheckboxLabel>
              </CheckboxRoot>
              <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
                <Checkbox id="card5" size="sm" animate />
                <CheckboxLabel htmlFor="card5">
                  Promotional Updates
                </CheckboxLabel>
              </CheckboxRoot>
            </CardContent>
            <CardFooter className="flex justify-end p-4">
              <Button variant="outline">
                Save Settings
              </Button>
            </CardFooter>
          </Card>
        )
      },
      {
        title: "Cards Grid",
        component: () => (
          <div className="grid grid-cols-2 gap-2">
            <Card className="w-full">
              <CardContent className="flex flex-col gap-2">
                <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
                  <Checkbox id="grid1" size="sm" animate />
                  <CheckboxLabel htmlFor="grid1" className="flex items-center gap-2">
                    <FilmIcon size={16} />
                    Enable Editing
                  </CheckboxLabel>
                </CheckboxRoot>
                <CheckboxDescription>
                  (Allow modifications)
                </CheckboxDescription>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardContent className="flex flex-col gap-2">
                <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
                  <Checkbox id="grid2" size="sm" animate />
                  <CheckboxLabel htmlFor="grid2" className="flex items-center gap-2">
                    <MoonIcon size={16} />
                    Dark Mode
                  </CheckboxLabel>
                </CheckboxRoot>
                <CheckboxDescription>
                  (Reduce eye strain)
                </CheckboxDescription>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardContent className="flex flex-col gap-2">
                <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
                  <Checkbox id="grid3" size="sm" animate />
                  <CheckboxLabel htmlFor="grid3" className="flex items-center gap-2">
                    <BellIcon size={16} />
                    Notifications
                  </CheckboxLabel>
                </CheckboxRoot>
                <CheckboxDescription>
                  (Receive alerts)
                </CheckboxDescription>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardContent className="flex flex-col gap-2">
                <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
                  <Checkbox id="grid4" size="sm" animate />
                  <CheckboxLabel htmlFor="grid4" className="flex items-center gap-2">
                    <SaveIcon size={16} />
                    Auto-Save
                  </CheckboxLabel>
                </CheckboxRoot>
                <CheckboxDescription>
                  (Save changes automatically)
                </CheckboxDescription>
              </CardContent>
            </Card>
          </div>

        )
      }
    ]
  },
  chip: {
    cols: 4,
    title: "Chip",
    subtitle: "A collection of Chips for you to use",
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
        name: "Chip.tsx",
        path: "@/components/ui/Chip.tsx",
        language: "tsx",
        code: `import React from "react";
import { cn } from "@/utils";

type ChipProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "custom";
  rounded?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

export default function Chip({
  children,
  variant = "primary",
  rounded = false,
  className,
  ...otherProps
}: ChipProps) {
  return (
    <span
      className={cn(
        "flex items-center w-fit gap-1.5 bg-white text-black text-sm px-2 py-0.5 rounded-md",
        rounded && "rounded-full",
        variant === "primary" &&
        "bg-black text-white hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
        variant === "secondary" &&
        "bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
        variant === "outline" &&
        "border border-neutral-300 bg-transparent text-black hover:bg-neutral-100 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800",
        variant === "ghost" && "text-neutral-500 hover:text-black dark:hover:text-white",
        variant === "destructive" && "bg-red-500 hover:bg-red-600 text-white",
        className
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
}`
      }
    ],
    components: [
      {
        title: "Primary Chip",
        component: () => <Chip>Primary</Chip>
      },
      {
        title: "Secondary Chip",
        component: () => <Chip variant="secondary">Secondary</Chip>
      },
      {
        title: "Outlined Chip",
        component: () => <Chip variant="outline">Outlined</Chip>
      },
      {
        title: "Ghost Chip",
        component: () => <Chip variant="ghost">Ghost</Chip>
      },
      {
        title: "Custom Chip",
        component: () => <Chip variant="custom" className="bg-blue-500 text-white">Custom</Chip>
      },
      {
        title: "Rounded Chip",
        component: () => <Chip rounded>Rounded</Chip>
      },
      {
        title: "Online Chip",
        component: () => <Chip rounded variant="outline">
          <div className="size-2 bg-green-500 rounded-full" />
          Online
        </Chip>
      },
      {
        title: "Done Chip",
        component: () => <Chip variant="outline">
          Task Done
          <Check size={16} />
        </Chip>
      },
      {
        title: "Removable Chip",
        component: () => <RemovableChip />
      },
    ]
  },
  codeblock: {
    cols: 6,
    title: "Code Block",
    subtitle: "A collection of Codeblocks for you to use",
    steps: [
      {
        type: "dependencies",
        libraries: [
          "clsx",
          "tailwind-merge",
          "react-syntax-highlighter"
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
        name: "CodeBlock.tsx",
        path: "@/components/ui/CodeBlock.tsx",
        language: "tsx",
        code: `"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Chip } from "@/components/ui/Chip";
import { cn } from "@/utils";

interface CodeTab {
  name: string;
  code: string;
  path?: string;
  language?: string;
  highlightLines?: number[];
}

interface CodeBlockProps {
  tabs?: CodeTab[];
  wrapLines?: boolean;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  tabs = [],
  wrapLines = true,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCode = tabs[activeTab] || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {activeCode.path && (
        <Chip className="text-xs" variant="secondary">
          {activeCode.path}
        </Chip>
      )}
      <div className="relative bg-neutral-800 dark:bg-neutral-900 border border-neutral-800 text-white rounded-lg overflow-hidden">
        {tabs.length > 1 && (
          <div className="flex px-4 gap-2 border-b border-neutral-800">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={cn(
                  "py-2 px-1.5 text-sm font-medium cursor-pointer",
                  activeTab === index ? "border-b border-b-white text-white" : "text-neutral-300"
                )}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 size-6 bg-neutral-700 dark:bg-neutral-800 hover:bg-neutral-600 dark:hover:bg-neutral-500 border border-neutral-600 text-white rounded"
        >
          <Check size={16} className={cn(
            "size-3 absolute left-1/2 top-1/2 -translate-1/2 scale-0 opacity-0 transition-all duration-300",
            copied && "scale-100 opacity-100"
          )} />
          <Copy size={16} className={cn(
            "size-3 absolute left-1/2 top-1/2 -translate-1/2 scale-100 opacity-100 transition-all duration-300",
            copied && "scale-0 opacity-0"
          )} />
        </button>

        <SyntaxHighlighter
          language={activeCode.language || "javascript"}
          style={atomDark}
          wrapLines={wrapLines}
          showLineNumbers={showLineNumbers}
          lineProps={(lineNumber) =>
            activeCode.highlightLines?.includes(lineNumber)
              ? { style: { backgroundColor: "rgba(255, 255, 0, 0.2)" } }
              : {}
          }
          customStyle={{
            margin: 0,
            padding: "0.5rem 1rem",
            background: "transparent",
            fontSize: "0.875rem",
          }}
        >
          {activeCode.code}
        </SyntaxHighlighter>
      </div>
    </>
  );
}`
      }
    ],
    components: [
      {
        title: "Simple One file CodeBlock",
        component: () => <CodeBlock
          tabs={[
            {
              name: "JavaScript",
              code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));`,
              language: "javascript",
            },
          ]}
          showLineNumbers
          wrapLines
        />
      },
      {
        title: "CodeBlock without Line Numbers",
        component: () => <CodeBlock
          tabs={[
            {
              name: "JavaScript",
              code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));`,
              language: "javascript",
            },
          ]}
          showLineNumbers={false}
          wrapLines
        />
      },
      {
        title: "CodeBlock with line Highlights",
        component: () => <CodeBlock
          tabs={[
            {
              name: "JavaScript",
              code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));`,
              language: "javascript",
              highlightLines: [2, 5],
            },
          ]}
          showLineNumbers
          wrapLines
        />
      },
      {
        title: "CodeBlock with Path",
        component: () => <CodeBlock
          tabs={[
            {
              name: "JavaScript",
              code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));`,
              language: "javascript",
              path: "@/lib/greet.js",
              highlightLines: [1, 3],
            },
          ]}
          showLineNumbers
          wrapLines
        />
      },
      {
        title: "CodeBlock with Path",
        component: () => <CodeBlock
          tabs={[
            {
              name: "JavaScript",
              code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));`,
              path: "/src/utils/greet.js",
              language: "javascript",
              highlightLines: [2, 5],
            },
            {
              name: "TypeScript",
              code: `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("Joy"));`,
              path: "/src/utils/greet.ts",
              language: "typescript",
            },
            {
              name: "Python",
              code: `def greet(name):
    return f"Hello, {name}!"

print(greet("Joy"))`,
              path: "/src/utils/greet.py",
              language: "python",
            },
            {
              name: "C++",
              code: `#include <iostream>
#include <string>

std::string greet(std::string name) {
    return "Hello, " + name + "!";
}

int main() {
    std::cout << greet("Joy") << std::endl;
    return 0;
}`,
              path: "/src/utils/greet.cpp",
              language: "cpp",
              highlightLines: [5, 9]
            }
          ]}
          showLineNumbers
          wrapLines
        />
      },
    ]
  },
  input: {
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
        component: (props: any) => <Input {...props} label="Username" placeholder="Enter Username" />
      },
      {
        title: "Input with Description",
        component: (props: any) => <Input {...props} label="Username" description="Username must contain alphabets, at least one numeric value, and no special symbols." placeholder="Enter Username" />
      },
      {
        title: "Input with Left Icon",
        component: (props: any) => <Input {...props} label="Search" placeholder="Search for users..." leftIcon={<Search className="size-[18px]" />} />
      },
      {
        title: "Input with Right Icon",
        component: (props: any) => <Input {...props} label="Password" placeholder="Enter password" type="password" rightIcon={<Lock className="size-[18px]" />} />
      },
      {
        title: "Input with Both Icons",
        component: (props: any) => <Input {...props} label="Just for Fun" placeholder="I have 2 icons" leftIcon={<Search className="size-[18px]" />} rightIcon={<Lock className="size-[18px]" />} />
      },
      {
        title: "Disabled Input",
        component: (props: any) => <Input {...props} label="Username" placeholder="Enter Username" defaultValue="JoyBrar2001" description="Username can no longer be changed" disabled={true} />
      },
      {
        title: "Error Input",
        component: (props: any) => <Input label="Username" placeholder="Enter Username" defaultValue="JoyBrar" error="Invalid Entry - Username must contain one numeric" {...props} />
      },
    ],
  },
  radioGroup: {
    cols: 4,
    title: "Radio Group",
    subtitle: "A collection of Radio Groups for you to use",
    steps: [
      {
        type: "dependencies",
        libraries: [
          "clsx",
          "tailwind-merge",
          "@radix-ui/react-radio-group"
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
        name: "RadioGroup.tsx",
        path: "@/components/ui/RadioGroup.tsx",
        language: "tsx",
        code: `import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/utils";

export function RadioGroup({
  children,
  className,
  ...props
}: RadioGroupPrimitive.RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "flex gap-2",
        className
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}

export function RadioGroupItem({
  className,
  size = "sm",
  icon: Icon = Circle,
  ...props
}: RadioGroupPrimitive.RadioGroupItemProps & {
  size?: "sm" | "md" | "lg";
  icon?: React.ElementType;
}) {
  const itemSize = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  };

  const iconSize = {
    sm: "size-2.5",
    md: "size-3",
    lg: "size-4",
  }

  return (
    <RadioGroupPrimitive.Item
      className={cn(
        "cursor-pointer rounded-full border border-neutral-400 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shadow-sm transition-all duration-200 hover:border-white focus:ring-2 focus:ring-white",
        itemSize[size],
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Icon className={cn("fill-current text-white", iconSize[size])} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}`
      }
    ],
    components: [
      {
        title: "Simple Radio Group",
        component: () => (
          <form>
            <RadioGroup defaultValue="checked">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unchecked" id="r1" />
                <Label htmlFor="r1">Unchecked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="checked" id="r2" />
                <Label htmlFor="r2">Checked</Label>
              </div>
            </RadioGroup>
          </form>
        ),
      },
      {
        title: "Vertical Radio Group",
        component: () => (
          <form>
            <RadioGroup defaultValue="checked" className="flex flex-col">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unchecked" id="rv1" />
                <Label htmlFor="rv1">Unchecked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="checked" id="rv2" />
                <Label htmlFor="rv2">Checked</Label>
              </div>
            </RadioGroup>
          </form>
        ),
      },
      {
        title: "Vertical Radio Group",
        component: () => (
          <form>
            <RadioGroup defaultValue="checked">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="rs1" size="sm" />
                <Label htmlFor="rs1">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="rs2" size="md" />
                <Label htmlFor="rs2">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="rs3" size="lg" />
                <Label htmlFor="rs3">Large</Label>
              </div>
            </RadioGroup>
          </form>
        ),
      },
      {
        title: "Animted Radio Group",
        component: () => (
          <form>
            <RadioGroup defaultValue="checked">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unchecked" id="r3" animate />
                <Label htmlFor="r3">Unchecked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="checked" id="r4" animate />
                <Label htmlFor="r4">Checked</Label>
              </div>
            </RadioGroup>
          </form>
        ),
      },
      {
        title: "Custom Icons",
        component: () => (
          <form>
            <RadioGroup defaultValue="checked">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unchecked" id="r5" icon={X} />
                <Label htmlFor="r5">Unchecked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="checked" id="r6" icon={Check} />
                <Label htmlFor="r6">Checked</Label>
              </div>
            </RadioGroup>
          </form>
        ),
      },
      {
        title: "Radio with sublabels",
        component: () => (
          <form>
            <RadioGroup defaultValue="performance" className="mt-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="battery" id="r7" />
                  <div className="flex items-baseline gap-2">
                    <Label htmlFor="r7">Battery Saver</Label>
                    <p className="text-xs text-neutral-500">(Extends battery life)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="balance" id="r8" />
                  <div className="flex items-baseline gap-2">
                    <Label htmlFor="r8">Balanced Mode</Label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="performance" id="r9" />
                  <div className="flex items-baseline gap-2">
                    <Label htmlFor="r9">Performance Mode</Label>
                    <p className="text-xs text-neutral-500">(Higher power usage)</p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </form>
        ),
      },
      {
        title: "Radio with descriptions",
        component: () => (
          <form>
            <RadioGroup defaultValue="performance" className="mt-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="battery" id="r10" />
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <Label htmlFor="r10">Battery Saver</Label>
                      <p className="text-xs text-neutral-500">(Extends battery life)</p>
                    </div>
                    <p className="text-xs text-neutral-500">Minimizes extra apps usage and turns off background apps so as to conserve battery</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="balance" id="r11" />
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <Label htmlFor="r11">Balanced Mode</Label>
                    </div>
                    <p className="text-xs text-neutral-500">Uses a mix of performance and battery saving for longer sessions that require performance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="performance" id="r12" />
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <Label htmlFor="r12">Performance Mode</Label>
                      <p className="text-xs text-neutral-500">(Higher power usage)</p>
                    </div>
                    <p className="text-xs text-neutral-500">Maximizes the performance by extracting everything for your CPU, significantly reducing battery tho</p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </form>
        ),
      },
      {
        title: "Radio with cards",
        component: () => (
          <form>
            <RadioGroup defaultValue="performance" className="mt-4">
              <div className="flex flex-col space-y-2">
                <Card className="flex items-center space-x-2">
                  <CardContent className="flex gap-2">
                    <RadioGroupItem value="battery" id="rc1" />
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <Label htmlFor="rc1">Battery Saver</Label>
                        <p className="text-xs text-neutral-500">(Extends battery life)</p>
                      </div>
                      <p className="text-xs text-neutral-500">Minimizes extra apps usage and turns off background apps so as to conserve battery</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex items-center space-x-2">
                  <CardContent className="flex gap-2">
                    <RadioGroupItem value="balance" id="rc2" />
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <Label htmlFor="rc2">Balanced Mode</Label>
                      </div>
                      <p className="text-xs text-neutral-500">Uses a mix of performance and battery saving for longer sessions that require performance</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex items-center space-x-2">
                  <CardContent className="flex gap-2">
                    <RadioGroupItem value="performance" id="rc3" />
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <Label htmlFor="rc3">Performance Mode</Label>
                        <p className="text-xs text-neutral-500">(Higher power usage)</p>
                      </div>
                      <p className="text-xs text-neutral-500">Maximizes the performance by extracting everything for your CPU, significantly reducing battery tho</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </form>
        ),
      },
      {
        title: "Radio with cards and icons",
        component: () => (
          <form className="w-full">
            <RadioGroup defaultValue="performance" className="mt-4">
              <div className="flex flex-col space-y-2 w-full">
                <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white">
                  <CardContent className="w-full flex flex-row-reverse justify-between items-center gap-4">
                    <RadioGroupItem value="battery" id="rc4" />
                    <div className="flex items-center gap-2">
                      <BatteryMedium className="size-6" />
                      <Label htmlFor="rc4">Battery Saver</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white">
                  <CardContent className="w-full flex flex-row-reverse justify-between items-center gap-4">
                    <RadioGroupItem value="balance" id="rc5" />
                    <div className="flex items-center gap-2">
                      <FaBalanceScale className="size-6" />
                      <Label htmlFor="rc5">Balanced Mode</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white">
                  <CardContent className="w-full flex flex-row-reverse justify-between items-center gap-4">
                    <RadioGroupItem value="performance" id="rc6" />
                    <div className="flex items-center gap-2">
                      <Cpu className="size-6" />
                      <Label htmlFor="rc6">Performance Mode</Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </form>
        ),
      },
      {
        title: "Plans Picker",
        component: () => (
          <form className="w-full">
            <RadioGroup defaultValue="basic" className="mt-4">
              <div className="flex flex-col w-full">
                <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none rounded-t-lg">
                  <CardContent className="w-full flex justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="basic" id="rc7" />
                      <div className="flex items-center gap-2">
                        <Label htmlFor="rc7">Basic</Label>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-400">$10/mo</p>
                  </CardContent>
                </Card>
                <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none">
                  <CardContent className="w-full flex justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="advanced" id="rc8" />
                      <div className="flex items-center gap-2">
                        <Label htmlFor="rc8">Advanced</Label>
                        <Chip rounded className="text-xs">Popular</Chip>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-400">$15/mo</p>
                  </CardContent>
                </Card>
                <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none">
                  <CardContent className="w-full flex justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="team" id="rc9" />
                      <div className="flex items-center gap-2">
                        <Label htmlFor="rc9">Teams</Label>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-400">$8/mo/plan</p>
                  </CardContent>
                </Card>
                <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none rounded-b-lg">
                  <CardContent className="w-full flex justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="enterprise" id="rc10" />
                      <div className="flex items-center gap-2">
                        <Label htmlFor="rc10">Enterprise</Label>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-400">Custom</p>
                  </CardContent>
                </Card>
              </div>
            </RadioGroup>
          </form>
        )
      }
    ],
  },
  separator: {
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
  },
  tabs: tabsData,
  tooltip: {
    cols: 4,
    title: "Tooltip",
    subtitle: "A collection of Tooltips for you to use",
    steps: [
      {
        type: "dependencies",
        libraries: [
          "clsx",
          "tailwind-merge",
          "@radix-ui/react-tooltip"
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
          },
          {
            name: "globals.css",
            path: "@/globals.css",
            language: "css",
            code: `@import "tailwindcss";
            
@theme {
  --animate-slideUpAndFadeIn: slideUpAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideDownAndFadeIn: slideDownAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideLeftAndFadeIn: slideLeftAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideRightAndFadeIn: slideRightAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideDownAndFadeOut: slideDownAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideUpAndFadeOut: slideUpAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideLeftAndFadeOut: slideLeftAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideRightAndFadeOut: slideRightAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUpAndFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes slideDownAndFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes slideLeftAndFadeIn {
    from {
      opacity: 0;
      transform: translateX(10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }
  
  @keyframes slideRightAndFadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }
  
  @keyframes slideDownAndFadeOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(10px) scale(0.96);
    }
  }
  
  @keyframes slideUpAndFadeOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-10px) scale(0.96);
    }
  }
  
  @keyframes slideLeftAndFadeOut {
    from {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(-10px) scale(0.96);
    }
  }
  
  @keyframes slideRightAndFadeOut {
    from {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(10px) scale(0.96);
    }
  }
}
`
          }
        ]
      },
      {
        type: "source",
        name: "Tooltip.tsx",
        path: "@/components/ui/Tooltip.tsx",
        language: "tsx",
        code: `import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/utils";

type TooltipProps = {
  children: React.ReactNode;
};

export function Tooltip({ children }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export function TooltipTrigger({ children }: TooltipProps) {
  return (
    <TooltipPrimitive.Trigger asChild>
      {children}
    </TooltipPrimitive.Trigger>
  );
}

type TooltipContentProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "custom";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  className?: string;
};

export function TooltipContent({
  children,
  variant = "primary",
  size = "md",
  side = "top",
  sideOffset = 5,
  className = "",
}: TooltipContentProps) {
  const variantClasses = {
    primary:
      "bg-black text-white hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
    secondary:
      "bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
    outline:
      "border border-neutral-300 text-black hover:bg-neutral-100 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800",
    ghost: "text-neutral-500 hover:text-black dark:hover:text-white",
    destructive: "bg-red-500 hover:bg-red-600 text-white",
    custom: className,
  };

  const sizeClasses = {
    xs: "text-xs px-1 py-0.5",
    sm: "text-sm px-2 py-1",
    md: "text-base px-3 py-1.5",
    lg: "text-lg px-4 py-2",
    xl: "text-xl px-5 py-2.5",
  };

  const animationClasses = {
    top: "data-[state=delayed-open]:animate-slideUpAndFadeIn data-[state=closed]:animate-slideDownAndFadeOut",
    bottom: "data-[state=delayed-open]:animate-slideDownAndFadeIn data-[state=closed]:animate-slideUpAndFadeOut",
    left: "data-[state=delayed-open]:animate-slideLeftAndFadeIn data-[state=closed]:animate-slideRightAndFadeOut",
    right: "data-[state=delayed-open]:animate-slideRightAndFadeIn data-[state=closed]:animate-slideLeftAndFadeOut",
  };

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={cn(
          "select-none rounded shadow-lg",
          animationClasses[side],
          variantClasses[variant] || className,
          sizeClasses[size]
        )}
        sideOffset={sideOffset}
        side={side}
      >
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
        `
      }
    ],
    components: [
      {
        title: "Simple Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button>
              Hover on me
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
      {
        title: "Top Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button variant="outline">
              Top
            </Button>
          </TooltipTrigger>

          <TooltipContent side="top">
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
      {
        title: "Left Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button variant="outline">
              Left
            </Button>
          </TooltipTrigger>

          <TooltipContent side="left">
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
      {
        title: "Right Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button variant="outline">
              Right
            </Button>
          </TooltipTrigger>

          <TooltipContent side="right">
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
      {
        title: "Bottom Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button variant="outline">
              Bottom
            </Button>
          </TooltipTrigger>

          <TooltipContent side="bottom">
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
      {
        title: "Primary Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button variant="primary">
              Primary
            </Button>
          </TooltipTrigger>

          <TooltipContent variant="primary" side="top">
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
      {
        title: "Secondary Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button variant="secondary">
              Secondary
            </Button>
          </TooltipTrigger>

          <TooltipContent variant="secondary" side="top">
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
      {
        title: "Outline Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button variant="outline">
              Outline
            </Button>
          </TooltipTrigger>

          <TooltipContent variant="outline" side="top">
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
      {
        title: "Destructive Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button variant="destructive">
              Destructive
            </Button>
          </TooltipTrigger>

          <TooltipContent variant="destructive" side="top">
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
      {
        title: "Ghost Tooltip",
        component: () => <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost">
              Ghost
            </Button>
          </TooltipTrigger>

          <TooltipContent variant="ghost" side="bottom">
            Hi, I'm the tooltip
          </TooltipContent>
        </Tooltip>
      },
    ],
  },
  scrollarea: {
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
  },
};
