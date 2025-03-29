import { Label } from "@/components/ui/Label";
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
}