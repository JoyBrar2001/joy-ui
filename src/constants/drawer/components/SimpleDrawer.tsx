"use client";

import { Button } from "@/components/ui/Button";
import { Drawer, DrawerContainer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/Drawer";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { SheetRef } from "react-modal-sheet";

export function SimpleDrawer() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<SheetRef>(null);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Drawer
      </Button>

      <Drawer
        ref={ref}
        isOpen={isOpen}
        setOpen={setOpen}
        snapPoints={[600]}
        initialSnap={0}
        disableDrag={true}
      >
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
}