import { Label } from "@/components/ui/Label";
import { Switch, SwitchThumb } from "@/components/ui/Switch";

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
}