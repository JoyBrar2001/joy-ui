import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function RightIconWithAnimation() {
  return (
    <Button
      variant="primary"
      className="hover:scale-105 active:scale-95"
      rightIcon={<ArrowRight className="size-4 group-hover:translate-x-1 transition" />}
    >
      Next
    </Button>
  );
}