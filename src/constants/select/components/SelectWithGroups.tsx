import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectWithGroups() {
  return (
    <Select defaultValue="red">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>
          
          <SelectGroup className="mt-2">
            <SelectLabel>Color</SelectLabel>
            <SelectItem value="neutral">Neutral</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="cyan">Cyan</SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}