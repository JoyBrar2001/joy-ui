"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/Calendar";
import { addDays, format, subDays } from "date-fns";

export function MultipleDaysSelector() {
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>([
    new Date(),
    addDays(new Date(), 5),
    addDays(new Date(), 13),
    addDays(new Date(), 17),
    subDays(new Date(), 2),
    subDays(new Date(), 6),
    subDays(new Date(), 11),
  ]);

  const formattedDates = selectedDates
    ? selectedDates
        .map((date) => format(date, "PPP"))
        .join(", ")
        .replace(/, ([^,]*)$/, " and $1")
    : "None";

  return (
    <>
      <Calendar
        mode="multiple"
        selected={selectedDates}
        onSelect={setSelectedDates}
      />
      <p className="text-sm text-neutral-400 mt-1.5">
        Selected Dates: {formattedDates}
      </p>
    </>
  );
}