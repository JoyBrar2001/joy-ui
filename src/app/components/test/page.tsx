"use client";

import { useState, useRef } from "react";
import { X } from "lucide-react";
import { SheetRef } from "react-modal-sheet";
import { Button } from "@/components/ui/Button";
import { Drawer, DrawerBackdrop, DrawerContainer, DrawerContent, DrawerHeader, DrawerTitle } from "./Drawer";

import * as TabsPrimitive from "@radix-ui/react-tabs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { Label } from "./Label";
import { Input } from "@/components/ui/Input";

export default function Example() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<SheetRef>(null);
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <div className="max-w-[100rem] mx-auto h-full flex pt-24 bg-neutral-100 dark:bg-black">
      <section className="flex-1 p-6 min-h-screen h-full">
        {/* <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-indigo-500 px-5 py-2 text-white font-medium transition hover:bg-indigo-600"
        >
          Open Drawer
        </button>

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
        </Drawer> */}

        <Tabs defaultValue="account">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" className="border-b-2 border-b-transparent data-[state=active]:border-b-white data-[state=active]:text-white">
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className="border-b-2 border-b-transparent data-[state=active]:border-b-white data-[state=active]:text-white">
              Password
            </TabsTrigger>
          </TabsList>

          {/* Account Tab Content */}
          <TabsContent value="account">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-neutral-300">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" className="mt-1 w-full bg-neutral-700 text-white" />
              </div>
              <div>
                <Label htmlFor="username" className="text-neutral-300">Username</Label>
                <Input id="username" defaultValue="@peduarte" className="mt-1 w-full bg-neutral-700 text-white" />
              </div>
              <Button className="w-full bg-neutral-700 hover:bg-neutral-600 text-white">Save changes</Button>
            </div>
          </TabsContent>

          {/* Password Tab Content */}
          <TabsContent value="password">
            <div className="space-y-4">
              <div>
                <Label htmlFor="current" className="text-neutral-300">Current password</Label>
                <Input id="current" type="password" className="mt-1 w-full bg-neutral-700 text-white" />
              </div>
              <div>
                <Label htmlFor="new" className="text-neutral-300">New password</Label>
                <Input id="new" type="password" className="mt-1 w-full bg-neutral-700 text-white" />
              </div>
              <div>
                <Label htmlFor="confirm" className="text-neutral-300">Confirm password</Label>
                <Input id="confirm" type="password" className="mt-1 w-full bg-neutral-700 text-white" />
              </div>
              <Button className="w-full bg-neutral-700 hover:bg-neutral-600 text-white">Change password</Button>
            </div>
          </TabsContent>
        </Tabs>

      </section>
    </div>
  );
}
