import { Separator } from "@/components/ui/Separator";

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
}