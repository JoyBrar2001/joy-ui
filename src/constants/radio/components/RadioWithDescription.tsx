import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function RadioWithDescription() {
  return (
    <form>
      <RadioGroup defaultValue="performance" className="mt-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="battery" id="r10" />
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <Label htmlFor="r10">Battery Saver</Label>
                <p className="text-xs text-neutral-500">(Extends battery life)</p>
              </div>
              <p className="text-xs text-neutral-500">Minimizes extra apps usage and turns off background apps so as to conserve battery</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="balance" id="r11" />
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <Label htmlFor="r11">Balanced Mode</Label>
              </div>
              <p className="text-xs text-neutral-500">Uses a mix of performance and battery saving for longer sessions that require performance</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="performance" id="r12" />
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <Label htmlFor="r12">Performance Mode</Label>
                <p className="text-xs text-neutral-500">(Higher power usage)</p>
              </div>
              <p className="text-xs text-neutral-500">Maximizes the performance by extracting everything for your CPU, significantly reducing battery tho</p>
            </div>
          </div>
        </div>
      </RadioGroup>
    </form>
  );
}