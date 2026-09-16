import * as Primitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/utils";

export const AlertDialog = Primitive.Root;
export const AlertDialogTrigger = Primitive.Trigger;
export const AlertDialogCancel = Primitive.Cancel;
export const AlertDialogAction = Primitive.Action;

export function AlertDialogContent({
  className,
  ...props
}: Primitive.AlertDialogContentProps) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
      <Primitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-6 text-neutral-900 shadow-2xl dark:border-neutral-700 dark:bg-neutral-950 dark:text-white",
          className,
        )}
        {...props}
      />
    </Primitive.Portal>
  );
}
export function AlertDialogHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}
export function AlertDialogFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}
export function AlertDialogTitle({
  className,
  ...props
}: Primitive.AlertDialogTitleProps) {
  return (
    <Primitive.Title
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}
export function AlertDialogDescription({
  className,
  ...props
}: Primitive.AlertDialogDescriptionProps) {
  return (
    <Primitive.Description
      className={cn(
        "text-sm leading-6 text-neutral-600 dark:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}
