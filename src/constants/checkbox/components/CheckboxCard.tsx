import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxSubLabel, CheckboxDescription } from "@/components/ui/Checkbox";
import { Card, CardContent } from "@/components/ui/Card";

export function CheckboxCard() {
  return (
    <Card className="w-full">
      <CardContent>
        <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
          <Checkbox
            id="card1"
            size="sm"
            animate
            defaultChecked
          />
          <CheckboxLabel htmlFor="card1">
            Label
            <CheckboxSubLabel>
              (Sublabel)
            </CheckboxSubLabel>
          </CheckboxLabel>
        </CheckboxRoot>
        <CheckboxDescription className="mt-1">
          (This is some description for the checkbox)
        </CheckboxDescription>
      </CardContent>
    </Card >
  );
}
