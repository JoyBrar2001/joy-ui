import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FullWidthButton() {
  return (
    <Button
      className="w-full"
      variant="primary"
      rightIcon={<ArrowRight className="size-4" />}
    >
      Full width
    </Button>
  );
}