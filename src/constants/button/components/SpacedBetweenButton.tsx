import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function SpacedBetweenButton() {
  return (
    <Button
      className="w-full justify-between"
      variant="primary"
      rightIcon={<ArrowRight className="size-4" />}
    >
      Full width
    </Button>
  );
}