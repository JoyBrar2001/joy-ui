import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { sliderCode } from "./code/sliderCode";
import { disabledSliderCode, percentageSliderCode, rangeSliderCode, rulerSliderCode, simpleSliderCode, steppedSliderCode } from "./code/componentCodes";
import { DisabledSlider, PercentageSlider, RangeSlider, RulerSlider, SimpleSlider, SteppedSlider } from "./components";

export const sliderData: ComponentCategory = {
  cols: 4,
  title: "Slider",
  subtitle: "Select a value or range with a keyboard-accessible slider",
  steps: [{ type: "dependencies", libraries: ["clsx", "tailwind-merge", "@radix-ui/react-slider"] }, { type: "utilities", files: [{ name: "cn.ts", path: "@/utils/cn.ts", language: "typescript", code: cnFile }] }, { type: "source", name: "Slider.tsx", path: "@/components/ui/Slider.tsx", language: "tsx", code: sliderCode }],
  components: [
    { title: "Simple Slider", component: SimpleSlider, code: simpleSliderCode },
    { title: "Stepped Slider", component: SteppedSlider, code: steppedSliderCode },
    { title: "Range Slider", component: RangeSlider, code: rangeSliderCode },
    { title: "Disabled Slider", component: DisabledSlider, code: disabledSliderCode },
    { title: "Slider with Ruler Markings", component: RulerSlider, code: rulerSliderCode },
    { title: "Slider with Percentage", component: PercentageSlider, code: percentageSliderCode },
  ],
};
