import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/utils";

export function Progress({ className, value, max = 100, ...props }: ProgressPrimitive.ProgressProps) {
  const percentage = value === null || value === undefined ? 0 : Math.min(100, Math.max(0, (value / max) * 100));
  return <ProgressPrimitive.Root value={value} max={max} className={cn("relative h-3 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800", className)} {...props}><ProgressPrimitive.Indicator className="h-full w-full flex-1 bg-neutral-900 transition-transform duration-300 dark:bg-white" style={{ transform: `translateX(-${100 - percentage}%)` }} /></ProgressPrimitive.Root>;
}
