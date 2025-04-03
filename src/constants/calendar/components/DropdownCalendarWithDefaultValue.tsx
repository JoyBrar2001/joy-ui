"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/utils";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";

export function DropdownCalendarWithDefaultValue() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button variant="custom" className={cn(
            "border border-neutral-800 w-48 justify-between hover:bg-neutral-800",
            selectedDate === undefined
              ? "text-neutral-500"
              : "text-white"
          )}>
            {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "Select Date"}
            <CalendarIcon size={18} className="text-white" />
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}