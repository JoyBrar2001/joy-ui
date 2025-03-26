import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function PrimaryButtonWithRightIcon() {
  return (
    <Button variant="primary" rightIcon={<ArrowRight className="size-4" />}>
      Next
    </Button>
  );
}