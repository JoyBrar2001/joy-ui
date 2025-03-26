import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";

export function PrimaryButtonWithLeftIcon() {
  return (
    <Button variant="primary" leftIcon={<Search className="size-4" />}>
      Search
    </Button>
  );
}