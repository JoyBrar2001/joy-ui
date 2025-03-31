import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectDisabled() {
  return (
    <Select disabled>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2" animate={false}>
        <SelectViewport className="py-0">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}