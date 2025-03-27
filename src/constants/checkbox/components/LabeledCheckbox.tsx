import { Checkbox, CheckboxRoot, CheckboxLabel } from "@/components/ui/Checkbox";

export function LabeledCheckbox() {
  return (
    <CheckboxRoot>
      <Checkbox id="terms1" size="sm" animate />
      <CheckboxLabel htmlFor="terms1">Accept Terms and Conditions</CheckboxLabel>
    </CheckboxRoot>
  );
}
