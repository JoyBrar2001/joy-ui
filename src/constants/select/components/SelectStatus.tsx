import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectStatus() {
  return (
    <Select defaultValue="online">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="online">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500" /> Online
            </span>
          </SelectItem>
          <SelectItem value="away">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-amber-500" /> Away
            </span>
          </SelectItem>
          <SelectItem value="brb">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-yellow-500" /> Be Right Back
            </span>
          </SelectItem>
          <SelectItem value="dnd">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-red-500" /> Do not disturb
            </span>
          </SelectItem>
          <SelectItem value="offline">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-neutral-500" /> Offline
            </span>
          </SelectItem>
          <SelectItem value="leave">
            <span className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-purple-500" /> On Leave
            </span>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}