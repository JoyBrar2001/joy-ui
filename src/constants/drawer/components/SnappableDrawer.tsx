"use client";

import { Button } from "@/components/ui/Button";
import { Drawer, DrawerBackdrop, DrawerContainer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/Drawer";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { SheetRef } from "react-modal-sheet";

export function SnappableDrawer() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<SheetRef>(null);
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="custom"
        className="rounded-lg bg-indigo-500 text-white font-medium transition hover:bg-indigo-600"
      >
        Open Snappable Drawer
      </Button>

      <Drawer ref={ref} isOpen={isOpen} setOpen={setOpen} snapPoints={[800, 400, 200]} initialSnap={0} disableDrag={false}>
        <DrawerBackdrop setOpen={setOpen} />

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

            <div className="flex space-x-2 mt-4">
              <Button
                variant="custom"
                onClick={() => snapTo(0)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Snap to 800px
              </Button>
              <Button
                variant="custom"
                onClick={() => snapTo(1)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Snap to 400px
              </Button>
              <Button
                variant="custom"
                onClick={() => snapTo(2)}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Snap to 200px
              </Button>
            </div>
          </DrawerContent>
        </DrawerContainer>
      </Drawer>
    </>
  );
}