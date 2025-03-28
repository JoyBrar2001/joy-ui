import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";

export function LabeledCheckbox() {
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
}