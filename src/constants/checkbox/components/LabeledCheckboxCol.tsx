import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxSubLabel } from "@/components/ui/Checkbox";

export function LabeledCheckboxCol() {
  return (
    <div className="flex flex-col gap-4">
      <CheckboxRoot>
        <Checkbox id="l4" size="sm" animate />
        <CheckboxLabel htmlFor="l4">
          iPhone
        </CheckboxLabel>
      </CheckboxRoot>
      <CheckboxRoot>
        <Checkbox id="l5" size="sm" animate />
        <CheckboxLabel htmlFor="l5">
          Android
        </CheckboxLabel>
      </CheckboxRoot>
      <CheckboxRoot>
        <Checkbox id="termsl6" size="sm" animate />
        <CheckboxLabel htmlFor="termsl6">
          Other
          <CheckboxSubLabel>
            (like Blackberry, Nokia, Windows, etc...)
          </CheckboxSubLabel>
        </CheckboxLabel>
      </CheckboxRoot>
    </div>
  );
}
