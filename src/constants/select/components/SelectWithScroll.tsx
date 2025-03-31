import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";
import { Separator } from "@/components/ui/Separator";

export function SelectWithScroll() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] h-[300px] py-2 overflow-y-auto">
        <SelectViewport className="py-0">
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>

          <Separator className="my-2" />

          <SelectGroup>
            <SelectLabel>Color</SelectLabel>
            <SelectItem value="neutral">Neutral</SelectItem>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
            <SelectItem value="cyan">Cyan</SelectItem>
            <SelectItem value="purple">Purple</SelectItem>
          </SelectGroup>

          <Separator className="my-2" />

          <SelectGroup>
            <SelectLabel>Mode</SelectLabel>
            <SelectItem value="compact">Compact</SelectItem>
            <SelectItem value="spacious">Spacious</SelectItem>
            <SelectItem value="minimal">Minimal</SelectItem>
            <SelectItem value="detailed">Detailed</SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}