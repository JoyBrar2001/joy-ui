import * as Primitive from "@radix-ui/react-one-time-password-field";
import { cn } from "@/utils";

export const OneTimePasswordField = Primitive.Root;
export const OneTimePasswordHiddenInput = Primitive.HiddenInput;

export function OneTimePasswordInput({ className, ...props }: Primitive.OneTimePasswordFieldInputProps) {
  return <Primitive.Input className={cn("size-11 rounded-md border border-neutral-300 bg-white text-center text-lg font-semibold outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:focus:border-white dark:focus:ring-neutral-800", className)} {...props} />;
}
