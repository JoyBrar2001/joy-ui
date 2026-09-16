"use client";

import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Switch } from "@/components/ui/Switch";

export function BasicLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="basic-label-input">Email address</Label>
      <Input id="basic-label-input" placeholder="you@example.com" />
    </div>
  );
}
export function RequiredLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="required-label-input">
        Workspace name{" "}
        <span className="text-red-500" aria-hidden="true">
          *
        </span>
        <span className="sr-only">required</span>
      </Label>
      <Input id="required-label-input" placeholder="Joy UI" required />
    </div>
  );
}
export function LabelWithDescription() {
  return (
    <div className="w-full max-w-sm">
      <Label htmlFor="described-label-input">Display name</Label>
      <Input
        id="described-label-input"
        className="mt-2"
        aria-describedby="display-name-help"
        placeholder="Joy Brar"
      />
      <p id="display-name-help" className="mt-2 text-xs text-neutral-500">
        This is shown on your public profile.
      </p>
    </div>
  );
}
export function LabelForCheckbox() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="label-checkbox" />
      <Label htmlFor="label-checkbox">Send me product updates</Label>
    </div>
  );
}
export function LabelForSwitch() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="label-switch" />
      <Label htmlFor="label-switch">Enable notifications</Label>
    </div>
  );
}
export function DisabledLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="disabled-label-input" className="text-neutral-400">
        Disabled field
      </Label>
      <Input id="disabled-label-input" disabled placeholder="Unavailable" />
    </div>
  );
}
