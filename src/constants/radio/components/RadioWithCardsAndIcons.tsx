import { Card, CardContent } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { BatteryMedium, Cpu } from "lucide-react";
import { FaBalanceScale } from "react-icons/fa";

export function RadioWithCardsAndIcons() {
  return (
    <form className="w-full">
      <RadioGroup defaultValue="performance" className="mt-4">
        <div className="flex flex-col space-y-2 w-full">
          <Label htmlFor="rc4">
            <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white">
              <CardContent className="w-full flex flex-row-reverse justify-between items-center gap-4">
                <RadioGroupItem value="battery" id="rc4" />
                <div className="flex items-center gap-2">
                  <BatteryMedium className="size-6" />
                  <span>Battery Saver</span>
                </div>
              </CardContent>
            </Card>
          </Label>

          <Label htmlFor="rc5">
            <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white">
              <CardContent className="w-full flex flex-row-reverse justify-between items-center gap-4">
                <RadioGroupItem value="balance" id="rc5" />
                <div className="flex items-center gap-2">
                  <FaBalanceScale className="size-6" />
                  <span>Balanced Mode</span>
                </div>
              </CardContent>
            </Card>
          </Label>

          <Label htmlFor="rc6">
            <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white">
              <CardContent className="w-full flex flex-row-reverse justify-between items-center gap-4">
                <RadioGroupItem value="performance" id="rc6" />
                <div className="flex items-center gap-2">
                  <Cpu className="size-6" />
                  <span>Performance Mode</span>
                </div>
              </CardContent>
            </Card>
          </Label>
        </div>
      </RadioGroup>
    </form>
  );
}