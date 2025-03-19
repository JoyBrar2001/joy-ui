import { cn } from "@/utils";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "custom";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  loadingIcon?: React.ReactNode;
};

export function Button({
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
}
