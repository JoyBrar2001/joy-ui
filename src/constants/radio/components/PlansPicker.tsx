import { Card, CardContent } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function PlansPicker() {
  return (
    <form className="w-full">
      <RadioGroup defaultValue="basic" className="mt-4">
        <div className="flex flex-col w-full">
          <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none rounded-t-lg">
            <CardContent className="w-full flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="basic" id="rc7" />
                <div className="flex items-center gap-2">
                  <Label htmlFor="rc7">Basic</Label>
                </div>
              </div>

              <p className="text-sm text-neutral-400">$10/mo</p>
            </CardContent>
          </Card>
          <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none">
            <CardContent className="w-full flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="advanced" id="rc8" />
                <div className="flex items-center gap-2">
                  <Label htmlFor="rc8">Advanced</Label>
                  <Chip rounded className="text-xs">Popular</Chip>
                </div>
              </div>

              <p className="text-sm text-neutral-400">$15/mo</p>
            </CardContent>
          </Card>
          <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none">
            <CardContent className="w-full flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="team" id="rc9" />
                <div className="flex items-center gap-2">
                  <Label htmlFor="rc9">Teams</Label>
                </div>
              </div>

              <p className="text-sm text-neutral-400">$8/mo/plan</p>
            </CardContent>
          </Card>
          <Card className="flex items-center space-x-2 p-3 has-data-[state=checked]:border-white has-data-[state=checked]:bg-neutral-900 rounded-none rounded-b-lg">
            <CardContent className="w-full flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="enterprise" id="rc10" />
                <div className="flex items-center gap-2">
                  <Label htmlFor="rc10">Enterprise</Label>
                </div>
              </div>

              <p className="text-sm text-neutral-400">Custom</p>
            </CardContent>
          </Card>
        </div>
      </RadioGroup>
    </form>
  );
}