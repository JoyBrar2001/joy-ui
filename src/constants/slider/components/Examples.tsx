"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/Slider";

export function SimpleSlider() { const [value, setValue] = useState([40]); return <Slider value={value} onValueChange={setValue} aria-label="Volume" />; }
export function SteppedSlider() { const [value, setValue] = useState([50]); return <Slider value={value} onValueChange={setValue} step={10} aria-label="Brightness" />; }
export function RangeSlider() { const [value, setValue] = useState([25, 75]); return <Slider value={value} onValueChange={setValue} aria-label="Price range" />; }
export function DisabledSlider() { return <Slider value={[60]} disabled aria-label="Disabled slider" />; }
export function RulerSlider() { const [value, setValue] = useState([50]); return <Slider value={value} onValueChange={setValue} step={10} showMarks markStep={10} aria-label="Ruler slider" />; }
export function PercentageSlider() { const [value, setValue] = useState([50]); return <Slider value={value} onValueChange={setValue} showValue aria-label="Percentage slider" />; }
