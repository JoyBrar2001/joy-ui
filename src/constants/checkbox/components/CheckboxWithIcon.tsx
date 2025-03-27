import { Button } from "@/components/ui/Button";
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
}
