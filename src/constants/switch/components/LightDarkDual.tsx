import { Label } from "@/components/ui/Label";
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
}