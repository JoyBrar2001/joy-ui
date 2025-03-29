import { Card, CardContent } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function RadioWithCards() {
  return (
    <form>
      <RadioGroup defaultValue="performance" className="mt-4">
        <div className="flex flex-col space-y-2">
          <Card className="flex items-center space-x-2">
            <CardContent className="flex gap-2">
              <RadioGroupItem value="battery" id="rc1" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <Label htmlFor="rc1">Battery Saver</Label>
                  <p className="text-xs text-neutral-500">(Extends battery life)</p>
                </div>
                <p className="text-xs text-neutral-500">Minimizes extra apps usage and turns off background apps so as to conserve battery</p>
              </div>
            </CardContent>
          </Card>
          <Card className="flex items-center space-x-2">
            <CardContent className="flex gap-2">
              <RadioGroupItem value="balance" id="rc2" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <Label htmlFor="rc2">Balanced Mode</Label>
                </div>
                <p className="text-xs text-neutral-500">Uses a mix of performance and battery saving for longer sessions that require performance</p>
              </div>
            </CardContent>
          </Card>
          <Card className="flex items-center space-x-2">
            <CardContent className="flex gap-2">
              <RadioGroupItem value="performance" id="rc3" />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <Label htmlFor="rc3">Performance Mode</Label>
                  <p className="text-xs text-neutral-500">(Higher power usage)</p>
                </div>
                <p className="text-xs text-neutral-500">Maximizes the performance by extracting everything for your CPU, significantly reducing battery tho</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </RadioGroup>
    </form>
  );
}