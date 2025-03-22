"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { createContext, useContext, useState, ReactNode } from "react";
import { cn } from "@/utils"; // Utility for conditional classnames
import { Toast } from "./Toast";

interface Toast {
  id: number;
  title: string;
  description?: string;
  type?: "success" | "error" | "info";
}

interface ToastContextType {
  addToast: (title: string, description?: string, type?: "success" | "error" | "info") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (title: string, description?: string, type: "success" | "error" | "info" = "info") => {
    const id = Date.now(); // Unique ID
    setToasts((prev) => [...prev, { id, title, description, type }]);

    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <ToastPrimitive.Provider swipeDirection="right">
        <div className="fixed top-5 right-5 z-50 flex flex-col gap-2">
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>
        <ToastPrimitive.Viewport className="fixed top-5 right-5 z-50 flex flex-col gap-2" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

// Custom Hook to use the Toast context
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
