import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";
import { Cpu, Moon, Sun } from "lucide-react";

export function SelectWithIcons() {
  return (
    <Select defaultValue="light">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="light">
            <span className="flex items-center gap-2">
              <Sun size={16} /> Light
            </span>
          </SelectItem>
          <SelectItem value="dark">
            <span className="flex items-center gap-2">
              <Moon size={16} /> Dark
            </span>
          </SelectItem>
          <SelectItem value="system">
            <span className="flex items-center gap-2">
              <Cpu size={16} /> System
            </span>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}