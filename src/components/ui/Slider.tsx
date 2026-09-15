"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/utils";

export function Slider({ className, showMarks = false, markStep = 10, showMarkLabels = true, showValue = false, valueSuffix = "%", ...props }: SliderPrimitive.SliderProps & { showMarks?: boolean; markStep?: number; showMarkLabels?: boolean; showValue?: boolean; valueSuffix?: string }) {
  const thumbValues = props.value ?? props.defaultValue ?? [0];
  const min = props.min ?? 0;
  const max = props.max ?? 100;
  const marks = Array.from({ length: Math.floor((max - min) / markStep) + 1 }, (_, index) => min + index * markStep);
  const displayValue = thumbValues.join(" – ");
  return <div className="relative w-full">{showValue && <div className="mb-2 text-center text-sm font-medium text-neutral-700 dark:text-neutral-200">{displayValue}{valueSuffix}</div>}<SliderPrimitive.Root className={cn("relative flex w-full touch-none select-none items-center", showMarks && "mb-7", className)} {...props}><SliderPrimitive.Track className="relative h-2 grow overflow-visible rounded-full bg-neutral-200 dark:bg-neutral-800"><SliderPrimitive.Range className="absolute h-full bg-neutral-900 dark:bg-white" />{showMarks && <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">{marks.map((mark) => <span key={mark} className="h-3 w-px bg-neutral-400 dark:bg-neutral-500" />)}</div>}</SliderPrimitive.Track>{thumbValues.map((_, index) => <SliderPrimitive.Thumb key={index} className="block size-5 rounded-full border-2 border-white bg-neutral-900 shadow-md outline-none ring-offset-white transition focus-visible:ring-2 focus-visible:ring-neutral-900 dark:border-neutral-950 dark:bg-white dark:ring-offset-neutral-950 dark:focus-visible:ring-white" />)}{showMarks && showMarkLabels && <div className="pointer-events-none absolute inset-x-0 top-5 flex justify-between text-[10px] text-neutral-500 dark:text-neutral-400">{marks.map((mark) => <span key={mark}>{mark}</span>)}</div>}</SliderPrimitive.Root></div>;
}
