
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
}
