import { Checkbox, CheckboxRoot, CheckboxLabel, CheckboxDescription } from "@/components/ui/Checkbox";
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
}
