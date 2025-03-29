export const drawerCode = `import { Sheet as DrawerPrimitive, SheetRef } from "react-modal-sheet";
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

export function Drawer({
  ref,
  isOpen,
  setOpen,
  snapPoints = [800, 400, 200],
  initialSnap = 0,
  disableDrag = false,
  children,
}: DrawerProps) {
  return (
    <DrawerPrimitive
      ref={ref}
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      snapPoints={snapPoints}
      initialSnap={initialSnap}
      disableDrag={disableDrag}
    >
      {children}
    </DrawerPrimitive>
  );
}

export function DrawerBackdrop({
  className,
  setOpen
}: {
  className?: string;
  setOpen: (open: boolean) => void;
}) {
  return (
    <DrawerPrimitive.Backdrop
      className={cn("bg-black/50 transition-opacity pointer-events-auto cursor-pointer", className)}
      onTap={() => setOpen(false)}
    />
  );
}

export function DrawerContainer({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DrawerPrimitive.Container className={cn("!rounded-t-3xl !bg-neutral-900 text-white shadow-xl", className)}>
      {children}
    </DrawerPrimitive.Container>
  );
}

export function DrawerHeader({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DrawerPrimitive.Header className={cn("p-4 border-b border-neutral-700 flex justify-between items-center", className)}>
      {children}
    </DrawerPrimitive.Header>
  );
}

export function DrawerTitle({
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

export function DrawerContent({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <DrawerPrimitive.Content className={cn("px-6 py-8 space-y-4", className)}>
      {children}
    </DrawerPrimitive.Content>
  );
}`;

export const drawerWithBackdrop = `"use client";

import { Button } from "@/components/ui/Button";
import { Drawer, DrawerBackdrop, DrawerContainer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/Drawer";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { SheetRef } from "react-modal-sheet";

export function DrawerWithBackdrop() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<SheetRef>(null);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Backdrop Drawer
      </Button>

      <Drawer ref={ref} isOpen={isOpen} setOpen={setOpen} snapPoints={[600]} initialSnap={0} disableDrag={true}>
        <DrawerBackdrop setOpen={setOpen} className="bg-black/70" />

        <DrawerContainer>
          <DrawerHeader>
            <DrawerTitle>Sheet Title</DrawerTitle>
            <Button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-neutral-700 hover:bg-neutral-600"
            >
              <X className="w-5 h-5" />
            </Button>
          </DrawerHeader>

          <DrawerContent>
            <p className="text-neutral-300">
              This is a smooth, draggable modal sheet with different snap points.
            </p>

            <ul className="space-y-2">
              <li className="p-3 bg-neutral-800 rounded-md">Item 1</li>
              <li className="p-3 bg-neutral-800 rounded-md">Item 2</li>
              <li className="p-3 bg-neutral-800 rounded-md">Item 3</li>
            </ul>
          </DrawerContent>
        </DrawerContainer>
      </Drawer>
    </>
  );
}`;