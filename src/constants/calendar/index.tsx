import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { calendarCode } from "./code/calendarCode";
import { CalendarWithDisabledDates, CalendarWithDropdown, CalendarWithoutOutsideDays, CalendarWithPresetDays, CalendarWithPresetRange, CustomStyledCalendar, DropddownCalendar, DropddownCalendarWithPlaceholder, DropdownCalendarWithDefaultValue, DropdownRangeSelector, DropdownRangeWithDefaultValue, MultipleDaysSelector, MultipleMonthsSelector, SimpleCalendar, SimpleRangeSelector } from "./components";

export const calendarData: ComponentCategory = {
  cols: 6,
  title: "Calendar",
  subtitle: "A collection of calendars to choose from.",
  steps: [
    {
      type: "dependencies",
      libraries: ["clsx", "tailwind-merge", "react-day-picker"],
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: cnFile,
        },
      ],
    },
    {
      type: "source",
      name: "Calendar.tsx",
      path: "@/components/ui/Calendar.tsx",
      language: "tsx",
      code: calendarCode,
    },
  ],
  components: [
    {
      title: "Simple Calendar",
      component: SimpleCalendar,
      code: "",
    },
    {
      title: "Calendar without outside days",
      component: CalendarWithoutOutsideDays,
      code: "",
    },
    {
      title: "Calendar with disabled dates",
      component: CalendarWithDisabledDates,
      code: "",
    },
    {
      title: "Custom Styled Calendar",
      component: CustomStyledCalendar,
      code: "",
    },
    {
      title: "Simple Range Selector",
      component: SimpleRangeSelector,
      code: "",
    },
    {
      title: "Multiple Days Selector",
      component: MultipleDaysSelector,
      code: "",
    },
    {
      title: "Calendar with dropdown",
      component: CalendarWithDropdown,
      code: "",
    },
    {
      title: "Multiple Month Selector",
      component: MultipleMonthsSelector,
      code: "",
    },
    {
      title: "Calendar with Preset Dates",
      component: CalendarWithPresetDays,
      code: "",
    },
    {
      title: "Calendar with Preset Range",
      component: CalendarWithPresetRange,
      code: "",
    },
    {
      title: "Dropdown Calendar",
      component: DropddownCalendar,
      code: "",
    },
    {
      title: "Dropdown Calendar with Placeholder",
      component: DropddownCalendarWithPlaceholder,
      code: "",
    },
    {
      title: "Dropdown Calendar with Default value",
      component: DropdownCalendarWithDefaultValue,
      code: "",
    },
    {
      title: "Dropdown Range Selector",
      component: DropdownRangeSelector,
      code: "",
    },
    {
      title: "Dropdown Range Selector with Default value",
      component: DropdownRangeWithDefaultValue,
      code: "",
    },
  ]
};