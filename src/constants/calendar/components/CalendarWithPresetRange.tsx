"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/Calendar";
import { addDays, format, startOfMonth, subDays } from "date-fns";
import { Button } from "@/components/ui/Button";
import { DateRange } from "react-day-picker";

export function CalendarWithPresetRange() {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const presets = [
    { label: "Yesterday - Today", range: { from: subDays(new Date(), 1), to: new Date() } },
    { label: "Last Week", range: { from: subDays(new Date(), 7), to: new Date() } },
    { label: "Next Week", range: { from: new Date(), to: addDays(new Date(), 7) } },
    { label: "Last Month", range: { from: subDays(new Date(), 30), to: new Date() } },
    { label: "Next Month", range: { from: new Date(), to: addDays(new Date(), 30) } },
    { label: "Month Start - Now", range: { from: startOfMonth(new Date()), to: new Date() } },
    { label: "Last 3 Months", range: { from: subDays(new Date(), 90), to: new Date() } },
  ];

  return (
    <>
      <div className="flex">
        <Calendar
          mode="range"
          selected={selectedRange}
          onSelect={setSelectedRange}
          month={selectedRange?.from}
          className="rounded-r-none"
        />
        <div className="p-2 border border-neutral-800 border-l-transparent rounded-r-lg">
          {presets.map(({ label, range }) => (
            <Button
              key={label}
              variant="outline"
              className="border-none px-3"
              onClick={() => setSelectedRange(range)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
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
