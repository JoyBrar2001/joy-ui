import { Sheet as DrawerPrimitive, SheetRef } from "react-modal-sheet";
import { ReactNode, Ref } from "react";
import { cn } from "@/utils";

type DrawerProps = {
  ref: Ref<SheetRef>;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  snapPoints?: number[];
  initialSnap?: number;
  disableDrag?: boolean;
  children?: ReactNode;
};

function normalizeSnapPoints(points: number[]) {
  const middlePoints = points
    .filter((point) => point !== 0 && point !== 1)
    .sort((a, b) => a - b);
  return [0, ...middlePoints, 1];
}

export function Drawer({
  ref,
  isOpen,
  setOpen,
  snapPoints = [0, 0.5, 1],
  initialSnap = 1,
  disableDrag = false,
  children,
}: DrawerProps) {
  return (
    <DrawerPrimitive
      ref={ref}
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      snapPoints={normalizeSnapPoints(snapPoints)}
      initialSnap={initialSnap}
      disableDrag={disableDrag}
    >
      {children}
    </DrawerPrimitive>
  );
}

export function DrawerBackdrop({
  className,
  setOpen,
}: {
  className?: string;
  setOpen: (open: boolean) => void;
}) {
  return (
    <DrawerPrimitive.Backdrop
      className={cn(
        "bg-black/50 transition-opacity pointer-events-auto cursor-pointer",
        className,
      )}
      onTap={() => setOpen(false)}
    />
  );
}

export function DrawerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DrawerPrimitive.Container
      className={cn(
        "!rounded-t-3xl !bg-white text-neutral-900 shadow-xl dark:!bg-neutral-900 dark:text-white",
        className,
      )}
    >
      {children}
    </DrawerPrimitive.Container>
  );
}

export function DrawerHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DrawerPrimitive.Header
      className={cn(
        "flex items-center justify-between border-b border-neutral-200 p-4 dark:border-neutral-700",
        className,
      )}
    >
      {children}
    </DrawerPrimitive.Header>
  );
}

export function DrawerTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={cn("text-xl font-semibold", className)}>{children}</h2>;
}

export function DrawerContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DrawerPrimitive.Content className={cn("px-6 py-8 space-y-4", className)}>
      {children}
    </DrawerPrimitive.Content>
  );
}
