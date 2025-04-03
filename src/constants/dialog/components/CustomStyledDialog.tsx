import { Button } from "@/components/ui/Button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";

export function CustomStyledDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="custom"
          className="px-4 py-2 bg-sky-500 text-white rounded-md"
        >
          Open Dialog
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-sky-500 dark:bg-gradient-to-br dark:from-blue-600 dark:to-sky-600 text-white">
        <DialogHeader className="text-white">
          <DialogTitle>Blue Themed Dialog</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          This dialog follows a blue theme for a consistent UI.
        </DialogDescription>

        <DialogFooter className="gap-2">
          <DialogClose>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
