import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function RadioWithSublabels() {
  return (
    <form>
      <RadioGroup defaultValue="performance" className="mt-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="battery" id="r7" />
            <div className="flex items-baseline gap-2">
              <Label htmlFor="r7">Battery Saver</Label>
              <p className="text-xs text-neutral-500">(Extends battery life)</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="balance" id="r8" />
            <div className="flex items-baseline gap-2">
              <Label htmlFor="r8">Balanced Mode</Label>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="performance" id="r9" />
            <div className="flex items-baseline gap-2">
              <Label htmlFor="r9">Performance Mode</Label>
              <p className="text-xs text-neutral-500">(Higher power usage)</p>
            </div>
          </div>
        </div>
      </RadioGroup>
    </form>
  );
}