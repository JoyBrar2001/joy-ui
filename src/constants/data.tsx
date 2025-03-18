import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Input from "@/components/ui/Input";
import { ArrowRight, Lock, Search, Send } from "lucide-react";
import { FaGithub, FaGoogle, FaMicrosoft, FaTwitter } from "react-icons/fa";

export type ComponentEntry = {
  title: string;
  component: (props?: any) => React.ReactNode;
};

export type StepType = "dependencies" | "utilities" | "source";

export type LanguageType = "shell" | "typescript" | "javascript";

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
        language: "typescript",
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
        language: "typescript",
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
        language: "typescript",
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
        "bg-white text-black text-sm px-2 py-0.5 rounded-md",
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
        language: "typescript",
        code: `import React from "react";
import { cn } from "@/utils";

export type Input02Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  className?: string;
  description?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Input02({
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
};
