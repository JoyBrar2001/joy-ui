import { Separator } from "@/components/ui/Separator";

export function ButtonsWithSeparator() {
  return (
    <div className="flex items-center space-x-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      <Separator orientation="vertical" className="h-5 w-[2px] bg-neutral-600" />
      <button className="px-4 py-2 bg-gray-700 text-white rounded">Cancel</button>
    </div>
  );
}