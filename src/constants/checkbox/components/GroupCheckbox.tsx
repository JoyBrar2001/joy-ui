import { Checkbox, CheckboxRoot, CheckboxLabel } from "@/components/ui/Checkbox";

export function GroupCheckbox() {
  return (
    <div className="flex gap-4">
      <CheckboxRoot>
        <Checkbox id="l1" size="sm" animate />
        <CheckboxLabel htmlFor="l1">
          iPhone
        </CheckboxLabel>
      </CheckboxRoot>
      <CheckboxRoot>
        <Checkbox id="l2" size="sm" animate />
        <CheckboxLabel htmlFor="l2">
          Android
        </CheckboxLabel>
      </CheckboxRoot>
      <CheckboxRoot>
        <Checkbox id="l3" size="sm" animate />
        <CheckboxLabel htmlFor="l3">
          Other
        </CheckboxLabel>
      </CheckboxRoot>
    </div>
  );
}
