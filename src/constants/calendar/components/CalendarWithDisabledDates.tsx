"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/Calendar";
import { format, addDays, subDays } from "date-fns";

export function CalendarWithDisabledDates() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const today = new Date();

  const disabledDates = [
    addDays(today, 1),
    addDays(today, 4),
    addDays(today, 9),
    addDays(today, 13),
    addDays(today, 19),
    subDays(today, 1),
    subDays(today, 4),
    subDays(today, 9),
    subDays(today, 13),
    subDays(today, 19),
  ];

  return (
    <>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        disabled={disabledDates}
      />
      <p className="text-sm text-neutral-400 mt-1.5">
        Selected Date: {selectedDate ? format(selectedDate, "PPP") : "None"}
      </p>
    </>
  );
}
