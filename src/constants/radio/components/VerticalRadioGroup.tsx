import { Label } from "@/components/ui/Label";
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
}