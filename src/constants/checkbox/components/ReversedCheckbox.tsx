import { Checkbox, CheckboxRoot, CheckboxLabel } from "@/components/ui/Checkbox";

export function ReversedCheckbox() {
  return (
    <CheckboxRoot className="w-full flex flex-row-reverse justify-between pr-2">
      <Checkbox
        id="terms6"
        size="sm"
        animate
        defaultChecked
      />
      <CheckboxLabel htmlFor="terms6">
        Accept Terms and Conditions
      </CheckboxLabel>
    </CheckboxRoot>
  );
}
