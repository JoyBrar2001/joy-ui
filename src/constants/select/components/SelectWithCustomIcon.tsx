import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";
import { Minus, Plus } from "lucide-react";

export function SelectWithCustomIcon() {
  return (
    <Select defaultValue="light">
      <SelectTrigger
        className="w-[200px]"
        icon={<div className="relative size-6">
          <Plus size={20} className="absolute top-1/2 left-1/2 -translate-1/2 transition-transform duration-150 group-data-[state=open]:scale-0 group-data-[state=closed]:scale-100" />
          <Minus size={20} className="absolute top-1/2 left-1/2 -translate-1/2 transition-transform duration-150 group-data-[state=closed]:scale-0 group-data-[state=open]:scale-100" />
        </div>}
      >
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}