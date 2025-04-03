"use client";

import { useState } from "react";
import { addDays, format } from "date-fns";

import { Calendar } from "@/components/ui/Calendar";
import { DateRange } from "react-day-picker";

export function CustomStyledCalendar() {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7)
  });

  return (
    <>
      <Calendar
        mode="range"
        selected={selectedRange}
        onSelect={setSelectedRange}
        classNames={{
          day: "my-0.5 rounded-md transition disabled:cursor-not-allowed data-[hidden=true]:bg-black hover:bg-sky-600",
          selected: "",
          range_start: "bg-sky-500 text-white rounded-l-md rounded-r-none hover:bg-sky-500",
          range_end: "bg-sky-500 text-white rounded-r-md rounded-l-none hover:bg-sky-500",
          range_middle: "bg-sky-900 text-white rounded-none",
        }}
      />
      <p className="text-sm text-neutral-400 mt-1.5">
        {selectedRange?.from && selectedRange?.to
          ? `Selected: ${format(selectedRange.from, "PPP")} - ${format(selectedRange.to, "PPP")}`
          : selectedRange?.from
            ? `Selected Start: ${format(selectedRange.from, "PPP")}`
            : "No dates selected"}
      </p>
    </>
  );
}