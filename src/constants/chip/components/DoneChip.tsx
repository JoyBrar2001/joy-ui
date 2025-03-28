import { Chip } from "@/components/ui/Chip";
import { Check } from "lucide-react";

export function DoneChip() {
  return (
    <Chip variant="outline">
      Task Done
      <Check size={16} />
    </Chip>
  );
}