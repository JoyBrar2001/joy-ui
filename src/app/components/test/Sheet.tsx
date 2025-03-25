import { Sheet as SheetPrimitive, SheetRef } from "react-modal-sheet";
import { ReactNode, Ref } from "react";
import { cn } from "@/utils";

type SheetProps = {
  ref: Ref<SheetRef>;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  snapPoints?: number[];
  initialSnap?: number;
  disableDrag?: boolean;
  children?: ReactNode;
};

export function Sheet({
  ref,
  isOpen,
  setOpen,
  snapPoints = [800, 400, 200],
  initialSnap = 0,
  disableDrag = false,
  children,
}: SheetProps) {
  return (
    <SheetPrimitive
      ref={ref}
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      snapPoints={snapPoints}
      initialSnap={initialSnap}
      disableDrag={disableDrag}
    >
      {children}
    </SheetPrimitive>
  );
}

export function SheetBackdrop({
  className,
  setOpen
}: {
  className?: string;
  setOpen: (open: boolean) => void;
}) {
  return (
    <SheetPrimitive.Backdrop
      className={cn("bg-black/50 transition-opacity pointer-events-auto cursor-pointer", className)}
      onTap={() => setOpen(false)}
    />
  );
}

type SheetContainerProps = { children: ReactNode };

export function SheetContainer({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <SheetPrimitive.Container className={cn("!rounded-t-3xl !bg-neutral-900 text-white shadow-xl", className)}>
      {children}
    </SheetPrimitive.Container>
  );
}

export function SheetHeader({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <SheetPrimitive.Header className={cn("p-4 border-b border-neutral-700 flex justify-between items-center", className)}>
      {children}
    </SheetPrimitive.Header>
  );
}

export function SheetTitle({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-xl font-semibold", className)}>
      {children}
    </h2>
  );
}

export function SheetContent({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <SheetPrimitive.Content className={cn("px-6 py-8 space-y-4", className)}>
      {children}
    </SheetPrimitive.Content>
  );
}
