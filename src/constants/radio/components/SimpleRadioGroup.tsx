import { Label } from "@/components/ui/Label";
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
}