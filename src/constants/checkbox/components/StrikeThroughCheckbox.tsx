import { Checkbox, CheckboxRoot, CheckboxLabel } from "@/components/ui/Checkbox";

export function StrikeThroughCheckbox() {
  return (
    <CheckboxRoot>
      <Checkbox
        id="terms5"
        size="sm"
        animate
        className="peer"
        defaultChecked
      />
      <CheckboxLabel htmlFor="terms5" className="peer-data-[state=checked]:line-through">
        Accept Terms and Conditions
      </CheckboxLabel>
    </CheckboxRoot>
  );
}
