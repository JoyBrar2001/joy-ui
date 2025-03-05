import { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils";
import { Loader2, LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  isLoading?: boolean;
  icon?: LucideIcon;
}

export default function Button({
  variant = "primary",
  isLoading = false,
  icon: Icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 px-5 py-2 rounded-2xl text-sm font-medium cursor-pointer transition-all duration-300",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-black text-white hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200":
            variant === "primary",
          "bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700":
            variant === "secondary",
          "border border-neutral-300 text-black hover:bg-neutral-100 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800":
            variant === "outline",
          "text-neutral-500 hover:text-black dark:hover:text-white":
            variant === "ghost",
        },
        className
      )}
      {...props}
    >
      {/* {isLoading ? <Loader2 className="size-4 animate-spin" /> : <Icon />} */}
      {children}
    </button>
  );
}
