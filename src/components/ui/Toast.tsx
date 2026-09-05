"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cn } from "@/utils";

export const ToastProvider = ToastPrimitive.Provider;
export type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

const viewportPositions: Record<ToastPosition, string> = {
  "top-left": "left-0 top-20 items-start",
  "top-center": "left-1/2 top-20 -translate-x-1/2 items-center",
  "top-right": "right-0 top-20 items-end",
  "bottom-left": "bottom-0 left-0 items-start",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-0 right-0 items-end",
};

export const ToastViewport = ({ className, position = "bottom-right", ...props }: ToastPrimitive.ToastViewportProps & { position?: ToastPosition }) => <ToastPrimitive.Viewport data-toast-position={position} className={cn("toast-viewport fixed z-[9999] flex w-full max-w-sm flex-col gap-2 p-4 outline-none", viewportPositions[position], className)} {...props} />;
export const Toast = ({ className, ...props }: ToastPrimitive.ToastProps) => <ToastPrimitive.Root className={cn("group relative flex w-full items-start justify-between gap-4 overflow-hidden rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:text-white", className)} {...props} />;
export const ToastTitle = ({ className, ...props }: ToastPrimitive.ToastTitleProps) => <ToastPrimitive.Title className={cn("text-sm font-semibold", className)} {...props} />;
export const ToastDescription = ({ className, ...props }: ToastPrimitive.ToastDescriptionProps) => <ToastPrimitive.Description className={cn("mt-1 text-sm text-neutral-600 dark:text-neutral-300", className)} {...props} />;
export const ToastAction = ({ className, ...props }: ToastPrimitive.ToastActionProps) => <ToastPrimitive.Action className={cn("rounded border border-neutral-300 px-2 py-1 text-xs font-medium hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800", className)} {...props} />;
export const ToastClose = ({ className, ...props }: ToastPrimitive.ToastCloseProps) => <ToastPrimitive.Close className={cn("rounded p-1 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white", className)} {...props}><X className="size-4" /></ToastPrimitive.Close>;
