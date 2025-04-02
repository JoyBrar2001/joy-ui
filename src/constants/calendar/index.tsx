import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { calendarCode } from "./code/calendarCode";
import { CalendarWithDisabledDates, CalendarWithDropdown, CalendarWithoutOutsideDays, CalendarWithPresetDays, CalendarWithPresetRange, SimpleCalendar, SimpleRangeSelector } from "./components";
import { MultipleMonthsSelector } from "./components/MultipleMonthsSelector";

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
      title: "Simple Range Selector",
      component: SimpleRangeSelector,
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
  ]
};