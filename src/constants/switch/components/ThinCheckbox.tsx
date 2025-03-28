import { Switch, SwitchThumb } from "@/components/ui/Switch";

export function ThinCheckbox() {
  return (
    <Switch className="h-2">
      <SwitchThumb className="-translate-x-0.5 -translate-y-[6px] border-[1px] border-neutral-600 data-[state=checked]:translate-x-[22px]" />
    </Switch>
  );
} 