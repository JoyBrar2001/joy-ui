export const toastCode = `"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/utils";

export const ToastProvider = ToastPrimitive.Provider;
export type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
export const ToastViewport = ({ position = "bottom-right", className, ...props }) => <ToastPrimitive.Viewport data-toast-position={position} className={cn("fixed z-[100] flex w-full max-w-sm flex-col gap-2 p-4", className)} {...props} />;
export const Toast = (props) => <ToastPrimitive.Root className={cn("rounded-lg border bg-white p-4 shadow-lg dark:bg-neutral-900", props.className)} {...props} />;
export const ToastTitle = ToastPrimitive.Title;
export const ToastDescription = ToastPrimitive.Description;
export const ToastAction = ToastPrimitive.Action;
export const ToastClose = ToastPrimitive.Close;`;
