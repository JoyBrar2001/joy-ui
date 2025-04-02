"use client";

import { useState } from "react";

import { Calendar } from "@/components/ui/Calendar";
import { format } from "date-fns";

export function CalendarWithoutOutsideDays() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        showOutsideDays={false}
      />
      <p className="text-sm text-neutral-400 mt-1.5">
        Selected Date: {selectedDate ? format(selectedDate, "PPP") : "None"}
      </p>
    </>
  );
}