import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxSubLabel } from "@/components/ui/Checkbox";

export function SubLabeledCheckbox() {
  return (
    <CheckboxRoot>
      <Checkbox id="terms2" size="sm" animate />
      <CheckboxLabel htmlFor="terms2">
        Enable Notifications
        <CheckboxSubLabel>(Receive updates and alerts)</CheckboxSubLabel>
      </CheckboxLabel>
    </CheckboxRoot>
  );
}
