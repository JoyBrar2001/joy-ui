import { cn } from "@/utils";
import * as SwitchPrimitive from "@radix-ui/react-switch"

export function Switch({ children, className, ...props }: SwitchPrimitive.SwitchProps) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "relative h-6 w-10 cursor-default rounded-full bg-neutral-300 outline-none transition focus:shadow-[0_0_0_2px] focus:shadow-neutral-400 data-[state=checked]:bg-neutral-900 dark:bg-neutral-800 dark:focus:shadow-black dark:data-[state=checked]:bg-white",
        className
      )}
      {...props}
    >
      {children || (
        <SwitchThumb />
      )}
    </SwitchPrimitive.Root>
  );
}

export function SwitchThumb({ className, ...props }: SwitchPrimitive.SwitchThumbProps) {
  return (
    <SwitchPrimitive.Thumb
      className={cn(
        "block size-5 translate-x-0.5 rounded-full bg-white transition-transform duration-250 will-change-transform data-[state=checked]:translate-x-[18px] dark:bg-black",
        className
      )}
      {...props}
    />
  );
}
