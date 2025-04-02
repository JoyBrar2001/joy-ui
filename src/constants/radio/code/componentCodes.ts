export const simpleRadioGroupCode = `import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function SimpleRadioGroup() {
  return (
    <form>
      <RadioGroup defaultValue="checked">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="unchecked" id="r1" />
          <Label htmlFor="r1">Unchecked</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="checked" id="r2" />
          <Label htmlFor="r2">Checked</Label>
        </div>
      </RadioGroup>
    </form>
  );
}`;

export const verticalRadioGroupCode = `import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function VerticalRadioGroup() {
  return (
    <form>
      <RadioGroup defaultValue="checked" className="flex flex-col">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="unchecked" id="rv1" />
          <Label htmlFor="rv1">Unchecked</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="checked" id="rv2" />
          <Label htmlFor="rv2">Checked</Label>
        </div>
      </RadioGroup>
    </form>
  );
}`;

export const radioGroupSizesCode = `import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function RadioGroupSizes() {
  return (
    <form>
      <RadioGroup defaultValue="checked">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="small" id="rs1" size="sm" />
          <Label htmlFor="rs1">Small</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="medium" id="rs2" size="md" />
          <Label htmlFor="rs2">Medium</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="large" id="rs3" size="lg" />
          <Label htmlFor="rs3">Large</Label>
        </div>
      </RadioGroup>
    </form>
  );
}`;

export const animatedRadioGroupCode = `import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function AnimatedRadioGroup() {
  return (
    <form>
      <RadioGroup defaultValue="checked">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="unchecked" id="r3" animate />
          <Label htmlFor="r3">Unchecked</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="checked" id="r4" animate />
          <Label htmlFor="r4">Checked</Label>
        </div>
      </RadioGroup>
    </form>
  );
}`;

export const customIconsCode = `import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Check, X } from "lucide-react";

export function CustomIcons() {
  return (
    <form>
      <RadioGroup defaultValue="checked">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="unchecked" id="r5" icon={X} />
          <Label htmlFor="r5">Unchecked</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="checked" id="r6" icon={Check} />
          <Label htmlFor="r6">Checked</Label>
        </div>
      </RadioGroup>
    </form>
  );
}`;

export const radioWithSublabels = `import { Label } from "@/components/ui/Label";
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
}`;

export const radioWithDescriptionCode = `import { Label } from "@/components/ui/Label";
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
}`;

export const radioWithCardsCode = `import { Card, CardContent } from "@/components/ui/Card";
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
}`;

export const radioWithCardsAndIconsCode = `import { Card, CardContent } from "@/components/ui/Card";
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
}`;

export const plansPickerCode = `import { Card, CardContent } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function PlansPicker() {
  return (
    <form className="w-full">
      <RadioGroup defaultValue="basic" className="mt-4">
        <div className="flex flex-col w-full">
          <Label>
            <span>
              <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none rounded-t-lg">
                <CardContent className="w-full flex justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="basic" id="rc7" />
                    <span>Basic</span>
                  </div>
                  <p className="text-sm text-neutral-400">$10/mo</p>
                </CardContent>
              </Card>
            </span>
          </Label>

          <Label>
            <span>
              <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none">
                <CardContent className="w-full flex justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="advanced" id="rc8" />
                    <div className="flex items-center gap-2">
                      <span>Advanced</span>
                      <Chip rounded className="text-xs">Popular</Chip>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-400">$15/mo</p>
                </CardContent>
              </Card>
            </span>
          </Label>

          <Label>
            <span>
              <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none">
                <CardContent className="w-full flex justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="team" id="rc9" />
                    <span>Teams</span>
                  </div>
                  <p className="text-sm text-neutral-400">$8/mo/plan</p>
                </CardContent>
              </Card>
            </span>
          </Label>

          <Label>
            <span>
              <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none rounded-b-lg">
                <CardContent className="w-full flex justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="enterprise" id="rc10" />
                    <span>Enterprise</span>
                  </div>
                  <p className="text-sm text-neutral-400">Custom</p>
                </CardContent>
              </Card>
            </span>
          </Label>
        </div>
      </RadioGroup>
    </form>
  );
}
`;