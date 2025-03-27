export const animatedCheckboxCode = `import { Checkbox } from "@/components/ui/Checkbox";

export function AnimateCheckbox() {
  return <Checkbox size="sm" animate />;
}`;

export const cardGridsCode = `import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxDescription } from "@/components/ui/Checkbox";
import { Card, CardContent } from "@/components/ui/Card";
import { FilmIcon, MoonIcon, BellIcon, SaveIcon } from "lucide-react";

export function CardsGrid() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Card className="w-full">
        <CardContent className="flex flex-col gap-2">
          <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
            <Checkbox id="grid1" size="sm" animate />
            <CheckboxLabel htmlFor="grid1" className="flex items-center gap-2">
              <FilmIcon size={16} />
              Enable Editing
            </CheckboxLabel>
          </CheckboxRoot>
          <CheckboxDescription>
            (Allow modifications)
          </CheckboxDescription>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="flex flex-col gap-2">
          <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
            <Checkbox id="grid2" size="sm" animate />
            <CheckboxLabel htmlFor="grid2" className="flex items-center gap-2">
              <MoonIcon size={16} />
              Dark Mode
            </CheckboxLabel>
          </CheckboxRoot>
          <CheckboxDescription>
            (Reduce eye strain)
          </CheckboxDescription>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="flex flex-col gap-2">
          <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
            <Checkbox id="grid3" size="sm" animate />
            <CheckboxLabel htmlFor="grid3" className="flex items-center gap-2">
              <BellIcon size={16} />
              Notifications
            </CheckboxLabel>
          </CheckboxRoot>
          <CheckboxDescription>
            (Receive alerts)
          </CheckboxDescription>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardContent className="flex flex-col gap-2">
          <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
            <Checkbox id="grid4" size="sm" animate />
            <CheckboxLabel htmlFor="grid4" className="flex items-center gap-2">
              <SaveIcon size={16} />
              Auto-Save
            </CheckboxLabel>
          </CheckboxRoot>
          <CheckboxDescription>
            (Save changes automatically)
          </CheckboxDescription>
        </CardContent>
      </Card>
    </div>
  );
}`;

export const checkboxCardCode = `import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxSubLabel, CheckboxDescription } from "@/components/ui/Checkbox";
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
}`;

export const checkboxDescriptionCode = `import { Checkbox, CheckboxRoot, CheckboxDescription, CheckboxLabel, CheckboxSubLabel } from "@/components/ui/Checkbox";

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
}`;

export const checkboxWithFooterCode = `import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxDescription, CheckboxSubLabel } from "@/components/ui/Checkbox";

export function CheckboxWithFooter() {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col gap-2">
        <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
          <Checkbox id="card3" size="sm" animate />
          <CheckboxLabel htmlFor="card3">
            Enable Notifications
            <CheckboxSubLabel>(Receive email updates)</CheckboxSubLabel>
          </CheckboxLabel>
        </CheckboxRoot>
        <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
          <Checkbox id="card4" size="sm" animate />
          <CheckboxLabel htmlFor="card4">
            Newletter
            <CheckboxSubLabel>(Subscribe to newsletter)</CheckboxSubLabel>
          </CheckboxLabel>
        </CheckboxRoot>
        <CheckboxRoot className="w-full flex flex-row-reverse justify-between">
          <Checkbox id="card5" size="sm" animate />
          <CheckboxLabel htmlFor="card5">
            Promotional Updates
          </CheckboxLabel>
        </CheckboxRoot>
      </CardContent>
      <CardFooter className="flex justify-end p-4">
        <Button variant="outline">
          Save Settings
        </Button>
      </CardFooter>
    </Card>
  );
}`;

export const checkboxWithIconCode = `import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxSubLabel, CheckboxDescription } from "@/components/ui/Checkbox";
import { StarIcon } from "lucide-react";

export function CheckboxWithIcon() {
  return (
    <Card className="w-full">
      <CardContent>
        <CheckboxRoot className="w-full flex flex-row-reverse justify-between items-center">
          <Checkbox id="card2" size="md" animate />
          <div className="flex gap-2">
            <Button variant="outline" className="p-2">
              <StarIcon size={16} />
            </Button>

            <div className="flex flex-col">
              <CheckboxLabel htmlFor="card2" className="flex items-center gap-2">
                Starred Item
                <CheckboxSubLabel>(Mark as favorite)</CheckboxSubLabel>
              </CheckboxLabel>
              <CheckboxDescription className="mt-1">
                (This item will be added to your starred list)
              </CheckboxDescription>
            </div>
          </div>
        </CheckboxRoot>
      </CardContent>
    </Card >
  );
}`;

export const coloredCheckboxCode = `import { Checkbox, CheckboxLabel, CheckboxRoot } from "@/components/ui/Checkbox";

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
}`;

export const defaultCheckedCheckboxCode = `import { Checkbox } from "@/components/ui/Checkbox";

export function DefaultCheckedCheckbox() {
  return <Checkbox size="sm" defaultChecked />;
}`;

export const groupCheckboxCode = `import { Checkbox, CheckboxRoot, CheckboxLabel } from "@/components/ui/Checkbox";

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
}`;

export const labeledCheckboxCode = `import { Checkbox, CheckboxRoot, CheckboxLabel } from "@/components/ui/Checkbox";

export function LabeledCheckbox() {
  return (
    <CheckboxRoot>
      <Checkbox id="terms1" size="sm" animate />
      <CheckboxLabel htmlFor="terms1">Accept Terms and Conditions</CheckboxLabel>
    </CheckboxRoot>
  );
}`;

export const labeledCheckboxColCode = `import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxSubLabel } from "@/components/ui/Checkbox";

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
}`;

export const reversedCheckboxCode = `import { Checkbox, CheckboxRoot, CheckboxLabel } from "@/components/ui/Checkbox";

export function ReversedCheckbox() {
  return (
    <CheckboxRoot className="w-full flex flex-row-reverse justify-between pr-2">
      <Checkbox
        id="terms6"
        size="sm"
        animate
        defaultChecked
      />
      <CheckboxLabel htmlFor="terms6" className="peer-data-[state=checked]:line-through">
        Accept Terms and Conditions
      </CheckboxLabel>
    </CheckboxRoot>
  );
}`;

export const simpleCheckboxCode = `import { Checkbox } from "@/components/ui/Checkbox";

export function SimpleCheckbox(){
  return <Checkbox size="sm" animate={false} />  
}`;

export const strikeThroughCheckboxCode = `import { Checkbox, CheckboxRoot, CheckboxLabel } from "@/components/ui/Checkbox";

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
}`;

export const subLabeledCheckboxCode = `import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxDescription, CheckboxSubLabel } from "@/components/ui/Checkbox";

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
}`;