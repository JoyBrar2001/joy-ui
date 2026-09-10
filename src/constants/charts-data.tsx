import type { ComponentCategory } from "./data";
import ChartExample, { type ChartKind, type ChartVariant } from "@/components/charts/ChartExamples";

const dependencies = [{ type: "dependencies" as const, libraries: ["echarts", "echarts-for-react"] }];
const source = [{ type: "source" as const, name: "EChart.tsx", path: "@/components/charts/EChart.tsx", language: "tsx" as const, code: `"use client";\n\nimport dynamic from "next/dynamic";\nimport type { EChartsOption } from "echarts";\n\nconst ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });\n\nexport default function EChart({ option }: { option: EChartsOption }) {\n  return <ReactECharts option={option} opts={{ renderer: "svg" }} />;\n}` }];

function chartWithExamples(title: string, subtitle: string, kind: ChartKind, examples: Array<[string, ChartVariant]>): ComponentCategory {
  return {
    cols: 6,
    title,
    subtitle,
    steps: [...dependencies, ...source],
    components: examples.map(([exampleTitle, variant]) => ({
      title: exampleTitle,
      component: () => <ChartExample kind={kind} variant={variant} />,
      code: exampleCode(kind, variant),
    })),
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

const pieCharts = chartWithExamples("Pie Charts", "Monochrome pie patterns for composition, hierarchy, and proportions.", "pie", [
  ["Simple Pie", "basic"],
  ["Donut Pie", "donut"],
  ["Donut Pie with rounded edges", "roundedDonut"],
  ["Nightingale Chart", "nightingale"],
  ["Pie with special labels", "specialLabels"],
  ["Nested Pies", "nested"],
]);

const barCharts = chartWithExamples("Bar Charts", "Monochrome bar patterns for comparisons, ranges, totals, and large data sets.", "bar", [
  ["Basic Bar Chart", "basic"],
  ["Set style of single bar", "singleBar"],
  ["Waterfall chart", "waterfall"],
  ["Bar with negative axes as well", "negative"],
  ["Bar Label rotation", "rotatedLabels"],
  ["Stacked Column Chart", "stacked"],
  ["Stacked Bar normalization", "normalized"],
  ["Large Scale Bar chart", "largeScale"],
]);

const radarCharts = chartWithExamples("Radar Charts", "Monochrome radar patterns for single scores, comparisons, and custom metrics.", "radar", [
  ["Single stat", "singleStat"],
  ["Radar with multiple stats", "multipleStats"],
  ["Customized radar chart", "customRadar"],
]);

const treeCharts = chartWithExamples("Tree Charts", "Monochrome hierarchy patterns for organization, navigation, and nested data.", "tree", [
  ["Left to right tree", "basic"],
  ["Top to bottom tree", "topBottom"],
  ["Multiple trees", "multipleTrees"],
  ["Tree with polyline edge", "polyline"],
  ["Radial tree", "radial"],
  ["Compact tree", "compactTree"],
  ["Tree with custom symbols", "customSymbols"],
]);

const treemapCharts = chartWithExamples("Treemap Charts", "Monochrome treemaps for hierarchical proportions, gradients, and storage usage.", "treemap", [
  ["Basic Treemap", "basic"],
  ["Gradient Mapping", "gradientMapping"],
  ["Disk Usage", "diskUsage"],
]);

const sankeyCharts = chartWithExamples("Sankey Graphs", "Monochrome flow diagrams for relationships, alignment, labels, and weighted edges.", "sankey", [
  ["Basic Sankey", "basic"],
  ["Vertical Sankey", "verticalSankey"],
  ["Sankey with Label Settings", "labelSettings"],
  ["Node left align", "leftAlign"],
  ["Node right align", "rightAlign"],
  ["Gradient edge", "gradientEdge"],
]);

function exampleCode(kind: ChartKind, variant: ChartVariant) {
  const names = { line: "lineOption", bar: "barOption", pie: "pieOption", radar: "radarOption", tree: "treeOption", treemap: "treemapOption", sankey: "sankeyOption" };
  const option = names[kind];
  let body = `xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr"] },\nyAxis: { type: "value" },\nseries: [{ name: "Visitors", type: "line", data: [420, 680, 540, 890] }]`;

  if (kind === "line") {
    const options: Record<string, string> = {
      basic: `xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr"] },\nyAxis: { type: "value" },\nseries: [{ type: "line", data: [420, 680, 540, 890] }]`,
      smooth: `series: [{ type: "line", smooth: true, data: [420, 680, 540, 890] }]`,
      area: `series: [{ type: "line", smooth: true, data: [420, 680, 540, 890], areaStyle: {} }]`,
      stacked: `series: [{ type: "line", stack: "total", data: [420, 680, 540, 890] }, { type: "line", stack: "total", data: [220, 380, 280, 460] }]`,
      stackedArea: `series: [{ type: "line", stack: "total", areaStyle: {}, data: [420, 680, 540, 890] }, { type: "line", stack: "total", areaStyle: {}, data: [220, 380, 280, 460] }]`,
      gradientStackedArea: `series: [{ type: "line", stack: "total", areaStyle: { color: { type: "linear", colorStops: [{ offset: 0, color: "#171717" }, { offset: 1, color: "#ffffff" }] } }, data: [420, 680, 540, 890] }]`,
      bump: `yAxis: { type: "value", min: 1, max: 5, inverse: true },\nseries: [{ type: "line", data: [4, 3, 2, 2] }, { type: "line", data: [2, 2, 1, 3] }]`,
    };
    body = options[variant] ?? body;
  } else if (kind === "pie") {
    const radius = variant === "basic" || variant === "specialLabels" ? '"62%"' : '["42%", "70%"]';
    const label = variant === "specialLabels" ? ', label: { formatter: "{b}\\n{c} ({d}%)" }' : "";
    body = variant === "nested"
      ? `series: [{ type: "pie", radius: ["28%", "45%"], data: [...] }, { type: "pie", radius: ["52%", "74%"], data: [...] }]`
      : `series: [{ type: "pie", radius: ${radius}${variant === "nightingale" ? ', roseType: "area"' : ""}${variant === "roundedDonut" ? ', itemStyle: { borderRadius: 10 }' : ""}${label}, data: [{ value: 1048, name: "Direct" }, { value: 735, name: "Search" }, { value: 580, name: "Social" }] }]`;
  } else if (kind === "bar") {
    const options: Record<string, string> = {
      basic: `xAxis: { type: "category", data: ["Design", "Engineering", "Marketing"] },\nyAxis: { type: "value" },\nseries: [{ type: "bar", data: [76, 92, 58] }]`,
      singleBar: `series: [{ type: "bar", data: [76, 92, 58], itemStyle: { color: "#171717", borderRadius: [6, 6, 0, 0] } }]`,
      waterfall: `series: [{ type: "bar", stack: "total", itemStyle: { color: "transparent" }, data: [0, 100, 140, 90] }, { type: "bar", stack: "total", data: [100, 40, 0, 60] }]`,
      negative: `series: [{ type: "bar", data: [42, -28, 56, -18] }]`,
      rotatedLabels: `xAxis: { type: "category", axisLabel: { rotate: 35 }, data: ["North America", "Europe", "Asia Pacific"] },\nseries: [{ type: "bar", label: { show: true, position: "top" }, data: [420, 580, 760] }]`,
      stacked: `series: [{ type: "bar", stack: "total", data: [76, 92, 58] }, { type: "bar", stack: "total", data: [34, 48, 31] }]`,
      normalized: `yAxis: { max: 100 },\nseries: [{ type: "bar", stack: "total", data: [45, 52, 48] }, { type: "bar", stack: "total", data: [55, 48, 52] }]`,
      largeScale: `dataZoom: [{ type: "inside" }, { type: "slider" }],\nseries: [{ type: "bar", large: true, data: largeDataset }]`,
    };
    body = options[variant] ?? options.basic;
  } else if (kind === "radar") {
    const options: Record<string, string> = {
      singleStat: `radar: { indicator: [{ name: "Performance", max: 100 }, { name: "Accessibility", max: 100 }, { name: "SEO", max: 100 }] },\nseries: [{ type: "radar", data: [{ value: [92, 88, 78], name: "Current release" }] }]`,
      multipleStats: `radar: { indicator: [{ name: "Performance", max: 100 }, { name: "Accessibility", max: 100 }, { name: "SEO", max: 100 }] },\nseries: [{ type: "radar", data: [{ value: [92, 88, 78], name: "Current release" }, { value: [76, 82, 68], name: "Previous release" }] }]`,
      customRadar: `radar: { indicator: customIndicators },\nseries: [{ type: "radar", data: [{ value: [92, 65, 84, 72, 96], name: "Product A" }, { value: [72, 94, 70, 88, 78], name: "Product B" }] }]`,
    };
    body = options[variant] ?? options.singleStat;
  } else if (kind === "tree") {
    const options: Record<string, string> = {
      basic: `layout: "orthogonal",\norient: "LR",\nseries: [{ type: "tree", data: [treeData] }]`,
      topBottom: `layout: "orthogonal",\norient: "TB",\nseries: [{ type: "tree", data: [treeData] }]`,
      multipleTrees: `series: [{ type: "tree", data: [productTree] }, { type: "tree", data: [platformTree] }]`,
      polyline: `edgeShape: "polyline",\nseries: [{ type: "tree", data: [treeData] }]`,
      radial: `layout: "radial",\nseries: [{ type: "tree", data: [treeData] }]`,
      compactTree: `series: [{ type: "tree", data: [compactTree], initialTreeDepth: 1 }]`,
      customSymbols: `symbol: "roundRect",\nseries: [{ type: "tree", data: [treeData] }]`,
    };
    body = options[variant] ?? options.basic;
  } else if (kind === "treemap") {
    const options: Record<string, string> = {
      basic: `series: [{ type: "treemap", data: treemapData, roam: true }]`,
      gradientMapping: `visualMap: { min: 0, max: 50, inRange: { color: ["#f5f5f5", "#737373", "#171717"] } },\nseries: [{ type: "treemap", data: treemapData }]`,
      diskUsage: `series: [{ type: "treemap", data: diskUsage, levels: [{}, { itemStyle: { borderWidth: 3 } }] }]`,
    };
    body = options[variant] ?? options.basic;
  } else {
    const options: Record<string, string> = {
      basic: `series: [{ type: "sankey", data: nodes, links }]`,
      verticalSankey: `series: [{ type: "sankey", orient: "vertical", data: nodes, links }]`,
      labelSettings: `series: [{ type: "sankey", label: { position: "right", fontSize: 13 }, data: nodes, links }]`,
      leftAlign: `series: [{ type: "sankey", nodeAlign: "left", data: nodes, links }]`,
      rightAlign: `series: [{ type: "sankey", nodeAlign: "right", data: nodes, links }]`,
      gradientEdge: `series: [{ type: "sankey", lineStyle: { color: "gradient", curveness: 0.5 }, data: nodes, links }]`,
    };
    body = options[variant] ?? options.basic;
  }
  return `"use client";\n\nimport EChart from "@/components/charts/EChart";\n\nconst ${option} = {\n  tooltip: { trigger: "${kind === "pie" || kind === "radar" || kind === "tree" || kind === "treemap" || kind === "sankey" ? "item" : "axis"}" },\n  ${body}\n};\n\nexport function ${variant}${kind[0].toUpperCase()}${kind.slice(1)}Chart() {\n  return <EChart option={${option}} />;\n}`;
}

export const chartsData: Record<string, ComponentCategory> = {
  line: lineCharts,
  bar: barCharts,
  pie: pieCharts,
  radar: radarCharts,
  tree: treeCharts,
  treemap: treemapCharts,
  sankey: sankeyCharts,
};
