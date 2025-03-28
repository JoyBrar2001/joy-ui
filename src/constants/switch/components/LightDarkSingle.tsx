import { Label } from "@/components/ui/Label";
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
}