export const cardSwitchCode = `
import { Card, CardContent } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";

export function CardSwitch() {
  return (
    <Label htmlFor="card1" className="text-base">
      <Card className="w-full">
        <CardContent>
          <div className="w-full flex flex-row-reverse justify-between">
            <Switch className="h-5 w-8" id="card1">
              <SwitchThumb className="size-4 data-[state=checked]:translate-x-[14px]" />
            </Switch>
            <div className="flex items-baseline">
              Label
              <span className="ml-1 text-sm text-neutral-600">
                (Sublabel)
              </span>
            </div>
          </div>
          <p className="text-sm text-neutral-600">
            (This is some description for the checkbox)
          </p>
        </CardContent>
      </Card>
    </Label>
  );
}`;

export const cardSwitchWithIconCode = `
import { Card, CardContent } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";
import { Cloud, CloudLightning } from "lucide-react";

export function CardSwitchWithIcon() {
  return (
    <Label htmlFor="card2" className="text-base">
      <Card className="w-full">
        <CardContent className="flex items-center gap-2">
          <div className="border-[1px] border-neutral-600 rounded p-1.5">
            <Cloud />
          </div>
          <div>
            <div className="w-full flex flex-row-reverse justify-between">
              <Switch className="h-5 w-8" id="card2">
                <SwitchThumb className="size-4 data-[state=checked]:translate-x-[14px]" />
              </Switch>
              <div className="flex items-baseline">
                Label
                <span className="ml-1 text-sm text-neutral-600">
                  (Sublabel)
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-600">
              (This is some description for the checkbox)
            </p>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
}`;

export const customStyledSwitchCode = `import { Switch } from "@/components/ui/Switch";

export function CustomStyledSwitch() {
  return <Switch defaultChecked className="data-[state=checked]:bg-sky-500" />
}`;

export const defaultCheckedSwitchCode = `import { Switch } from "@/components/ui/Switch";

export function DefaultCheckedSwitch() {
  return <Switch defaultChecked />
}`;

export const dynamicLabelSwitchCode = `import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";

export function DynamicLabelSwitch() {
  return (
    <div className="flex items-center group">
      <Label
        className="transition pr-4 text-sm leading-none text-neutral-600 group-has-data-[state=checked]:text-white"
        htmlFor="airplane-mode-2"
      >
        Airplane mode
      </Label>
      <Switch id="airplane-mode-2">
        <SwitchThumb />
      </Switch>
    </div>
  );
}`;

export const labeledSwitchCode = `import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";

export function LabeledSwitch() {
  return (
    <div className="flex items-center">
      <Label
        className="pr-[15px] text-[15px] leading-none text-white"
        htmlFor="airplane-mode-1"
      >
        Airplane mode
      </Label>
      <Switch id="airplane-mode-1">
        <SwitchThumb />
      </Switch>
    </div>
  );
}`;

export const lightDarkDualCode = `import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";
import { Moon, Sun } from "lucide-react";

export function LightDarkDual() {
  return (
    <div className="flex items-center gap-2 group">
      <Label
        className="transition text-white group-has-data-[state=checked]:text-neutral-600"
        htmlFor="light-dark-2"
      >
        <Moon size={20} />
      </Label>
      <Switch id="light-dark-2">
        <SwitchThumb />
      </Switch>
      <Label
        className="transition text-neutral-600 group-has-data-[state=checked]:text-white"
        htmlFor="light-dark-2"
      >
        <Sun size={20} />
      </Label>
    </div>
  );
}`;

export const lightDarkSingleCode = `import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";
import { Moon, Sun } from "lucide-react";

export function LightDarkSimple() {
  return (
    <div className="flex items-center gap-2 group">
      <Switch id="light-dark-1">
        <SwitchThumb />
      </Switch>
      <Label
        className="text-white hidden group-has-data-[state=checked]:block"
        htmlFor="light-dark-1"
      >
        <Sun size={20} />
      </Label>
      <Label
        className="text-white block group-has-data-[state=checked]:hidden"
        htmlFor="light-dark-1"
      >
        <Moon size={20} />
      </Label>
    </div>
  );
}`;

export const onOffDualCode = `import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";
import { Moon, Sun } from "lucide-react";

export function OnOffDual() {
  return (
    <div className="flex items-center gap-2 group">
      <Label
        className="transition text-white group-has-data-[state=checked]:text-neutral-600"
        htmlFor="on-off-2"
      >
        Off
      </Label>
      <Switch id="on-off-2">
        <SwitchThumb />
      </Switch>
      <Label
        className="transition text-neutral-600 group-has-data-[state=checked]:text-white"
        htmlFor="on-off-2"
      >
        On
      </Label>
    </div>
  );
}`;

export const onOffSingleCode = `import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";
import { Moon, Sun } from "lucide-react";

export function OnOffSingle() {
  return (
    <div className="flex items-center gap-2 group">
      <Switch id="on-off-1">
        <SwitchThumb />
      </Switch>
      <Label
        className="text-white hidden group-has-data-[state=checked]:block"
        htmlFor="on-off-1"
      >
        On
      </Label>
      <Label
        className="text-white block group-has-data-[state=checked]:hidden"
        htmlFor="on-off-1"
      >
        Off
      </Label>
    </div>
  );
}`;

export const simpleSwitchCode = `import { Switch } from "@/components/ui/Switch";

export function SimpleSwitch() {
  return <Switch />
}`;

export const squareSwitchCode = `import { Switch, SwitchThumb } from "@/components/ui/Switch";

export function SquareSwitch() {
  return (
    <Switch className="rounded">
      <SwitchThumb className="rounded-sm" />
    </Switch>
  );
}`;

export const switchSmallCode = `import { Switch, SwitchThumb } from "@/components/ui/Switch";

export function SwitchSmall(){
  return (
    <Switch className="h-5 w-8">
      <SwitchThumb className="size-4 data-[state=checked]:translate-x-[14px]" />
    </Switch>
  );
}`;

export const thinSwitchCode = `import { Switch, SwitchThumb } from "@/components/ui/Switch";

export function ThinSwitch() {
  return (
    <Switch className="h-2">
      <SwitchThumb className="-translate-x-0.5 -translate-y-[6px] border-[1px] border-neutral-600 data-[state=checked]:translate-x-[22px]" />
    </Switch>
  );
}`;