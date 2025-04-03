export const dialogCode = `import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/utils";

export const Dialog = DialogPrimitive.Root;

export function DialogTrigger(props: DialogPrimitive.DialogTriggerProps) {
  return (
    <DialogPrimitive.Trigger asChild {...props} />
  );
}

export function DialogClose(props: DialogPrimitive.DialogCloseProps) {
  return (
    <DialogPrimitive.Close asChild {...props} />
  );
}

export function DialogContent({
  className,
  children,
  ...props
}: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/70 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide" />
      <DialogPrimitive.Content
        className={cn(
          "fixed inset-0 m-auto bg-white dark:bg-neutral-950 border border-neutral-600 p-6 rounded-lg shadow-xl max-w-md max-h-[75vh] overflow-y-auto w-full data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-between items-start mb-4">
      <div>
        {children}
      </div>

      <DialogPrimitive.Close className="cursor-pointer p-1 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
        <X size={20} />
      </DialogPrimitive.Close>
    </div>
  );
}

export function DialogTitle({
  className,
  children
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title className={cn("text-lg font-semibold text-black dark:text-white", className)}>
      {children}
    </DialogPrimitive.Title>
  );
}

export function DialogDescription({
  className,
  children
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description className={cn("mt-2 text-gray-600 dark:text-gray-300", className)}>
      {children}
    </DialogPrimitive.Description>
  );
}

export function DialogFooter({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mt-4 flex justify-end", className)}>
      {children}
    </div>
  );
}`;