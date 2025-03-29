import { ScrollArea } from "@/components/ui/ScrollArea";

export function HorizontalScrollArea() {
  return (
    <ScrollArea>
      <h3 className="text-sm font-semibold text-neutral-300 bg-neutral-900/80 backdrop-blur-md sticky top-0 left-0 py-2 px-5">
        Scrollable Tags
      </h3>

      <div className="whitespace-nowrap px-5 py-3">
        <div className="flex gap-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-center items-center min-h-[120px] min-w-[120px] rounded-lg bg-neutral-800 px-4 py-2 text-center text-xs text-neutral-300 border border-neutral-700"
            >
              Tag {i + 1}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}