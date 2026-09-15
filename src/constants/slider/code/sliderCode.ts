export const sliderCode = `"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/utils";

export function Slider({ className, showMarks = false, markStep = 10, ...props }) {
  const marks = Array.from({ length: Math.floor(((props.max ?? 100) - (props.min ?? 0)) / markStep) + 1 }, (_, index) => (props.min ?? 0) + index * markStep);
  return <SliderPrimitive.Root className={cn("relative flex w-full touch-none select-none items-center", showMarks && "mb-7", className)} {...props}>
    <SliderPrimitive.Track className="relative h-2 grow overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"><SliderPrimitive.Range className="absolute h-full bg-neutral-900 dark:bg-white" /></SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="size-5 rounded-full bg-neutral-900 dark:bg-white" />
    {showMarks && <div className="absolute inset-x-0 top-5 flex justify-between text-[10px] text-neutral-500">{marks.map((mark) => <span key={mark}>{mark}</span>)}</div>}
  </SliderPrimitive.Root>;
}`;
