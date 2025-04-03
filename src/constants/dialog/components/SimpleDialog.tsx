import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";

export function SimpleDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="px-4 py-2 bg-blue-600 text-white rounded-md">Open Dialog</Button>
      </DialogTrigger>
      
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
        </DialogHeader>
        
        <DialogDescription>
          Are you sure you want to proceed with this action? This cannot be undone.
        </DialogDescription>
        
        <DialogFooter className="gap-2">
          <DialogClose>
            <Button className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
