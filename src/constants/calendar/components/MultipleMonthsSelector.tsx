"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/Calendar";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

export function MultipleMonthsSelector() {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 38),
  });

  return (
    <>
      <Calendar
        mode="range"
        selected={selectedRange}
        onSelect={setSelectedRange}
        numberOfMonths={2}
      />
      <p className="text-sm text-neutral-400 mt-2">
        {selectedRange?.from && selectedRange?.to
          ? `Selected: ${format(selectedRange.from, "PPP")} - ${format(selectedRange.to, "PPP")}`
          : selectedRange?.from
            ? `Selected Start: ${format(selectedRange.from, "PPP")}`
            : "No dates selected"}
      </p>
    </>
  );
}