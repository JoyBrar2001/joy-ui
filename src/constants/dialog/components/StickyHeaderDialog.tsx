import { Button } from "@/components/ui/Button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";

export function StickyHeaderDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Open Dialog</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="sticky top-0 bg-white dark:bg-neutral-950 shadow py-4 z-10">
          <DialogTitle>Sticky Header</DialogTitle>
        </DialogHeader>

        <div className="p-4 h-[300px] overflow-y-auto">
          <p>Scrollable content goes here...</p>
          {[...Array(20)].map((_, i) => (
            <p key={i} className="mt-2">More content {i + 1}</p>
          ))}
        </div>

        <DialogFooter>
          <DialogClose>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
