import { Checkbox, CheckboxLabel, CheckboxRoot } from "@/components/ui/Checkbox";

export function ColoredCheckbox() {
  return (
    <CheckboxRoot className="items-start">
      <Checkbox
        id="terms4"
        size="sm"
        animate
        defaultChecked
        className="data-[state=checked]:bg-green-500 text-neutral-950"
      />
      <CheckboxLabel htmlFor="terms4">
        Accept Terms and Conditions
      </CheckboxLabel>
    </CheckboxRoot>
  );
}
