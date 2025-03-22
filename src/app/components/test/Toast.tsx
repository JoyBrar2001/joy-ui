import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/utils";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

interface ToastProps {
  id: number;
  title: string;
  description?: string;
  type?: "success" | "error" | "info";
}

export function Toast({ id, title, description, type = "info" }: ToastProps) {
  return (
    <ToastPrimitive.Root
      className={cn(
        "relative flex items-center gap-3 w-96 max-w-full p-4 rounded-lg shadow-md",
        "border-l-4",
        {
          "bg-green-100 border-green-500 text-green-900": type === "success",
          "bg-red-100 border-red-500 text-red-900": type === "error",
          "bg-blue-100 border-blue-500 text-blue-900": type === "info",
        }
      )}
    >
      {type === "success" && <CheckCircle className="text-green-500 w-6 h-6" />}
      {type === "error" && <XCircle className="text-red-500 w-6 h-6" />}
      {type === "info" && <Info className="text-blue-500 w-6 h-6" />}

      <div className="flex-1">
        <ToastPrimitive.Title className="font-medium">{title}</ToastPrimitive.Title>
        {description && <ToastPrimitive.Description className="text-sm">{description}</ToastPrimitive.Description>}
      </div>

      <ToastPrimitive.Close className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
        <X className="w-4 h-4" />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
}
