import { Label } from "@/components/ui/Label";
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
}