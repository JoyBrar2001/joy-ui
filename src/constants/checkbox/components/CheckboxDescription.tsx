import { Checkbox, CheckboxRoot, CheckboxDescription, CheckboxLabel, CheckboxSubLabel } from "@/components/ui/Checkbox";

export function CheckboxDescriptionComponent() {
  return (
    <CheckboxRoot className="items-start">
      <Checkbox id="terms3" size="sm" animate />
      <div className="flex flex-col gap-1">
        <CheckboxLabel htmlFor="terms3">
          Accept Terms and Conditions
          <CheckboxSubLabel>
            (Required)
          </CheckboxSubLabel>
        </CheckboxLabel>
        <CheckboxDescription>
          Please go through the terms and conditions throughly before accepting them.
        </CheckboxDescription>
      </div>
    </CheckboxRoot>
  );
}
