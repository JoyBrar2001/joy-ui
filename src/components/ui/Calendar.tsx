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
        "relative w-fit rounded-lg border border-neutral-200 bg-white px-0 py-2 text-neutral-900 dark:border-neutral-800 dark:bg-black dark:text-white",
        className
      )}
      classNames={{
        nav: "absolute px-4 top-[1.125rem] w-full flex justify-between",
        chevron: "size-6 cursor-pointer rounded-sm border border-neutral-300 fill-neutral-900 p-1 transition hover:bg-neutral-100 dark:border-neutral-800 dark:fill-white dark:hover:bg-neutral-800",
        months: "flex",
        month: "px-4 not-last:border-r not-last:border-r-neutral-800",
        month_caption: "flex justify-center items-center py-3",
        weekdays: "grid grid-cols-7 w-full my-2",
        weekday: "inline-flex flex justify-center items-center text-sm font-light",
        week: "grid grid-cols-7 w-full",
        day: "my-0.5 rounded-md transition disabled:cursor-not-allowed data-[hidden=true]:bg-white hover:bg-neutral-100 dark:data-[hidden=true]:bg-black dark:hover:bg-neutral-800",
        day_button: "flex size-10 items-center justify-center disabled:text-neutral-400 disabled:hover:bg-white dark:disabled:text-neutral-700 dark:disabled:hover:bg-black",
        disabled: "text-neutral-400 line-through dark:text-neutral-700",
        outside: "text-neutral-400 dark:text-neutral-700",
        today: "outline outline-neutral-800 rounded-md",
        selected: props.mode === "range" ? "" : "rounded-md bg-neutral-900 text-white hover:bg-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-white",
        range_start: "rounded-l-md rounded-r-none bg-neutral-900 text-white hover:bg-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-white",
        range_end: "rounded-r-md rounded-l-none bg-neutral-900 text-white hover:bg-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-white",
        range_middle: "rounded-none bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-white",
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
