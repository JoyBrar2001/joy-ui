import type { ComponentCategory } from "./data";
import ChartExample, { type ChartKind, type ChartVariant } from "@/components/charts/ChartExamples";

const dependencies = [{ type: "dependencies" as const, libraries: ["echarts", "echarts-for-react"] }];
const source = [{ type: "source" as const, name: "EChart.tsx", path: "@/components/charts/EChart.tsx", language: "tsx" as const, code: `"use client";\n\nimport dynamic from "next/dynamic";\nimport type { EChartsOption } from "echarts";\n\nconst ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });\n\nexport default function EChart({ option }: { option: EChartsOption }) {\n  return <ReactECharts option={option} opts={{ renderer: "svg" }} />;\n}` }];

function chart(title: string, subtitle: string, kind: ChartKind): ComponentCategory {
  return {
    cols: 6,
    title,
    subtitle,
    steps: [...dependencies, ...source],
    components: [
      { title: `Basic ${title}`, component: () => <ChartExample kind={kind} variant="basic" />, code: exampleCode(kind, "basic") },
      { title: `Advanced ${title}`, component: () => <ChartExample kind={kind} variant="advanced" />, code: exampleCode(kind, "advanced") },
    ],
  };
}

const lineExamples: Array<[string, ChartVariant]> = [
  ["Basic line chart", "basic"],
  ["Smooth line chart", "smooth"],
  ["Basic area chart", "area"],
  ["Stacked line chart", "stacked"],
  ["Stacked area chart", "stackedArea"],
  ["Gradient stacked area chart", "gradientStackedArea"],
  ["Bump chart", "bump"],
];

const lineCharts: ComponentCategory = {
  cols: 6,
  title: "Line Charts",
  subtitle: "Black, white, and gray line chart patterns for trends, rankings, and stacked data.",
  steps: [...dependencies, ...source],
  components: lineExamples.map(([title, variant]) => ({
    title,
    component: () => <ChartExample kind="line" variant={variant} />,
    code: exampleCode("line", variant),
  })),
};

function exampleCode(kind: ChartKind, variant: ChartVariant) {
  const names = { line: "lineOption", bar: "barOption", pie: "pieOption", radar: "radarOption" };
  const option = names[kind];
  const body = kind === "pie"
    ? `series: [{ type: "pie", radius: ${variant === "basic" ? '"62%"' : '["42%", "70%"]'}, data: [{ value: 1048, name: "Direct" }, { value: 735, name: "Search" }, { value: 580, name: "Social" }] }]`
    : kind === "radar"
      ? `radar: { indicator: [{ name: "Performance", max: 100 }, { name: "Accessibility", max: 100 }, { name: "SEO", max: 100 }] },\nseries: [{ type: "radar", data: [{ value: [92, 88, 78], name: "Current release" }] }]`
      : `xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr"] },\nyAxis: { type: "value" },\nseries: [{ name: "${kind === "line" ? "Visitors" : "Completed"}", type: "${kind}", data: [420, 680, 540, 890] }]`;
  return `"use client";\n\nimport EChart from "@/components/charts/EChart";\n\nconst ${option} = {\n  tooltip: { trigger: "${kind === "pie" || kind === "radar" ? "item" : "axis"}" },\n  ${body}\n};\n\nexport function ${variant}${kind[0].toUpperCase()}${kind.slice(1)}Chart() {\n  return <EChart option={${option}} />;\n}`;
}

export const chartsData: Record<string, ComponentCategory> = {
  line: lineCharts,
  bar: chart("Bar Charts", "Compare values across categories with clear visual differences.", "bar"),
  pie: chart("Pie Charts", "Show how a total is distributed across segments.", "pie"),
  radar: chart("Radar Charts", "Compare multiple dimensions between one or more data sets.", "radar"),
};
