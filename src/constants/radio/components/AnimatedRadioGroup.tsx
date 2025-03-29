import { Label } from "@/components/ui/Label";
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
}