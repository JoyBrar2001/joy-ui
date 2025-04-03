"use client";

import { useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";

export function ControlledDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Open Controlled Dialog
      </Button>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          Are you sure you want to proceed with this action? This cannot be undone.
        </DialogDescription>

        <DialogFooter className="gap-2">
          <Button
            onClick={() => setIsOpen(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            variant="destructive"
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
