import * as Primitive from "@radix-ui/react-password-toggle-field";
import { cn } from "@/utils";

export const PasswordToggleField = Primitive.Root;

export function PasswordToggleInput({ className, ...props }: Primitive.PasswordToggleFieldInputProps) {
  return <Primitive.Input className={cn("h-10 w-full rounded-md border border-neutral-300 bg-white px-3 pr-11 text-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:focus:border-white dark:focus:ring-neutral-800", className)} {...props} />;
}

export function PasswordToggle({ className, ...props }: Primitive.PasswordToggleFieldToggleProps) {
  return <Primitive.Toggle className={cn("absolute right-2 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded text-neutral-500 outline-none hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white", className)} {...props} />;
}

export const PasswordToggleIcon = Primitive.Icon;
