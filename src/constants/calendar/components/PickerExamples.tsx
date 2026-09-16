"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/Calendar";
import type { DateRange } from "react-day-picker";

export function BasicCalendar() {
  return <Calendar mode="single" aria-label="Basic calendar" />;
}
export function DayPickerExample() {
  const [date, setDate] = useState<Date>();
  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} />
      <p className="mt-3 text-sm text-neutral-500">
        {date ? `Selected: ${date.toLocaleDateString()}` : "Pick a day"}
      </p>
    </div>
  );
}
export function RangePicker() {
  const [range, setRange] = useState<DateRange>();
  return (
    <div>
      <Calendar mode="range" selected={range} onSelect={setRange} />
      <p className="mt-3 text-sm text-neutral-500">
        {range?.from
          ? `From ${range.from.toLocaleDateString()}${range.to ? ` to ${range.to.toLocaleDateString()}` : ""}`
          : "Select a date range"}
      </p>
    </div>
  );
}
export function RangePickerTwoMonths() {
  const [range, setRange] = useState<DateRange>();
  return (
    <Calendar
      mode="range"
      numberOfMonths={2}
      selected={range}
      onSelect={setRange}
    />
  );
}
export function ThreeMonthView() {
  return <Calendar mode="single" numberOfMonths={3} />;
}
export function MultipleDayPicker() {
  const [dates, setDates] = useState<Date[]>([]);
  return (
    <div>
      <Calendar
        mode="multiple"
        required
        selected={dates}
        onSelect={(selected) => setDates(selected ?? [])}
      />
      <p className="mt-3 text-sm text-neutral-500">
        {dates.length} day{dates.length === 1 ? "" : "s"} selected
      </p>
    </div>
  );
}
export function DatePickerWithFooter() {
  const [date, setDate] = useState<Date>();
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      footer={
        date ? `You picked ${date.toLocaleDateString()}` : "Please pick a day."
      }
    />
  );
}
export function CalendarWithDisabledWeekends() {
  return <Calendar mode="single" disabled={{ dayOfWeek: [0, 6] }} />;
}
