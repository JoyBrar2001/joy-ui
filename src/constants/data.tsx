import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Alert } from "@/components/ui/Alert";
import { Avatar, AvatarFallback, AvatarIcon, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxSubLabel, CheckboxDescription } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

import { ArrowRight, BellIcon, Check, FilmIcon, FireExtinguisher, Lock, MoonIcon, Pin, SaveIcon, Scissors, Search, Send, StarIcon, TimerIcon, User, UserCircle, X } from "lucide-react";
import { FaGithub, FaGoogle, FaMicrosoft, FaTwitter } from "react-icons/fa";

import CopyButton from "./CopyButton";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import RemovableChip from "./RemovableChip";
import { Separator } from "@/components/ui/Separator";
import { ScrollArea } from "@/components/ui/ScrollArea";
import React from "react";

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
  // sourceCode: string;
  components: ComponentEntry[];
};

export type ComponentData = Record<string, ComponentCategory>;

export const data: ComponentData = {
  accordion: {
    cols: 6,
    title: "Accordions",
    subtitle: "A collection of Accordions for you to use",
    steps: [
      {
        type: "dependencies",
        libraries: [
          "clsx",
          "tailwind-merge",
          "lucide-react",
          "@radix-ui/react-accordion"
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
            
theme {
  --animate-slideUp: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideDown: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }
}`
          }
        ]
      },
      {
        type: "source",
        name: "Accordion.tsx",
        path: "@/components/ui/Accordion.tsx",
        language: "tsx",
        code: `import { ComponentProps } from "react";
import { ChevronDown } from "lucide-react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/utils";

export function Accordion({ className, children, ...props }: AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) {
  return (
    <AccordionPrimitive.Root className={cn("w-full", className)} {...props} >
      {children}
    </AccordionPrimitive.Root>
  );
}

type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;

export function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-neutral-700 last:border-none", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}

type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger>;

export function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-[15px] leading-none outline-none",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          size={20}
          className="ml-2 transition-all duration-300 group-data-[state=open]:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Content>;

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "w-full overflow-hidden bg-neutral-950 text-sm data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
        className
      )}
      {...props}
    >
      <div className="px-4 py-2">
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}`
      }
    ],
    components: [
      {
        title: "Simple Accordion",
        component: () => (
          <Accordion type="single" collapsible>
            <AccordionItem value="ui-components">
              <AccordionTrigger>High-Quality UI Components</AccordionTrigger>
              <AccordionContent>
                Our library offers well-designed, accessible, and customizable UI components for modern web applications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="performance">
              <AccordionTrigger>Optimized for Performance</AccordionTrigger>
              <AccordionContent>
                The components are lightweight and optimized for speed, ensuring a smooth user experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customization">
              <AccordionTrigger>Fully Customizable</AccordionTrigger>
              <AccordionContent>
                You can easily modify colors, styles, and animations to fit your brand’s identity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        title: "Left Icons",
        component: () => (
          <Accordion type="single" collapsible>
            <AccordionItem value="installation">
              <AccordionTrigger left>Installation Guide</AccordionTrigger>
              <AccordionContent>
                Install the package using npm or yarn and start building your UI instantly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integration">
              <AccordionTrigger left>Easy Integration</AccordionTrigger>
              <AccordionContent>
                Works seamlessly with popular frameworks like React, Next.js, and Vue.js.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support">
              <AccordionTrigger left>Comprehensive Documentation</AccordionTrigger>
              <AccordionContent>
                Detailed documentation and examples to help you get started quickly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        title: "Outlined Accodion",
        component: () => (
          <Accordion type="single" collapsible className="border border-neutral-800 rounded-md">
            <AccordionItem value="installation">
              <AccordionTrigger>Installation Guide</AccordionTrigger>
              <AccordionContent>
                Install the package using npm or yarn and start building your UI instantly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integration">
              <AccordionTrigger>Easy Integration</AccordionTrigger>
              <AccordionContent>
                Works seamlessly with popular frameworks like React, Next.js, and Vue.js.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support">
              <AccordionTrigger>Comprehensive Documentation</AccordionTrigger>
              <AccordionContent>
                Detailed documentation and examples to help you get started quickly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        title: "Nested Sections",
        component: () => (
          <Accordion type="single" collapsible>
            <AccordionItem value="features">
              <AccordionTrigger>Feature Overview</AccordionTrigger>
              <AccordionContent>
                <Accordion type="single" collapsible className="ml-4 border-l border-neutral-800 pl-4">
                  <AccordionItem value="nested-1">
                    <AccordionTrigger>Custom Styling</AccordionTrigger>
                    <AccordionContent>
                      Tailor the look and feel of the components using CSS or utility classes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nested-2">
                    <AccordionTrigger>State Management</AccordionTrigger>
                    <AccordionContent>
                      Built-in support for controlled and uncontrolled states.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="performance">
              <AccordionTrigger>Performance Optimizations</AccordionTrigger>
              <AccordionContent>
                Our components are designed for high efficiency and minimal re-renders.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        title: "Accordion with Icons",
        component: () => (
          <Accordion type="single" collapsible>
            <AccordionItem value="pinned">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <Pin size={16} className="-rotate-45" /> Pinned Section
                </span>
              </AccordionTrigger>
              <AccordionContent>
                This section has an icon next to the trigger text.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="trending">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <FireExtinguisher size={16} /> Trending Topic
                </span>
              </AccordionTrigger>
              <AccordionContent>
                This section is styled with an icon-based trigger.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="newest">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <TimerIcon size={16} /> Newest First
                </span>
              </AccordionTrigger>
              <AccordionContent>
                This section is styled with an icon-based trigger.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        title: "Custom Styled Accordion",
        component: () => (
          <Accordion type="single" collapsible className="bg-gradient-to-r from-blue-500 to-sky-500 rounded-md p-4">
            <AccordionItem value="unique-design">
              <AccordionTrigger className="bg-white text-neutral-800 px-4 py-2 rounded-t-md">
                Unique Design
              </AccordionTrigger>
              <AccordionContent className="bg-sky-500 text-white">
                This accordion has a gradient background and custom styling for a modern look.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="animations">
              <AccordionTrigger className="bg-white text-neutral-800 px-4 py-2">
                Smooth Animations
              </AccordionTrigger>
              <AccordionContent className="bg-sky-500 text-white">
                Includes custom animations for a sleek user experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dark-mode">
              <AccordionTrigger className="bg-white text-neutral-800 px-4 py-2 rounded-b-md data-[state=open]:rounded-none">
                Dark Mode Ready
              </AccordionTrigger>
              <AccordionContent className="bg-sky-500 text-white">
                Perfect for dark-themed websites with consistent styling.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
    ]
  },
  alert: {
    cols: 6,
    title: "Alerts",
    subtitle: "A collection of Alerts for you to use",
    steps: [
      {
        type: "dependencies",
        libraries: [
          "clsx",
          "tailwind-merge",
          "lucide-react"
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
        name: "Alert.tsx",
        path: "@/components/ui/Alert.tsx",
        language: "tsx",
        code: `import Link from "next/link";
import { ArrowRight, CircleCheck, Info, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/utils";

type AlertProps = {
  label: string;
  icon?: React.ReactNode;
  variant: "success" | "info" | "warning" | "alert";
  customColor?: string;
  colored?: boolean;
  buttonText?: string;
  link?: string;
};

const VARIANT_STYLES = {
  success: "border-green-500 text-green-500",
  info: "border-blue-500 text-blue-500",
  warning: "border-yellow-500 text-yellow-500",
  alert: "border-red-500 text-red-500",
};

const DEFAULT_ICONS = {
  success: <CircleCheck className="size-5" />,
  info: <Info className="size-5" />,
  warning: <AlertTriangle className="size-5" />,
  alert: <XCircle className="size-5" />,
};

export default function Alert({
  label,
  icon,
  variant,
  customColor,
  colored = false,
  buttonText,
  link,
}: AlertProps) {
  const alertColor = customColor || VARIANT_STYLES[variant];

  return (
    <div
      className={twMerge(
        "flex flex-col w-full px-6 py-4 border rounded-md",
        colored ? "border-neutral-800" : alertColor
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span
            className={alertColor || "text-white"}
          >
            {icon || DEFAULT_ICONS[variant]}
          </span>

          <span>{label}</span>
        </div>

        {buttonText && link && (
          <Link href={link} className="flex items-center gap-1 text-sm">
            {buttonText}
            <ArrowRight className="size-4" />
          </Link>
        )}
        {buttonText && !link && (
          <div className="flex items-center gap-1 text-sm">
            {buttonText}
          </div>
        )}
      </div>
    </div>
  );
}`
      }
    ],
    components: [
      {
        title: "Info",
        component: () => <Alert label="Completed Successfully!" variant="info" colored />
      },
      {
        title: "Info (Colored)",
        component: () => <Alert label="Completed Successfully!" variant="info" />
      },
      {
        title: "Success",
        component: () => <Alert label="Completed Successfully!" variant="success" colored />
      },
      {
        title: "Success (Colored)",
        component: () => <Alert label="Completed Successfully!" variant="success" />
      },
      {
        title: "Warning",
        component: () => <Alert label="Check your input!" variant="warning" colored />
      },
      {
        title: "Warning (Colored)",
        component: () => <Alert label="Check your input!" variant="warning" />
      },
      {
        title: "Alert",
        component: () => <Alert label="Something went wrong!" variant="alert" colored />
      },
      {
        title: "Alert (Colored)",
        component: () => <Alert label="Something went wrong!" variant="alert" />
      },
      {
        title: "Info with Button",
        component: () => <Alert label="Update Available!" variant="info" buttonText="Update Now" />
      },
      {
        title: "Success with Button",
        component: () => <Alert label="Download Complete!" variant="success" buttonText="Open File" />
      },
      {
        title: "Warning with Button & Link",
        component: () => (
          <Alert label="Storage Almost Full!" variant="warning" buttonText="Manage Storage" link="/components/ui/alert" />
        )
      },
      {
        title: "Alert with Button & Link",
        component: () => (
          <Alert label="Security Risk Detected!" variant="alert" buttonText="Resolve Issue" link="/components/ui/alert" />
        )
      }
    ],
  },
  avatar: {
    cols: 4,
    title: "Avatar",
    subtitle: "A collection of avatars to choose from.",
    steps: [
      {
        type: "dependencies",
        libraries: [
          "clsx",
          "tailwind-merge",
          "@radix-ui/react-avatar"
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
        name: "Avatar.tsx",
        path: "@/components/ui/Avatar.tsx",
        language: "tsx",
        code: `import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/utils";

export function Avatar({
  children,
  rounded = true,
  className,
  ...props
}: AvatarPrimitive.AvatarProps & {
  rounded?: boolean;
}) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative inline-flex size-[45px] select-none items-center justify-center rounded-sm bg-blackA1 align-middle",
        rounded && "rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
}

export function AvatarImage({ className, ...props }: AvatarPrimitive.AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      className={cn(
        "leading-1 flex size-full items-center justify-center bg-white text-sm font-medium rounded-[inherit]",
        className
      )}
      {...props}
    />
  );
}

export function AvatarFallback({ children, className, ...props }: AvatarPrimitive.AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      className="leading-1 flex size-full items-center justify-center bg-neutral-800 text-sm font-medium rounded-[inherit]"
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  );
}

export function AvatarIcon({
  children,
  className,
  position = "top-right"
}: {
  children: React.ReactNode;
  className?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}) {
  return (
    <div
      className={cn(
        "absolute z-10 flex items-center justify-center rounded-full bg-white shadow-md",
        position === "top-right" && "top-[6%] right-[6%]",
        position === "top-left" && "top-[6%] left-[6%]",
        position === "bottom-right" && "bottom-[6%] right-[6%]",
        position === "bottom-left" && "bottom-[6%] left-[6%]",
        className
      )}
    >
      {children}
    </div>
  );
}`
      }
    ],
    components: [
      {
        title: "Avatar With Image and Fallback",
        component: () => <Avatar rounded>
          <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />

          <AvatarFallback>
            JB
          </AvatarFallback>
        </Avatar>
      },
      {
        title: "Avatar with Fallback Text",
        component: () => <Avatar rounded>
          <AvatarImage src="" />

          <AvatarFallback>
            JB
          </AvatarFallback>
        </Avatar>
      },
      {
        title: "Avatar with Fallback Text",
        component: () => <Avatar rounded>
          <AvatarImage src="" />

          <AvatarFallback>
            <User size={20} />
          </AvatarFallback>
        </Avatar>
      },
      {
        title: "Avatar with Icon (Top Right)",
        component: () => <Avatar rounded>
          <AvatarIcon position="top-right">
            <div className="size-2 rounded-full bg-green-500 outline-2 outline-neutral-950" />
          </AvatarIcon>

          <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />

          <AvatarFallback>
            JB
          </AvatarFallback>
        </Avatar>
      },
      {
        title: "Avatar with Icon (Bottom Right)",
        component: () => <Avatar rounded>
          <AvatarIcon position="bottom-right">
            <div className="flex text-xs justify-center items-center size-4 rounded-full bg-neutral-800">
              5
            </div>
          </AvatarIcon>

          <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />

          <AvatarFallback>
            JB
          </AvatarFallback>
        </Avatar>
      },
      {
        title: "Avatar with Icon (Top Left)",
        component: () => <Avatar rounded>
          <AvatarIcon position="top-left">
            <div className="flex text-xs justify-center items-center size-4 rounded-full bg-neutral-800">
              5
            </div>
          </AvatarIcon>

          <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />

          <AvatarFallback>
            JB
          </AvatarFallback>
        </Avatar>
      },
      {
        title: "Group Avatars",
        component: () => (
          <div className="flex">
            <Avatar rounded className="not-first:-ml-3">
              <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" />

              <AvatarFallback>
                JB
              </AvatarFallback>
            </Avatar>
            <Avatar rounded className="not-first:-ml-3">
              <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

              <AvatarFallback>
                JB
              </AvatarFallback>
            </Avatar>
            <Avatar rounded className="not-first:-ml-3">
              <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

              <AvatarFallback>
                JB
              </AvatarFallback>
            </Avatar>
            <Avatar rounded className="not-first:-ml-3">
              <AvatarImage src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

              <AvatarFallback>
                JB
              </AvatarFallback>
            </Avatar>
          </div>
        )
      }
    ]
  },
  button: {
    cols: 4,
    title: "Button",
    subtitle: "A collection of buttons to choose from.",
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
        name: "Button.tsx",
        path: "@/components/ui/Button.tsx",
        language: "tsx",
        code: `import { cn } from "@/utils";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "custom";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  loadingIcon?: React.ReactNode;
};

export default function Button({
  variant = "primary",
  leftIcon,
  rightIcon,
  className,
  children,
  isLoading,
  loadingText,
  loadingIcon,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-3 px-5 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 group",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "primary" &&
        "bg-black text-white hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
        variant === "secondary" &&
        "bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
        variant === "outline" &&
        "border border-neutral-300 text-black hover:bg-neutral-100 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800",
        variant === "ghost" && "text-neutral-500 hover:text-black dark:hover:text-white",
        variant === "destructive" && "bg-red-500 hover:bg-red-600 text-white",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {isLoading ? (
        <>
          {loadingIcon || (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-circle animate-spin size-5"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
          )}
          {loadingText || "Loading..."}
        </>
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );
}`
      }
    ],
    components: [
      {
        title: "Primary Button",
        component: (props: any) => <Button {...props}>Primary</Button>
      },
      {
        title: "Secondary Button",
        component: (props: any) => <Button {...props} variant="secondary">Secondary</Button>
      },
      {
        title: "Outline Button",
        component: (props: any) => <Button {...props} variant="outline">Outline</Button>
      },
      {
        title: "Ghost Button",
        component: (props: any) => <Button {...props} variant="ghost">Ghost</Button>
      },
      {
        title: "Desctructive Button",
        component: (props: any) => <Button {...props} variant="destructive">Desctructive</Button>
      },
      {
        title: "Primary Button with Left Icon",
        component: (props: any) => <Button {...props} variant="primary" leftIcon={<Search className="size-4" />}>Search</Button>
      },
      {
        title: "Primary Button with Right Icon",
        component: (props: any) => <Button {...props} variant="primary" rightIcon={<ArrowRight className="size-4" />}>Next</Button>
      },
      {
        title: "Primary Button with Both Icons",
        component: (props: any) => <Button {...props} variant="primary" leftIcon={<Search className="size-4" />} rightIcon={<ArrowRight className="size-4" />}>Search</Button>
      },
      {
        title: "Disabled Primary Button",
        component: (props: any) => <Button {...props} variant="primary" disabled>Disabled</Button>
      },
      {
        title: "Disabled Outline Button",
        component: (props: any) => <Button {...props} variant="outline" disabled>Disabled</Button>
      },
      {
        title: "Full Width button",
        component: (props: any) => <Button className="w-full" {...props} variant="primary" rightIcon={<ArrowRight className="size-4" />}>Full width</Button>
      },
      {
        title: "Spaced Between Button",
        component: (props: any) => <Button className="w-full justify-between" {...props} variant="primary" rightIcon={<ArrowRight className="size-4" />}>Full width</Button>
      },
      {
        title: "Right Icon with Animation",
        component: (props: any) => <Button {...props} variant="primary" className="hover:scale-105 active:scale-95" rightIcon={<ArrowRight className="size-4 group-hover:translate-x-1 transition" />}>Next</Button>
      },
      {
        title: "Button with Custom Animation",
        component: (props: any) => <Button {...props} variant="primary" className="hover:scale-105 active:scale-95" rightIcon={<Send className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />}>Send</Button>
      },
      {
        title: "Button with Loading State",
        component: (props: any) => <Button {...props} variant="primary" isLoading={true}>Send</Button>
      },
      {
        title: "Disabled while Loading button",
        component: (props: any) => <Button {...props} variant="primary" isLoading={true} disabled={true}>Send</Button>
      },
      {
        title: "Custom Variant Button",
        component: (props: any) => <Button {...props} variant="custom" className="text-black bg-green-200 hover:scale-105 active:scale-95" rightIcon={<div className="relative">
          <div className="bg-green-500 size-4 rounded-full animate-ping" />
          <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-green-500 size-2 rounded-full" />
        </div>
        }>Online</Button>
      },
      {
        title: "Copy Button",
        component: CopyButton,
      },
      {
        title: "Auth Icon Buttons",
        component: (props: any) => <div className="w-full flex justify-start gap-2">
          <Button {...props} variant="outline" className="w-full"><FaGoogle className="size-4" /></Button>
          <Button {...props} variant="outline" className="w-full"><FaGithub className="size-4" /></Button>
          <Button {...props} variant="outline" className="w-full"><FaTwitter className="size-4" /></Button>
          <Button {...props} variant="outline" className="w-full"><FaMicrosoft className="size-4" /></Button>
        </div>
      },
      {
        title: "Auth Buttons with Titles",
        component: (props: any) => <div className="flex flex-col justify-start gap-2 mx-auto">
          <Button {...props} className="px-12" variant="outline" leftIcon={<FaGoogle className="size-4" />}>
            Login with Google
          </Button>
          <Button {...props} className="px-12" variant="outline" leftIcon={<FaGithub className="size-4" />}>
            Login with Github
          </Button>
          <Button {...props} className="px-12" variant="outline" leftIcon={<FaTwitter className="size-4" />}>
            Login with Twitter
          </Button>
          <Button {...props} className="px-12" variant="outline" leftIcon={<FaMicrosoft className="size-4" />}>
            Login with Microsoft
          </Button>
        </div>
      },
      {
        title: "Colored Auth Buttons with Titles",
        component: (props: any) => <div className="flex flex-col justify-start gap-2 mx-auto">
          <Button {...props} variant="custom" className="bg-rose-500 hover:bg-rose-600 px-12" leftIcon={<FaGoogle className="size-4" />}>
            Login with Google
          </Button>
          <Button {...props} variant="custom" className="bg-neutral-500 hover:bg-neutral-600 px-12" leftIcon={<FaGithub className="size-4" />}>
            Login with Github
          </Button>
          <Button {...props} variant="custom" className="bg-sky-500 hover:bg-sky-600 px-12" leftIcon={<FaTwitter className="size-4" />}>
            Login with Twitter
          </Button>
          <Button {...props} variant="custom" className="bg-amber-500 hover:bg-amber-600 px-12" leftIcon={<FaMicrosoft className="size-4" />}>
            Login with Microsoft
          </Button>
        </div>
      },
    ],
  },
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
