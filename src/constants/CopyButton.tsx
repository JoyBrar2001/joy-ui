"use client";

import { Button } from "@/components/ui/Button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import { cn } from "@/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ props }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("You just copied some text :D");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button {...props} variant="outline" className="relative size-4 p-4" onClick={handleCopy}>
          <Check size={15} className={cn(
            "absolute left-1/2 top-1/2 -translate-1/2 scale-0 opacity-0 transition-all duration-300",
            copied && "scale-100 opacity-100"
          )} />
          <Copy size={15} className={cn(
            "absolute left-1/2 top-1/2 -translate-1/2 scale-100 opacity-100 transition-all duration-300",
            copied && "scale-0 opacity-0"
          )} />
        </Button>
      </TooltipTrigger>
      <TooltipContent size="xs">
        Click to copy code
      </TooltipContent>
    </Tooltip>
  )
}