"use client";

import { useState, useRef } from "react";
import { MenuIcon, User, X } from "lucide-react";
import { SheetRef } from "react-modal-sheet";
import { Button } from "@/components/ui/Button";
import { Drawer, DrawerBackdrop, DrawerContainer, DrawerContent, DrawerHeader, DrawerTitle } from "./Drawer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { Label } from "./Label";
import { Input } from "@/components/ui/Input";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { cn } from "@/utils";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "./Popover";
import { HoverCard, HoverCardArrow, HoverCardContent, HoverCardTrigger } from "./HoverCard";

import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Switch, SwitchThumb } from "./Switch";

export default function Example() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<SheetRef>(null);
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <div className="max-w-[100rem] mx-auto h-full flex pt-24 bg-neutral-100 dark:bg-black">
      <section className="flex-1 p-6 min-h-screen h-full">
        <div className="flex items-center">
          <label
            className="pr-[15px] text-[15px] leading-none text-white"
            htmlFor="airplane-mode"
          >
            Airplane mode
          </label>
          <Switch>
            <SwitchThumb />
          </Switch>
        </div>

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

        {/* <Tabs defaultValue="account">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" className="border-b-2 border-b-transparent data-[state=active]:border-b-white data-[state=active]:text-white">
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className="border-b-2 border-b-transparent data-[state=active]:border-b-white data-[state=active]:text-white">
              Password
            </TabsTrigger>
          </TabsList>
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
        </Tabs> */}

        {/* <Popover>
          <PopoverTrigger>
            <Button variant="outline" className="p-2 m-64">
              <User className="size-5" />
            </Button>
          </PopoverTrigger>

          <PopoverContent>
            <Card className="rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900 shadow-lg">
              <CardHeader className="relative flex items-center justify-between pb-2">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBmYWNlc3xlbnwwfHwwfHx8MA%3D%3D" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold">John Doe</CardTitle>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Software Engineer</p>
                  </div>
                </div>
                <PopoverClose className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition">
                  <X className="size-5" />
                </PopoverClose>
              </CardHeader>

              <CardContent className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Passionate about building scalable web applications and intuitive user experiences.
              </CardContent>

              <CardFooter className="flex justify-center gap-2 pt-3">
                <Button variant="outline" className="text-sm whitespace-nowrap flex-1">View Profile</Button>
                <Button variant="primary" className="text-sm whitespace-nowrap flex-1">Logout</Button>
              </CardFooter>
            </Card>
          </PopoverContent>
        </Popover> */}

        {/* <HoverCard>
          <HoverCardTrigger>
            <Button variant="outline">Hover Me</Button>
          </HoverCardTrigger>

          <HoverCardContent className="p-4">
            <h3 className="text-lg font-semibold">Hover Card Title</h3>
            <p className="text-sm text-neutral-500">This is additional information.</p>

            <HoverCardArrow className="fill-neutral-600" />
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" alt="@radix_ui" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
          </HoverCardTrigger>

          <HoverCardContent className="p-0 w-80">
            <Card className="rounded-lg bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-700">
              <CardHeader className="flex gap-2 pb-2">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" alt="@radix_ui" />
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg font-semibold">Joy Brar</CardTitle>
                  <CardDescription className="-mt-1">@joybrar2001</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">
                <p className="text-neutral-500 dark:text-neutral-400">
                  Full stack developer, mind behind Joy UI (obviously), and proficient in Next js. React, Typescript...
                </p>
              </CardContent>

              <CardFooter className="flex justify-between border-t border-neutral-200 dark:border-neutral-700 p-3">
                <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold">500</p>
                  <p className="text-xs text-neutral-500">Following</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold">2,900</p>
                  <p className="text-xs text-neutral-500">Followers</p>
                </div>
                <Button variant="outline" className="text-sm">Follow</Button>
              </CardFooter>
            </Card>
          </HoverCardContent>
        </HoverCard> */}
      </section>
    </div >
  );
}
