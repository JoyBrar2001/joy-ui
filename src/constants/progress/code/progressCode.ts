export const progressCode = `import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/utils";

export function Progress({ className, value, max = 100, ...props }) {
  const percentage = value == null ? 0 : Math.min(100, Math.max(0, (value / max) * 100));
  return <ProgressPrimitive.Root value={value} max={max} className={cn("relative h-3 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800", className)} {...props}>
    <ProgressPrimitive.Indicator className="h-full bg-neutral-900 dark:bg-white" style={{ transform: \`translateX(-\${100 - percentage}%)\` }} />
  </ProgressPrimitive.Root>;
}`;
