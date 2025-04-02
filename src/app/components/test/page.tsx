"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import "react-day-picker/style.css";

import { Button } from "@/components/ui/Button";
import { DateRange } from "react-day-picker";
import { Calendar } from "../../../components/ui/Calendar";

export default function Example() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  return (
    <div className="max-w-[100rem] mx-auto h-full flex pt-24 bg-neutral-100 dark:bg-black">
      <section className="flex-1 p-6 min-h-screen h-full">
        <h2 className="text-sm font-medium mb-2">Pick a Date</h2>

        <Calendar
          mode="single"
          numberOfMonths={1}
          selected={selectedDate}
          onSelect={setSelectedDate}
          enableDropdown={true}
        />

        <Calendar
          mode="single"
          numberOfMonths={1}
          selected={selectedDate}
          onSelect={setSelectedDate}
        />

        <p className="text-xs text-neutral-400 mt-2">
          Selected: {selectedDate ? format(selectedDate, "PPP") : "None"}
        </p>

        <Button
          variant="outline"
          className="mt-4 w-full border-white hover:bg-neutral-800"
          onClick={() => setSelectedDate(undefined)}
        >
          Clear Date
        </Button>

        <h2 className="text-sm font-medium mb-2">Pick a Date Range</h2>

        {/* ✅ Calendar without Dropdowns */}
        <Calendar
          enableDropdown={false}
          mode="range"
          numberOfMonths={2}
          selected={selectedRange}
          onSelect={setSelectedRange}
        />

        <p className="text-xs text-neutral-400 mt-2">
          {selectedRange?.from && selectedRange?.to
            ? `Selected: ${format(selectedRange.from, "PPP")} - ${format(selectedRange.to, "PPP")}`
            : selectedRange?.from
              ? `Selected Start: ${format(selectedRange.from, "PPP")}`
              : "No dates selected"}
        </p>

        <Button
          variant="outline"
          className="mt-4 w-full border-white hover:bg-neutral-800"
          onClick={() => setSelectedRange(undefined)}
        >
          Clear Dates
        </Button>
      </section>
    </div>
  );
}
