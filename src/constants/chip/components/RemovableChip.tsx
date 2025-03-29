"use client";

import { useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { X } from "lucide-react";

export function RemovableChip() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <Chip variant="outline" onClick={() => setVisible(false)} className="cursor-pointer">
      <X size={16} />
      Click me
    </Chip>
  )
}