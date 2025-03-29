import { Separator } from "@/components/ui/Separator";

export function HorizontalSeparator() {
  return (
    <div className="flex flex-col">
      <p className="px-4">Option 1</p>
      <Separator orientation="horizontal" className="my-1.5" />
      <p className="px-4">Option 2</p>
    </div>
  );
}