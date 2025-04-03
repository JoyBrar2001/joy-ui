"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/Calendar";
import { addDays, format, subDays } from "date-fns";
import { Button } from "@/components/ui/Button";

export function CalendarWithPresetDays() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const buttons = [
    { label: "Today", date: new Date() },
    { label: "Yesterday", date: subDays(new Date(), 1) },
    { label: "Tomorrow", date: addDays(new Date(), 1) },
    { label: "Last Week", date: subDays(new Date(), 7) },
    { label: "Next Week", date: addDays(new Date(), 7) },
    { label: "Last Month", date: subDays(new Date(), 31) },
    { label: "Next Month", date: addDays(new Date(), 31) },
    { label: "Next Year", date: addDays(new Date(), 365) },
  ];

  return (
    <>
      <div className="flex">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          month={selectedDate}
          className="rounded-r-none"
        />
        <div className="p-2 border border-neutral-800 border-l-transparent rounded-r-lg">
          {buttons.map(({ label, date }) => (
            <Button
              key={label}
              variant="outline"
              className="border-none px-3"
              onClick={() => setSelectedDate(date)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <p className="text-sm text-neutral-400 mt-1.5">
        Selected Date: {selectedDate ? format(selectedDate, "PPP") : "None"}
      </p>
    </>
  );
}