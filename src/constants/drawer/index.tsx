import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { DraggableDrawer, DrawerWithBackdrop, DrawerWithBackdropBlur, SimpleDrawer, SnappableDrawer } from "./components";

export const drawerData: ComponentCategory = {
  cols: 4,
  title: "Drawer",
  subtitle: "A collection of Drawers for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "react-modal-sheet"
      ]
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: cnFile
        }
      ]
    },
    {
      type: "source",
      name: "Drawer.tsx",
      path: "@/components/ui/Drawer.tsx",
      language: "tsx",
      code: `import { Sheet as DrawerPrimitive, SheetRef } from "react-modal-sheet";
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
}`
    }
  ],
  components: [
    {
      title: "Simple Drawer",
      component: SimpleDrawer
    },
    {
      title: "Drawer with Backdrop",
      component: DrawerWithBackdrop
    },
    {
      title: "Drawer with Backdrop Blur",
      component: DrawerWithBackdropBlur
    },
    {
      title: "Draggable Drawer",
      component: DraggableDrawer
    },
    {
      title: "Snappable Drawer",
      component: SnappableDrawer
    },
  ]
}