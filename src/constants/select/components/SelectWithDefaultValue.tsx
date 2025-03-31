import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectWithDefaultValue() {
  return (
    <Select defaultValue="light">
      <SelectTrigger className="w-[200px]">
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