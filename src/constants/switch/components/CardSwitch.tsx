
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
}
