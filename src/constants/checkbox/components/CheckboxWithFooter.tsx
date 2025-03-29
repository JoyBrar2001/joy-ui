import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxSubLabel } from "@/components/ui/Checkbox";

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
}
