export const buttonsWithSeparator = `import { Separator } from "@/components/ui/Separator";

export function ButtonsWithSeparator() {
  return (
    <div className="flex items-center space-x-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      <Separator orientation="vertical" className="h-5 w-[2px] bg-neutral-600" />
      <button className="px-4 py-2 bg-gray-700 text-white rounded">Cancel</button>
    </div>
  );
}`;

export const cardWithSeparatorCode = `import { Card, CardContent } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";

export function CardWithSeparator() {
  return (
    <Card className="w-full p-4">
      <CardContent>
        <p className="text-sm">This is a card with a separator.</p>
        <Separator orientation="horizontal" className="my-2" />
        <p className="text-sm">Separated content.</p>
      </CardContent>
    </Card>
  );
}`;

export const gridWithSeparatorCode = `import { Separator } from "@/components/ui/Separator";

export function GridSeparator() {
  return (
    <section className="flex flex-col items-center text-white px-6">
      <div className="pb-2">
        <h2 className="text-lg font-semibold">JOY UI</h2>
        <p className="text-sm text-neutral-400">Select from a wide range of UI components</p>
      </div>

      <Separator orientation="horizontal" className="w-full bg-neutral-700" />

      <div className="w-full flex justify-center items-center gap-6 py-2">
        <p className="text-sm font-medium hover:text-blue-400 cursor-pointer">Alerts</p>
        <Separator orientation="vertical" className="h-6 w-[1px] bg-neutral-600" />
        <p className="text-sm font-medium hover:text-blue-400 cursor-pointer">Chips</p>
        <Separator orientation="vertical" className="h-6 w-[1px] bg-neutral-600" />
        <p className="text-sm font-medium hover:text-blue-400 cursor-pointer">Inputs</p>
      </div>
    </section>
  );
}`;

export const horizontalSeparatorCode = `import { Separator } from "@/components/ui/Separator";

export function HorizontalSeparator() {
  return (
    <div className="flex flex-col">
      <p className="px-4">Option 1</p>
      <Separator orientation="horizontal" className="my-1.5" />
      <p className="px-4">Option 2</p>
    </div>
  );
}`;

export const verticalSeparatorCode = `import { Separator } from "@/components/ui/Separator";

export function VerticalSeparator() {
  return (
    <div className="flex">
      <p className="py-2">Option 1</p>
      <Separator orientation="vertical" className="mx-3" />
      <p className="py-2">Option 2</p>
    </div>
  );
}`;