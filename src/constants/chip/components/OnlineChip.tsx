import { Chip } from "@/components/ui/Chip";

export function OnlineChip() {
  return (
    <Chip rounded variant="outline">
      <div className="size-2 bg-green-500 rounded-full" />
      Online
    </Chip>
  );
}