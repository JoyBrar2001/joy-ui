import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { calendarCode } from "./code/calendarCode";
import {
  basicCalendarCode,
  calendarWithDisabledDatesCode,
  calendarWithDropdownCode,
  calendarWithPresetDaysCode,
  calendarWithPresetRangeCode,
  calendarWithoutOutsideDaysCode,
  customStyledCalendarCode,
  dayPickerCode,
  disabledWeekendsCode,
  dropdownCalendarCode,
  dropdownCalendarWithDefaultValueCode,
  dropdownCalendarWithPlaceholderCode,
  dropdownRangeSelectorCode,
  dropdownRangeWithDefaultValueCode,
  dropdownRangeWithMultipleMonthsCode,
  footerCalendarCode,
  multipleDayCode,
  multipleDaysSelectorCode,
  multipleMonthsSelectorCode,
  rangePickerCode,
  simpleCalendarCode,
  simpleRangeSelectorCode,
  threeMonthCode,
  twoMonthRangeCode,
} from "./code/componentCodes";
import {
  BasicCalendar,
  CalendarWithDisabledDates,
  CalendarWithDisabledWeekends,
  CalendarWithDropdown,
  CalendarWithoutOutsideDays,
  CalendarWithPresetDays,
  CalendarWithPresetRange,
  CustomStyledCalendar,
  DatePickerWithFooter,
  DayPickerExample,
  DropddownCalendar,
  DropddownCalendarWithPlaceholder,
  DropdownCalendarWithDefaultValue,
  DropdownRangeSelector,
  DropdownRangeWithDefaultValue,
  DropdownRangeWithMultipleMonths,
  MultipleDayPicker,
  MultipleDaysSelector,
  MultipleMonthsSelector,
  RangePicker,
  RangePickerTwoMonths,
  SimpleCalendar,
  SimpleRangeSelector,
  ThreeMonthView,
} from "./components";

export const calendarData: ComponentCategory = {
  cols: 6,
  title: "Calendar",
  subtitle:
    "Flexible date and range pickers powered by react-day-picker, with responsive month views and accessible selection states.",
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
      title: "Normal Calendar",
      component: BasicCalendar,
      code: basicCalendarCode,
    },
    { title: "Day Picker", component: DayPickerExample, code: dayPickerCode },
    { title: "Range Picker", component: RangePicker, code: rangePickerCode },
    {
      title: "Range Picker with Two Month View",
      component: RangePickerTwoMonths,
      code: twoMonthRangeCode,
    },
    {
      title: "Three Month View",
      component: ThreeMonthView,
      code: threeMonthCode,
    },
    {
      title: "Multiple Day Picker",
      component: MultipleDayPicker,
      code: multipleDayCode,
    },
    {
      title: "Date Picker with Footer",
      component: DatePickerWithFooter,
      code: footerCalendarCode,
    },
    {
      title: "Calendar with Disabled Weekends",
      component: CalendarWithDisabledWeekends,
      code: disabledWeekendsCode,
    },
    {
      title: "Simple Calendar",
      component: SimpleCalendar,
      code: simpleCalendarCode,
    },
    {
      title: "Calendar without outside days",
      component: CalendarWithoutOutsideDays,
      code: calendarWithoutOutsideDaysCode,
    },
    {
      title: "Calendar with disabled dates",
      component: CalendarWithDisabledDates,
      code: calendarWithDisabledDatesCode,
    },
    {
      title: "Custom Styled Calendar",
      component: CustomStyledCalendar,
      code: customStyledCalendarCode,
    },
    {
      title: "Simple Range Selector",
      component: SimpleRangeSelector,
      code: simpleRangeSelectorCode,
    },
    {
      title: "Multiple Days Selector",
      component: MultipleDaysSelector,
      code: multipleDaysSelectorCode,
    },
    {
      title: "Calendar with dropdown",
      component: CalendarWithDropdown,
      code: calendarWithDropdownCode,
    },
    {
      title: "Multiple Month Selector",
      component: MultipleMonthsSelector,
      code: multipleMonthsSelectorCode,
    },
    {
      title: "Calendar with Preset Dates",
      component: CalendarWithPresetDays,
      code: calendarWithPresetDaysCode,
    },
    {
      title: "Calendar with Preset Range",
      component: CalendarWithPresetRange,
      code: calendarWithPresetRangeCode,
    },
    {
      title: "Dropdown Calendar",
      component: DropddownCalendar,
      code: dropdownCalendarCode,
    },
    {
      title: "Dropdown Calendar with Placeholder",
      component: DropddownCalendarWithPlaceholder,
      code: dropdownCalendarWithPlaceholderCode,
    },
    {
      title: "Dropdown Calendar with Default value",
      component: DropdownCalendarWithDefaultValue,
      code: dropdownCalendarWithDefaultValueCode,
    },
    {
      title: "Dropdown Range Selector",
      component: DropdownRangeSelector,
      code: dropdownRangeSelectorCode,
    },
    {
      title: "Dropdown With Multiple Months",
      component: DropdownRangeWithMultipleMonths,
      code: dropdownRangeWithMultipleMonthsCode,
    },
    {
      title: "Dropdown Range Selector with Default value",
      component: DropdownRangeWithDefaultValue,
      code: dropdownRangeWithDefaultValueCode,
    },
  ],
};
