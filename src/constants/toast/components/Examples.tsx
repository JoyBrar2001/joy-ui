"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/Toast";

function ToastDemo({ title, description, action, position = "bottom-right" }: { title: string; description: string; action?: boolean; position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" }) {
  const [toasts, setToasts] = useState<number[]>([]);
  const addToast = () => setToasts((current) => [...current, Date.now() + Math.random()]);
  const removeToast = (id: number) => setToasts((current) => current.filter((toastId) => toastId !== id));
  return <ToastProvider><Button onClick={addToast}>Show notification</Button>{toasts.map((id, index) => <Toast key={id} open onOpenChange={(open) => !open && removeToast(id)}><div><ToastTitle>{title}</ToastTitle><ToastDescription>{description} {toasts.length > 1 ? `(${index + 1})` : ""}</ToastDescription></div>{action && <ToastAction altText="Undo action">Undo</ToastAction>}<ToastClose /></Toast>)}<ToastViewport position={position} /></ToastProvider>;
}

export function SimpleToast() { return <ToastDemo title="Changes saved" description="Your profile has been updated successfully." />; }
export function ToastWithAction() { return <ToastDemo title="Item archived" description="The item was moved to your archive." action />; }
export function ToastWithLongMessage() { return <ToastDemo title="Upload complete" description="Your files are now available to the rest of your team." />; }
export function ToastTopLeft() { return <ToastDemo title="Top left" description="This notification enters from the left." position="top-left" />; }
export function ToastTopCenter() { return <ToastDemo title="Top center" description="This notification enters from above." position="top-center" />; }
export function ToastBottomCenter() { return <ToastDemo title="Bottom center" description="This notification enters from below." position="bottom-center" />; }
