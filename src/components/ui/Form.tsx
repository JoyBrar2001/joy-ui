import * as Primitive from "@radix-ui/react-form";
import { cn } from "@/utils";

export const Form = Primitive.Root;
export const FormField = Primitive.Field;

export function FormLabel({ className, ...props }: Primitive.FormLabelProps) {
  return (
    <Primitive.Label
      className={cn(
        "mb-2 block text-sm font-medium text-neutral-900 dark:text-white",
        className,
      )}
      {...props}
    />
  );
}

export function FormControl({
  className,
  ...props
}: Primitive.FormControlProps) {
  return (
    <Primitive.Control
      className={cn(
        "h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:focus:border-white dark:focus:ring-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

export function FormMessage({
  className,
  forceMatch,
  match,
  ...props
}: Primitive.FormMessageProps) {
  const messageProps =
    match === undefined ? props : { ...props, match, forceMatch };
  return (
    <Primitive.Message
      className={cn(
        "mt-2 block text-xs text-red-600 dark:text-red-400",
        className,
      )}
      {...messageProps}
    />
  );
}

export function FormDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p className={cn("mt-2 text-xs text-neutral-500", className)} {...props} />
  );
}

export function FormSubmit({ className, ...props }: Primitive.FormSubmitProps) {
  return (
    <Primitive.Submit
      className={cn(
        "mt-4 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
        className,
      )}
      {...props}
    />
  );
}
