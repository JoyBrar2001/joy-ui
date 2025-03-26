import { Button } from "@/components/ui/Button";
import { ArrowRight, Search } from "lucide-react";

export function PrimaryButtonWithBothIcons() {
  return (
    <Button
      variant="primary"
      leftIcon={<Search className="size-4" />}
      rightIcon={<ArrowRight className="size-4" />}
    >
      Search
    </Button>
  );
}