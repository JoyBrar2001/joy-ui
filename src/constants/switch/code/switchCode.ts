export const switchCode = `import { cn } from "@/utils";
import * as SwitchPrimitive from "@radix-ui/react-switch"

export function Switch({ children, className, ...props }: SwitchPrimitive.SwitchProps) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "relative h-6 w-10 cursor-default rounded-full bg-neutral-800 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black transition data-[state=checked]:bg-white",
        className
      )}
      id="airplane-mode"
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
        "block size-5 translate-x-0.5 rounded-full bg-black transition-transform duration-250 will-change-transform data-[state=checked]:translate-x-[18px]",
        className
      )}
      {...props}
    />
  );
}`;