"use client";

import { useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/utils";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { DateRange } from "react-day-picker";

export function DropdownRangeWithDefaultValue() {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7)
  });

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button variant="custom" className={cn(
            "border border-neutral-800 w-64 justify-between hover:bg-neutral-800",
            selectedRange === undefined
              ? "text-neutral-500"
              : "text-white"
          )}>
            {selectedRange?.from && selectedRange?.to
              ? `${format(selectedRange.from, "dd/MM/yyyy")} - ${format(selectedRange.to, "dd/MM/yyyy")}`
              : selectedRange?.from
                ? `Selected Start: ${format(selectedRange.from, "dd/MM/yyyy")}`
                : "Pick a range"}
            <CalendarIcon size={18} className="text-white" />
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <Calendar
            mode="range"
            selected={selectedRange}
            onSelect={setSelectedRange}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}