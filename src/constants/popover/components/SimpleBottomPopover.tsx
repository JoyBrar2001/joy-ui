"use client";

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
};
