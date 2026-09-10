"use client";

import { useMemo } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import type { EChartsOption } from "echarts";

import EChart from "./EChart";

export type ChartKind = "line" | "bar" | "pie" | "radar" | "tree" | "treemap" | "sankey";
export type ChartVariant =
  | "basic" | "advanced" | "smooth" | "area" | "stacked" | "stackedArea" | "gradientStackedArea" | "bump"
  | "donut" | "roundedDonut" | "nightingale" | "specialLabels" | "nested"
  | "singleBar" | "waterfall" | "negative" | "rotatedLabels" | "normalized" | "largeScale"
  | "singleStat" | "multipleStats" | "customRadar"
  | "topBottom" | "multipleTrees" | "polyline" | "radial" | "compactTree" | "customSymbols"
  | "gradientMapping" | "diskUsage"
  | "verticalSankey" | "labelSettings" | "leftAlign" | "rightAlign" | "gradientEdge";

type ChartExamplesProps = { kind: ChartKind; variant: ChartVariant };
type ChartTheme = { isDark: boolean; textColor: string; axisColor: string; tooltipBackground: string; colors: [string, string, string] };

export default function ChartExample({ kind, variant }: ChartExamplesProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const option = useMemo(() => createOption(kind, variant, {
    isDark,
    textColor: isDark ? "#a3a3a3" : "#737373",
    axisColor: isDark ? "#404040" : "#e5e5e5",
    tooltipBackground: isDark ? "#171717" : "#ffffff",
    colors: isDark ? ["#f5f5f5", "#a3a3a3", "#525252"] : ["#171717", "#525252", "#a3a3a3"],
  }), [isDark, kind, variant]);
  return <EChart option={option} />;
}

function createOption(kind: ChartKind, variant: ChartVariant, theme: ChartTheme): EChartsOption {
  if (kind === "line") return createLineOption(variant, theme);
  if (kind === "bar") return createBarOption(variant, theme);
  if (kind === "pie") return createPieOption(variant, theme);
  if (kind === "radar") return createRadarOption(variant, theme);
  if (kind === "tree") return createTreeOption(variant, theme);
  if (kind === "treemap") return createTreemapOption(variant, theme);
  return createSankeyOption(variant, theme);
}

function shared(theme: ChartTheme, trigger: "axis" | "item" = "axis") {
  return { tooltip: { trigger, backgroundColor: theme.tooltipBackground, borderColor: theme.axisColor, textStyle: { color: theme.isDark ? "#fff" : "#171717" } } };
}

function axes(theme: ChartTheme, categories: string[], rotate = 0) {
  return {
    xAxis: { type: "category" as const, data: categories, axisLabel: { color: theme.textColor, rotate }, axisLine: { lineStyle: { color: theme.axisColor } } },
    yAxis: { type: "value" as const, axisLabel: { color: theme.textColor }, splitLine: { lineStyle: { color: theme.axisColor } } },
  };
}

function createLineOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const area = theme.isDark ? "rgba(245, 245, 245, 0.16)" : "rgba(23, 23, 23, 0.12)";
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const smooth = variant === "smooth" || variant === "area" || variant === "stackedArea" || variant === "gradientStackedArea";
  const stacked = variant === "stacked" || variant === "stackedArea" || variant === "gradientStackedArea";
  const withArea = variant === "area" || variant === "stackedArea" || variant === "gradientStackedArea";

  if (variant === "bump") {
    return {
      ...shared(theme), legend: { textStyle: { color: theme.textColor } }, grid: { left: 12, right: 12, top: 42, bottom: 8, containLabel: true },
      xAxis: { type: "category", data: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"], axisLabel: { color: theme.textColor }, axisLine: { lineStyle: { color: theme.axisColor } } },
      yAxis: { type: "value", min: 1, max: 5, inverse: true, interval: 1, axisLabel: { color: theme.textColor }, splitLine: { lineStyle: { color: theme.axisColor } } },
      series: [{ name: "Product A", type: "line", data: [4, 3, 3, 2, 1], symbolSize: 12, lineStyle: { width: 3, color: primary }, itemStyle: { color: primary } }, { name: "Product B", type: "line", data: [2, 2, 1, 3, 4], symbolSize: 12, lineStyle: { width: 3, color: secondary }, itemStyle: { color: secondary } }, { name: "Product C", type: "line", data: [1, 4, 4, 4, 3], symbolSize: 12, lineStyle: { width: 3, color: tertiary }, itemStyle: { color: tertiary } }],
    };
  }

  const line = (name: string, data: number[], color: string, areaStyle?: object) => ({ name, type: "line" as const, smooth, data, lineStyle: { width: 3, color }, itemStyle: { color }, areaStyle });
  const series = stacked
    ? [line("Desktop", [420, 680, 540, 890, 760, 1120, 980], primary, withArea ? { color: variant === "gradientStackedArea" ? { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: area }, { offset: 1, color: "rgba(0,0,0,0)" }] } : area } : undefined), line("Mobile", [220, 380, 280, 460, 410, 620, 560], secondary, withArea ? { color: theme.isDark ? "rgba(163, 163, 163, 0.14)" : "rgba(82, 82, 82, 0.1)" } : undefined)].map((item) => ({ ...item, stack: "total" }))
    : [line("Visitors", [420, 680, 540, 890, 760, 1120, 980], primary, withArea ? { color: area } : undefined)];

  return {
    ...shared(theme), legend: stacked ? { textStyle: { color: theme.textColor } } : undefined, grid: { left: 12, right: 12, top: stacked ? 42 : 24, bottom: 8, containLabel: true },
    xAxis: { type: "category", boundaryGap: false, data: labels, axisLabel: { color: theme.textColor }, axisLine: { lineStyle: { color: theme.axisColor } } },
    yAxis: { type: "value", axisLabel: { color: theme.textColor }, splitLine: { lineStyle: { color: theme.axisColor } } }, series,
  };
}

function createPieOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const colors = [primary, secondary, tertiary, theme.isDark ? "#d4d4d4" : "#262626", theme.isDark ? "#737373" : "#d4d4d4"];
  const data = [{ value: 1048, name: "Direct" }, { value: 735, name: "Search" }, { value: 580, name: "Social" }, { value: 484, name: "Referral" }, { value: 300, name: "Email" }].map((item, index) => ({ ...item, itemStyle: { color: colors[index] } }));
  const border = { borderColor: theme.isDark ? "#0a0a0a" : "#fff", borderWidth: 3 };

  if (variant === "nested") {
    return { ...shared(theme, "item"), legend: { bottom: 0, textStyle: { color: theme.textColor } }, series: [{ name: "Inner ring", type: "pie", radius: ["28%", "45%"], label: { color: theme.textColor }, itemStyle: border, data: data.slice(0, 3) }, { name: "Outer ring", type: "pie", radius: ["52%", "74%"], label: { color: theme.textColor }, itemStyle: border, data }] };
  }
  if (variant === "nightingale") {
    return { ...shared(theme, "item"), legend: { bottom: 0, textStyle: { color: theme.textColor } }, series: [{ name: "Traffic source", type: "pie", roseType: "area", radius: ["18%", "72%"], itemStyle: border, label: { color: theme.textColor }, data }] };
  }
  return {
    ...shared(theme, "item"), legend: { bottom: 0, textStyle: { color: theme.textColor } },
    series: [{ name: "Traffic source", type: "pie", radius: variant === "basic" || variant === "specialLabels" ? "62%" : ["42%", "70%"], center: ["50%", "45%"], itemStyle: variant === "roundedDonut" ? { ...border, borderRadius: 10 } : border, label: variant === "specialLabels" ? { color: theme.textColor, formatter: "{b|{b}}\\n{c} ({d}%)", rich: { b: { fontWeight: "bold", color: theme.textColor } } } : { color: theme.textColor }, data: variant === "basic" ? data.slice(0, 3) : data }],
  };
}

function createBarOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const base = { ...shared(theme), grid: { left: 12, right: 12, top: 42, bottom: 8, containLabel: true }, legend: { textStyle: { color: theme.textColor } } };
  if (variant === "waterfall") return { ...base, ...axes(theme, ["Start", "Q1", "Q2", "Q3", "Q4", "End"]), series: [{ name: "Base", type: "bar", stack: "total", itemStyle: { color: "transparent" }, data: [0, 100, 140, 90, 150, 0] }, { name: "Increase", type: "bar", stack: "total", itemStyle: { color: primary }, data: [100, 40, 0, 60, 0, 250] }, { name: "Decrease", type: "bar", stack: "total", itemStyle: { color: tertiary }, data: [0, 0, -50, 0, -20, 0] }] };
  if (variant === "negative") return { ...base, ...axes(theme, ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]), series: [{ name: "Gain / loss", type: "bar", barMaxWidth: 34, data: [42, -28, 56, -18, 34, -12].map((value) => ({ value, itemStyle: { color: value >= 0 ? primary : tertiary } })) }] };
  if (variant === "rotatedLabels") return { ...base, ...axes(theme, ["North America", "South America", "Europe", "Asia Pacific", "Middle East", "Africa"], 35), series: [{ name: "Orders", type: "bar", barMaxWidth: 34, data: [420, 310, 580, 760, 230, 190], itemStyle: { color: primary, borderRadius: [5, 5, 0, 0] }, label: { show: true, position: "top", color: theme.textColor } }] };
  if (variant === "largeScale") { const categories = Array.from({ length: 40 }, (_, index) => `Item ${index + 1}`); return { ...base, dataZoom: [{ type: "inside" }, { type: "slider", textStyle: { color: theme.textColor } }], ...axes(theme, categories), series: [{ name: "Value", type: "bar", large: true, data: categories.map((_, index) => 100 + ((index * 47) % 400)), itemStyle: { color: primary } }] }; }
  if (variant === "normalized") return { ...base, ...axes(theme, ["Q1", "Q2", "Q3", "Q4"]), yAxis: { type: "value", max: 100, axisLabel: { color: theme.textColor, formatter: "{value}%" }, splitLine: { lineStyle: { color: theme.axisColor } } }, series: [{ name: "Returning", type: "bar", stack: "total", data: [45, 52, 48, 60], itemStyle: { color: primary } }, { name: "New", type: "bar", stack: "total", data: [55, 48, 52, 40], itemStyle: { color: secondary } }] };
  if (variant === "stacked") return { ...base, ...axes(theme, ["Design", "Engineering", "Marketing", "Support"]), series: [{ name: "Completed", type: "bar", stack: "total", data: [76, 92, 58, 64], itemStyle: { color: primary } }, { name: "In progress", type: "bar", stack: "total", data: [34, 48, 31, 42], itemStyle: { color: secondary } }, { name: "Blocked", type: "bar", stack: "total", data: [8, 12, 5, 10], itemStyle: { color: tertiary } }] };
  if (variant === "singleBar") return { ...base, legend: undefined, ...axes(theme, ["Design", "Engineering", "Marketing", "Support"]), series: [{ name: "Completed", type: "bar", data: [76, 92, 58, 64], itemStyle: { color: primary, borderRadius: [6, 6, 0, 0] } }] };
  return { ...base, legend: variant === "advanced" ? base.legend : undefined, ...axes(theme, ["Design", "Engineering", "Marketing", "Support"]), series: [{ name: "Completed", type: "bar", barMaxWidth: 32, data: [76, 92, 58, 64], itemStyle: { color: primary, borderRadius: [5, 5, 0, 0] } }] };
}

function createRadarOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const indicator = [{ name: "Performance", max: 100 }, { name: "Accessibility", max: 100 }, { name: "Best practices", max: 100 }, { name: "SEO", max: 100 }, { name: "UX", max: 100 }];
  const radar = { indicator, axisName: { color: theme.textColor }, splitLine: { lineStyle: { color: theme.axisColor } }, splitArea: { areaStyle: { color: theme.isDark ? ["#171717", "#111111"] : ["#fafafa", "#f5f5f5"] } }, axisLine: { lineStyle: { color: theme.axisColor } } };
  const make = (value: number[], name: string, color: string, fill = false) => ({ value, name, lineStyle: { color, width: 3 }, itemStyle: { color }, areaStyle: fill ? { color: theme.isDark ? "rgba(245,245,245,0.2)" : "rgba(23,23,23,0.12)" } : undefined });
  const data = variant === "singleStat" || variant === "basic" ? [make([92, 88, 94, 78, 90], "Current release", primary, true)] : variant === "customRadar" ? [make([92, 65, 84, 72, 96], "Product A", primary), make([72, 94, 70, 88, 78], "Product B", secondary), make([80, 76, 92, 64, 84], "Product C", tertiary)] : [make([92, 88, 94, 78, 90], "Current release", primary, true), make([76, 82, 80, 68, 74], "Previous release", secondary, true)];
  return { ...shared(theme, "item"), legend: { bottom: 0, textStyle: { color: theme.textColor } }, radar, series: [{ type: "radar", data }] };
}

function createTreeOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const tree = {
    name: "Joy UI",
    children: [
      { name: "Components", children: [{ name: "Buttons" }, { name: "Inputs" }, { name: "Charts" }] },
      { name: "Patterns", children: [{ name: "Navigation" }, { name: "Feedback" }] },
    ],
  };
  const treeSeries = (data: object, layout: "orthogonal" | "radial", orient: "LR" | "TB" = "LR", edgeShape: "curve" | "polyline" = "curve") => ({
    type: "tree" as const,
    data: [data],
    layout,
    orient,
    edgeShape,
    roam: true,
    initialTreeDepth: -1,
    symbol: "emptyCircle",
    symbolSize: 9,
    lineStyle: { color: primary, width: 1.5 },
    itemStyle: { color: theme.isDark ? "#0a0a0a" : "#fff", borderColor: primary, borderWidth: 2 },
    label: { color: theme.textColor, fontSize: 12 },
    leaves: { label: { color: theme.textColor } },
  });

  if (variant === "topBottom") return { ...shared(theme, "item"), series: [treeSeries(tree, "orthogonal", "TB")] };
  if (variant === "polyline") return { ...shared(theme, "item"), series: [treeSeries(tree, "orthogonal", "LR", "polyline")] };
  if (variant === "radial") return { ...shared(theme, "item"), series: [treeSeries(tree, "radial")] };
  if (variant === "multipleTrees") return { ...shared(theme, "item"), series: [treeSeries({ name: "Product", children: [{ name: "Web" }, { name: "Mobile" }] }, "orthogonal", "LR"), treeSeries({ name: "Platform", children: [{ name: "API" }, { name: "Data" }] }, "orthogonal", "TB")] };
  if (variant === "compactTree") return { ...shared(theme, "item"), series: [treeSeries({ name: "Workspace", children: [{ name: "Design", children: [{ name: "Tokens" }, { name: "Themes" }] }, { name: "Engineering", children: [{ name: "Web" }, { name: "API" }] }] }, "orthogonal", "LR")] };
  if (variant === "customSymbols") return { ...shared(theme, "item"), series: [{ ...treeSeries(tree, "orthogonal", "LR"), symbol: "roundRect", symbolSize: 14, lineStyle: { color: secondary, width: 2 }, itemStyle: { color: theme.isDark ? "#262626" : "#f5f5f5", borderColor: tertiary, borderWidth: 2 } }] };
  return { ...shared(theme, "item"), series: [treeSeries(tree, "orthogonal", "LR")] };
}

function createTreemapOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const data = [
    { name: "Components", value: 42, children: [{ name: "Buttons", value: 16 }, { name: "Inputs", value: 14 }, { name: "Charts", value: 12 }] },
    { name: "Patterns", value: 30, children: [{ name: "Navigation", value: 18 }, { name: "Feedback", value: 12 }] },
    { name: "Utilities", value: 18 },
    { name: "Creative", value: 10 },
  ];
  const base = {
    ...shared(theme, "item"),
    series: [{ type: "treemap" as const, roam: true, nodeClick: "zoomToNode" as const, breadcrumb: { show: true, itemStyle: { color: theme.isDark ? "#262626" : "#f5f5f5", textStyle: { color: theme.textColor } } }, label: { color: theme.textColor, show: true }, itemStyle: { borderColor: theme.isDark ? "#0a0a0a" : "#fff", borderWidth: 2, gapWidth: 2 }, data }],
  };

  if (variant === "gradientMapping") {
    return { ...base, visualMap: { min: 0, max: 50, calculable: true, orient: "horizontal", left: "center", bottom: 0, textStyle: { color: theme.textColor }, inRange: { color: theme.isDark ? ["#525252", "#a3a3a3", "#f5f5f5"] : ["#f5f5f5", "#737373", "#171717"] } }, series: [{ ...base.series[0], visualMin: 0, visualMax: 50 }] };
  }
  if (variant === "diskUsage") {
    const diskData = [{ name: "System", value: 18, children: [{ name: "Applications", value: 10 }, { name: "Libraries", value: 8 }] }, { name: "Projects", value: 52, children: [{ name: "Joy UI", value: 28 }, { name: "CSS Chanakya", value: 14 }, { name: "Archives", value: 10 }] }, { name: "Media", value: 24 }, { name: "Free", value: 6 }];
    return { ...base, series: [{ ...base.series[0], data: diskData, levels: [{}, { itemStyle: { borderColor: primary, borderWidth: 3, gapWidth: 3 }, color: [primary, secondary, tertiary] }, { itemStyle: { borderColor: theme.axisColor, borderWidth: 1, gapWidth: 1 } }] }] };
  }
  return { ...base, series: [{ ...base.series[0], levels: [{}, { itemStyle: { borderColor: primary, borderWidth: 3, gapWidth: 3 }, color: [primary, secondary, tertiary] }] }] };
}

function createSankeyOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const nodes = [{ name: "Visitors" }, { name: "Landing page" }, { name: "Documentation" }, { name: "Components" }, { name: "Examples" }, { name: "Install" }];
  const links = [{ source: "Visitors", target: "Landing page", value: 80 }, { source: "Visitors", target: "Documentation", value: 55 }, { source: "Landing page", target: "Components", value: 62 }, { source: "Documentation", target: "Examples", value: 40 }, { source: "Components", target: "Install", value: 38 }, { source: "Examples", target: "Install", value: 25 }];
  const nodeAlign = variant === "leftAlign" ? "left" : variant === "rightAlign" ? "right" : "justify";
  const node = (name: string, index: number) => ({ name, itemStyle: { color: [primary, secondary, tertiary][index % 3] } });
  const edgeStyle = variant === "gradientEdge" ? { color: "gradient" as const, curveness: 0.5 } : { color: "source" as const, curveness: 0.5 };
  return {
    ...shared(theme, "item"),
    series: [{ type: "sankey" as const, orient: variant === "verticalSankey" ? "vertical" : "horizontal", left: "4%", right: "4%", top: 20, bottom: 30, nodeAlign, nodeGap: 14, nodeWidth: 18, draggable: true, emphasis: { focus: "adjacency" as const }, label: { color: theme.textColor, fontSize: variant === "labelSettings" ? 13 : 12, position: variant === "labelSettings" ? "right" : "inside" }, lineStyle: edgeStyle, data: nodes.map((item, index) => node(item.name, index)), links }],
  };
}
