export const simpleBottomPopoverCode = `"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose
} from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { X } from "lucide-react";

export function SimpleBottomPopover () {
  const [settings, setSettings] = useState({
    width: "100%",
    maxWidth: "300px",
    height: "180px",
    borderRadius: "sm",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.id]: e.target.value });
  };

  const handleReset = () => {
    setSettings({
      width: "100%",
      maxWidth: "300px",
      height: "180px",
      borderRadius: "sm",
    });
  };

  const handleSave = () => {
    console.log("Settings Saved:", settings);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Open Settings</Button>
      </PopoverTrigger>

      <PopoverContent>
        <Card className="rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900 shadow-lg">
          <CardHeader className="relative flex items-center justify-between pb-2">
            <div className="flex flex-col items-start gap-1">
              <CardTitle className="text-lg font-semibold">Dimensions</CardTitle>
              <CardDescription className="text-sm text-neutral-500 dark:text-neutral-400">
                Set your dimensions here
              </CardDescription>
            </div>
            <PopoverClose className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition">
              <X className="size-5" />
            </PopoverClose>
          </CardHeader>

          <CardContent className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed grid grid-cols-2 gap-y-3 items-center">
            <Label htmlFor="width">Width</Label>
            <Input id="width" value={settings.width} onChange={handleChange} className="py-1" />

            <Label htmlFor="maxWidth">Max. Width</Label>
            <Input id="maxWidth" value={settings.maxWidth} onChange={handleChange} className="py-1" />

            <Label htmlFor="height">Height</Label>
            <Input id="height" value={settings.height} onChange={handleChange} className="py-1" />

            <Label htmlFor="borderRadius">Border Radius</Label>
            <Input id="borderRadius" value={settings.borderRadius} onChange={handleChange} className="py-1" />
          </CardContent>

          <CardFooter className="flex justify-center gap-2 pt-3">
            <Button variant="outline" className="text-sm whitespace-nowrap flex-1" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="primary" className="text-sm whitespace-nowrap flex-1" onClick={handleSave}>
              Save Settings
            </Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
};`;

export const simpleLeftPopoverCode = `"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose
} from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { X } from "lucide-react";

export function SimpleLeftPopover () {
  const [settings, setSettings] = useState({
    width: "100%",
    maxWidth: "300px",
    height: "180px",
    borderRadius: "sm",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.id]: e.target.value });
  };

  const handleReset = () => {
    setSettings({
      width: "100%",
      maxWidth: "300px",
      height: "180px",
      borderRadius: "sm",
    });
  };

  const handleSave = () => {
    console.log("Settings Saved:", settings);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Open Settings</Button>
      </PopoverTrigger>

      <PopoverContent side="left">
        <Card className="rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900 shadow-lg">
          <CardHeader className="relative flex items-center justify-between pb-2">
            <div className="flex flex-col items-start gap-1">
              <CardTitle className="text-lg font-semibold">Dimensions</CardTitle>
              <CardDescription className="text-sm text-neutral-500 dark:text-neutral-400">
                Set your dimensions here
              </CardDescription>
            </div>
            <PopoverClose className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition">
              <X className="size-5" />
            </PopoverClose>
          </CardHeader>

          <CardContent className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed grid grid-cols-2 gap-y-3 items-center">
            <Label htmlFor="width">Width</Label>
            <Input id="width" value={settings.width} onChange={handleChange} className="py-1" />

            <Label htmlFor="maxWidth">Max. Width</Label>
            <Input id="maxWidth" value={settings.maxWidth} onChange={handleChange} className="py-1" />

            <Label htmlFor="height">Height</Label>
            <Input id="height" value={settings.height} onChange={handleChange} className="py-1" />

            <Label htmlFor="borderRadius">Border Radius</Label>
            <Input id="borderRadius" value={settings.borderRadius} onChange={handleChange} className="py-1" />
          </CardContent>

          <CardFooter className="flex justify-center gap-2 pt-3">
            <Button variant="outline" className="text-sm whitespace-nowrap flex-1" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="primary" className="text-sm whitespace-nowrap flex-1" onClick={handleSave}>
              Save Settings
            </Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
};`;

export const simpleRightPopoverCode = `"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose
} from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { X } from "lucide-react";

export function SimpleRightPopover () {
  const [settings, setSettings] = useState({
    width: "100%",
    maxWidth: "300px",
    height: "180px",
    borderRadius: "sm",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.id]: e.target.value });
  };

  const handleReset = () => {
    setSettings({
      width: "100%",
      maxWidth: "300px",
      height: "180px",
      borderRadius: "sm",
    });
  };

  const handleSave = () => {
    console.log("Settings Saved:", settings);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Open Settings</Button>
      </PopoverTrigger>

      <PopoverContent side="right">
        <Card className="rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900 shadow-lg">
          <CardHeader className="relative flex items-center justify-between pb-2">
            <div className="flex flex-col items-start gap-1">
              <CardTitle className="text-lg font-semibold">Dimensions</CardTitle>
              <CardDescription className="text-sm text-neutral-500 dark:text-neutral-400">
                Set your dimensions here
              </CardDescription>
            </div>
            <PopoverClose className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition">
              <X className="size-5" />
            </PopoverClose>
          </CardHeader>

          <CardContent className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed grid grid-cols-2 gap-y-3 items-center">
            <Label htmlFor="width">Width</Label>
            <Input id="width" value={settings.width} onChange={handleChange} className="py-1" />

            <Label htmlFor="maxWidth">Max. Width</Label>
            <Input id="maxWidth" value={settings.maxWidth} onChange={handleChange} className="py-1" />

            <Label htmlFor="height">Height</Label>
            <Input id="height" value={settings.height} onChange={handleChange} className="py-1" />

            <Label htmlFor="borderRadius">Border Radius</Label>
            <Input id="borderRadius" value={settings.borderRadius} onChange={handleChange} className="py-1" />
          </CardContent>

          <CardFooter className="flex justify-center gap-2 pt-3">
            <Button variant="outline" className="text-sm whitespace-nowrap flex-1" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="primary" className="text-sm whitespace-nowrap flex-1" onClick={handleSave}>
              Save Settings
            </Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
};`;

export const simpleTopPopoverCode = `"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose
} from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { X } from "lucide-react";

export function SimpleTopPopover () {
  const [settings, setSettings] = useState({
    width: "100%",
    maxWidth: "300px",
    height: "180px",
    borderRadius: "sm",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.id]: e.target.value });
  };

  const handleReset = () => {
    setSettings({
      width: "100%",
      maxWidth: "300px",
      height: "180px",
      borderRadius: "sm",
    });
  };

  const handleSave = () => {
    console.log("Settings Saved:", settings);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Open Settings</Button>
      </PopoverTrigger>

      <PopoverContent side="top">
        <Card className="rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900 shadow-lg">
          <CardHeader className="relative flex items-center justify-between pb-2">
            <div className="flex flex-col items-start gap-1">
              <CardTitle className="text-lg font-semibold">Dimensions</CardTitle>
              <CardDescription className="text-sm text-neutral-500 dark:text-neutral-400">
                Set your dimensions here
              </CardDescription>
            </div>
            <PopoverClose className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition">
              <X className="size-5" />
            </PopoverClose>
          </CardHeader>

          <CardContent className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed grid grid-cols-2 gap-y-3 items-center">
            <Label htmlFor="width">Width</Label>
            <Input id="width" value={settings.width} onChange={handleChange} className="py-1" />

            <Label htmlFor="maxWidth">Max. Width</Label>
            <Input id="maxWidth" value={settings.maxWidth} onChange={handleChange} className="py-1" />

            <Label htmlFor="height">Height</Label>
            <Input id="height" value={settings.height} onChange={handleChange} className="py-1" />

            <Label htmlFor="borderRadius">Border Radius</Label>
            <Input id="borderRadius" value={settings.borderRadius} onChange={handleChange} className="py-1" />
          </CardContent>

          <CardFooter className="flex justify-center gap-2 pt-3">
            <Button variant="outline" className="text-sm whitespace-nowrap flex-1" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="primary" className="text-sm whitespace-nowrap flex-1" onClick={handleSave}>
              Save Settings
            </Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
};`;

export const profileCardPopoverCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { User, X } from "lucide-react";

export function ProfileCardPopover() {
  return (
    <Popover>
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
    </Popover>
  );
}`;

export const menuPopoverCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Separator } from "@/components/ui/Separator";
import { ChartArea, ChevronDown, ChevronUp, Facebook, Github, HelpCircle, LogOut, Settings, User, X } from "lucide-react";

export function MenuPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" rightIcon={
          <div className="flex flex-col">
            <ChevronUp size={20} />
            <ChevronDown size={20} className="-mt-2" />
          </div>
        }>
          <div className="flex flex-col items-start">
            John Doe
            <span className="text-xs text-neutral-600">johndoe@mail.com</span>
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-44 bg-neutral-950">
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <User className="size-4" />
          Profile
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <ChartArea className="size-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <Settings className="size-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <HelpCircle className="size-4" />
          Support
        </Button>

        <Separator orientation="horizontal" className="my-1" />

        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <Github className="size-4" />
          Github
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <Facebook className="size-4" />
          Facebook
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <HelpCircle className="size-4" />
          Support
        </Button>

        <Separator orientation="horizontal" className="my-1" />

        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <LogOut className="size-4" />
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}`;