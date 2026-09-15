import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { calendarCode } from "./code/calendarCode";
import { basicCalendarCode, dayPickerCode, disabledWeekendsCode, footerCalendarCode, multipleDayCode, rangePickerCode, threeMonthCode, twoMonthRangeCode } from "./code/componentCodes";
import { BasicCalendar, CalendarWithDisabledDates, CalendarWithDisabledWeekends, CalendarWithDropdown, CalendarWithoutOutsideDays, CalendarWithPresetDays, CalendarWithPresetRange, CustomStyledCalendar, DatePickerWithFooter, DayPickerExample, DropddownCalendar, DropddownCalendarWithPlaceholder, DropdownCalendarWithDefaultValue, DropdownRangeSelector, DropdownRangeWithDefaultValue, DropdownRangeWithMultipleMonths, MultipleDayPicker, MultipleDaysSelector, MultipleMonthsSelector, RangePicker, RangePickerTwoMonths, SimpleCalendar, SimpleRangeSelector, ThreeMonthView } from "./components";

export const calendarData: ComponentCategory = {
  cols: 6,
  title: "Calendar",
  subtitle: "Flexible date and range pickers powered by react-day-picker, with responsive month views and accessible selection states.",
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
    { title: "Normal Calendar", component: BasicCalendar, code: basicCalendarCode },
    { title: "Day Picker", component: DayPickerExample, code: dayPickerCode },
    { title: "Range Picker", component: RangePicker, code: rangePickerCode },
    { title: "Range Picker with Two Month View", component: RangePickerTwoMonths, code: twoMonthRangeCode },
    { title: "Three Month View", component: ThreeMonthView, code: threeMonthCode },
    { title: "Multiple Day Picker", component: MultipleDayPicker, code: multipleDayCode },
    { title: "Date Picker with Footer", component: DatePickerWithFooter, code: footerCalendarCode },
    { title: "Calendar with Disabled Weekends", component: CalendarWithDisabledWeekends, code: disabledWeekendsCode },
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
      title: "Dropdown With Multiple Months",
      component: DropdownRangeWithMultipleMonths,
      code: "",
    },
    {
      title: "Dropdown Range Selector with Default value",
      component: DropdownRangeWithDefaultValue,
      code: "",
    },
  ]
};
