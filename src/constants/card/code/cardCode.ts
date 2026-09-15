export const cardCode = `import { cn } from "@/utils";
import { ComponentProps, forwardRef } from "react";

export const Card = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("rounded-lg border bg-white dark:bg-neutral-950", className)} {...props} />
);
export const CardHeader = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("relative flex flex-col gap-1.5 border-b p-4", className)} {...props} />
);
export const CardTitle = forwardRef<HTMLHeadingElement, ComponentProps<"h3">>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
);
export const CardDescription = forwardRef<HTMLParagraphElement, ComponentProps<"p">>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-neutral-500", className)} {...props} />
);
export const CardContent = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-4", className)} {...props} />
);
export const CardFooter = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center border-t p-4", className)} {...props} />
);
export const CardAction = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("absolute right-4 top-4 flex items-center gap-2", className)} {...props} />
);`;
