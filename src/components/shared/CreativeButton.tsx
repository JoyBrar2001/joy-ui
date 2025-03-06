import { cn } from "@/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  width?: string;
}

export default function CreativeButton({
  variant,
  width,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className="relative h-full w-24 group">
      <span className={cn(
        "absolute inset-0 bg-white dark:bg-black text-neutral-700 dark:text-neutral-300 w-full flex items-center justify-center gap-2 px-5 py-2 cursor-pointer transition-all duration-300 group-hover:bg-red-400 group-hover:text-black border border-black/0 group-hover:border-black",
        "disabled:opacity-50 disabled:cursor-not-allowed",
      )}>
        {children}
      </span>

      <span className={cn(
        "absolute inset-0 bg-white dark:bg-black text-neutral-700 dark:text-neutral-300 w-full flex items-center justify-center gap-2 px-5 py-2 cursor-pointer transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-sky-400 group-hover:text-black border border-black/0 group-hover:border-black",
        "disabled:opacity-50 disabled:cursor-not-allowed",
      )}>
        {children}
      </span>

      <span className={cn(
        "absolute inset-0 bg-white dark:bg-black text-neutral-700 dark:text-neutral-300 w-full flex items-center justify-center gap-2 px-5 py-2 cursor-pointer transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:bg-amber-400 group-hover:text-black border border-black/0 group-hover:border-black",
        "disabled:opacity-50 disabled:cursor-not-allowed",
      )}>
        {children}
      </span>
    </button>
  )
}