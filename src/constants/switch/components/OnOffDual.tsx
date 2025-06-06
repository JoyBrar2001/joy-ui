import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";

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
}