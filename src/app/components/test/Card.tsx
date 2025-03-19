import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils"; // Utility function for conditional classNames

type CardProps = ComponentProps<"div"> & {
  variant?: "default" | "bordered" | "shadow" | "elevated";
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-white dark:bg-neutral-950 transition-colors",
          {
            "border border-neutral-200 dark:border-neutral-800": variant === "bordered",
            "shadow-sm": variant === "shadow",
            "shadow-lg": variant === "elevated",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-4 md:p-6 border-b border-neutral-200 dark:border-neutral-800", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, ComponentProps<"h1">>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1 ref={ref} className={cn("text-xl font-semibold text-neutral-900 dark:text-white", className)} {...props}>
        {children}
      </h1>
    );
  }
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, ComponentProps<"p">>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)} {...props}>
        {children}
      </p>
    );
  }
);
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-4 md:p-6 text-neutral-700 dark:text-neutral-300", className)} {...props}>
        {children}
      </div>
    );
  }
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-4 md:p-6 border-t border-neutral-200 dark:border-neutral-800", className)} {...props}>
        {children}
      </div>
    );
  }
);
CardFooter.displayName = "CardFooter";
