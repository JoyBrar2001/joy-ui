import { Label } from "@/components/ui/Label";
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
}