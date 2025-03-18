import { cn } from "@/utils";
import { ArrowRight, CircleCheck, Info, AlertTriangle, XCircle } from "lucide-react";
import Link from "next/link";

type AlertProps = {
  label: string;
  icon?: React.ReactNode;
  variant: "success" | "info" | "warning" | "alert";
  customColor?: string;
  colored?: boolean;
  buttonText?: string;
  link?: string;
};

const VARIANT_STYLES = {
  success: "border-green-500 text-green-500",
  info: "border-blue-500 text-blue-500",
  warning: "border-yellow-500 text-yellow-500",
  alert: "border-red-500 text-red-500",
};

const DEFAULT_ICONS = {
  success: <CircleCheck className="size-5" />,
  info: <Info className="size-5" />,
  warning: <AlertTriangle className="size-5" />,
  alert: <XCircle className="size-5" />,
};

export default function Alert({
  label,
  icon,
  variant,
  customColor,
  colored = false,
  buttonText,
  link,
}: AlertProps) {
  const alertColor = customColor || VARIANT_STYLES[variant];

  return (
    <div
      className={cn(
        "flex flex-col w-full px-6 py-4 border rounded-md",
        colored ? "border-neutral-800" : alertColor
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span
            className={alertColor || "text-white"}
          >
            {icon || DEFAULT_ICONS[variant]}
          </span>

          <span>{label}</span>
        </div>

        {buttonText && link && (
          <Link href={link} className="flex items-center gap-1 text-sm">
            {buttonText}
            <ArrowRight className="size-4" />
          </Link>
        )}
        {buttonText && !link && (
          <div className="flex items-center gap-1 text-sm">
            {buttonText}
          </div>
        )}
      </div>
    </div>
  );
}
