"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Checkbox, CheckboxLabel, CheckboxRoot } from "@/components/ui/Checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";

export function TermsDialog() {
  const [agreed, setAgreed] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Open Terms</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms & Conditions</DialogTitle>
        </DialogHeader>

        <DialogDescription className="p-4 h-[300px] overflow-y-auto">
          Please read and agree to the terms before proceeding.
          {[...Array(20)].map((_, i) => (
            <p key={i} className="my-0.5 first:mt-2">
              Terms and Condition - {i + 1}
            </p>
          ))}
        </DialogDescription>

        <div className="py-4">
          <CheckboxRoot>
            <Checkbox
              id="terms"
              size="sm"
              animate
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(!!checked)}
            />
            <CheckboxLabel htmlFor="terms">Accept Terms and Conditions</CheckboxLabel>
          </CheckboxRoot>
        </div>

        <DialogFooter>
          <DialogClose>
            <Button disabled={!agreed}>Accept</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
