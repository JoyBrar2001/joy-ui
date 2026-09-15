export const simpleToastCode = `"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/Toast";

export function SimpleToast() {
  const [open, setOpen] = useState(false);
  return <ToastProvider><Button onClick={() => setOpen(true)}>Show notification</Button><Toast open={open} onOpenChange={setOpen}><ToastTitle>Changes saved</ToastTitle><ToastDescription>Your profile has been updated successfully.</ToastDescription></Toast><ToastViewport /></ToastProvider>;
}`;
export const toastWithActionCode = simpleToastCode.replace("Changes saved", "Item archived").replace("Your profile has been updated successfully.", "The item was moved to your archive.");
export const toastWithLongMessageCode = simpleToastCode.replace("Changes saved", "Upload complete").replace("Your profile has been updated successfully.", "Your files are now available to the rest of your team.");
