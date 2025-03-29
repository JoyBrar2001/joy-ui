import { Separator } from "@/components/ui/Separator";

export function VerticalSeparator() {
  return (
    <div className="flex">
      <p className="py-2">Option 1</p>
      <Separator orientation="vertical" className="mx-3" />
      <p className="py-2">Option 2</p>
    </div>
  );
}