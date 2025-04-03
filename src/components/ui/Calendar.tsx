import React from "react";
import { DayPicker, DayPickerProps, DropdownNavProps, DropdownProps } from "react-day-picker";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectViewport
} from "@/components/ui/Select";
import { cn } from "@/utils";

export function Calendar({
  className,
  classNames,
  enableDropdown,
  monthOnly = false,
  yearOnly = false,
  ...props
}: DayPickerProps & {
  enableDropdown?: boolean;
  monthOnly?: boolean;
  yearOnly?: boolean;
}) {
  return (
    <DayPicker
      className={cn(
        "relative rounded-lg px-0 py-2 bg-black w-fit border border-neutral-800",
        className
      )}
      classNames={{
        nav: "absolute px-4 top-[1.125rem] w-full flex justify-between",
        chevron: "size-6 p-1 border border-neutral-800 rounded-sm fill-white cursor-pointer transition hover:bg-neutral-800",
        months: "flex",
        month: "px-4 not-last:border-r not-last:border-r-neutral-800",
        month_caption: "flex justify-center items-center py-3",
        weekdays: "grid grid-cols-7 w-full my-2",
        weekday: "inline-flex flex justify-center items-center text-sm font-light",
        week: "grid grid-cols-7 w-full",
        day: "my-0.5 rounded-md transition disabled:cursor-not-allowed data-[hidden=true]:bg-black hover:bg-neutral-800",
        day_button: "size-10 flex justify-center items-center disabled:text-neutral-700 disabled:hover:bg-black",
        disabled: "text-neutral-700 line-through",
        outside: "text-neutral-700",
        today: "outline outline-neutral-800 rounded-md",
        selected: props.mode === "range" ? "" : "bg-white hover:bg-white text-neutral-900 rounded-md",
        range_start: "bg-white text-neutral-900 rounded-l-md rounded-r-none hover:bg-white",
        range_end: "bg-white text-neutral-900 rounded-r-md rounded-l-none hover:bg-white",
        range_middle: "bg-neutral-800 text-white rounded-none",
        ...classNames,
      }}
      showOutsideDays={props.showOutsideDays ?? (!props.numberOfMonths || props.numberOfMonths <= 1)}
      defaultMonth={props.defaultMonth ?? new Date()}
      startMonth={props.startMonth ?? new Date(1980, 6)}
      hideNavigation={props.hideNavigation !== false && enableDropdown}
      captionLayout={
        enableDropdown
          ? monthOnly
            ? "dropdown-months"
            : yearOnly
              ? "dropdown-years"
              : "dropdown"
          : "label"
      }
      components={
        enableDropdown
          ? {
            DropdownNav: ({ children }: DropdownNavProps) => (
              <div className="flex w-full justify-center items-center gap-2">
                {children}
              </div>
            ),
            Dropdown: ({ value, onChange, options }: DropdownProps) => (
              <Select
                value={String(value)}
                onValueChange={(newValue) =>
                  onChange && onChange({ target: { value: newValue } } as React.ChangeEvent<HTMLSelectElement>)
                }
              >
                <SelectTrigger className="h-8 w-fit font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="z-[60] min-w-32 max-h-80 py-2 w-full">
                  <SelectViewport>
                    {options?.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={String(option.value)}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectViewport>
                </SelectContent>
              </Select>
            ),
          }
          : undefined
      }
      {...props}
    />
  );
}