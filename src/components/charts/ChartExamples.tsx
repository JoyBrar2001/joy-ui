"use client";

import { useMemo } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import type { EChartsOption } from "echarts";

import EChart from "./EChart";

export type ChartKind = "line" | "bar" | "pie" | "radar" | "tree" | "treemap" | "sankey" | "sunburst" | "parallel" | "funnel" | "calendar" | "chord" | "candlestick";
export type ChartVariant =
  | "basic" | "advanced" | "smooth" | "area" | "stacked" | "stackedArea" | "gradientStackedArea" | "bump"
  | "donut" | "roundedDonut" | "nightingale" | "specialLabels" | "nested"
  | "singleBar" | "waterfall" | "negative" | "rotatedLabels" | "normalized" | "largeScale"
  | "singleStat" | "multipleStats" | "customRadar"
  | "topBottom" | "multipleTrees" | "polyline" | "radial" | "compactTree" | "customSymbols"
  | "gradientMapping" | "diskUsage"
  | "verticalSankey" | "labelSettings" | "leftAlign" | "rightAlign" | "gradientEdge"
  | "roundedEdges" | "labelRotate" | "largeSunburst"
  | "parallelBasic" | "parallelComparison" | "parallelMetrics"
  | "upsideDown" | "compareFunnels" | "customFunnel" | "multipleFunnels"
  | "simpleCalendar" | "heatmapCalendar" | "calendarGraph" | "calendarLunar" | "calendarCharts" | "customCalendar" | "calendarPies"
  | "chordBasic" | "chordDirectional" | "chordWeighted" | "chordDense" | "chordEmphasis"
  | "candlestickBasic" | "movingAverage" | "volumeCandlestick" | "zoomCandlestick" | "styledCandlestick";

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
  if (kind === "sankey") return createSankeyOption(variant, theme);
  if (kind === "sunburst") return createSunburstOption(variant, theme);
  if (kind === "parallel") return createParallelOption(variant, theme);
  if (kind === "funnel") return createFunnelOption(variant, theme);
  if (kind === "calendar") return createCalendarOption(variant, theme);
  if (kind === "chord") return createChordOption(variant, theme);
  return createCandlestickOption(variant, theme);
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
      ...shared(theme), legend: { bottom: 0, textStyle: { color: theme.textColor } }, grid: { left: 12, right: 12, top: 24, bottom: 48, containLabel: true },
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
      ...shared(theme), legend: stacked ? { bottom: 0, textStyle: { color: theme.textColor } } : undefined, grid: { left: 12, right: 12, top: stacked ? 24 : 24, bottom: stacked ? 48 : 8, containLabel: true },
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
  const base = { ...shared(theme), grid: { left: 12, right: 12, top: 24, bottom: 52, containLabel: true }, legend: { bottom: 0, textStyle: { color: theme.textColor } } };
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
    label: { color: theme.textColor, fontSize: 12, position: "top" as const, distance: 8 },
    leaves: { label: { color: theme.textColor, position: "top" as const, distance: 8 } },
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

function createSunburstOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const palette = [primary, secondary, tertiary, theme.isDark ? "#d4d4d4" : "#262626", theme.isDark ? "#737373" : "#d4d4d4"];
  const children = variant === "largeSunburst"
    ? Array.from({ length: 180 }, (_, index) => ({ name: `Entry ${index + 1}`, value: (index % 9) + 1 }))
    : [{ name: "Buttons", value: 16 }, { name: "Inputs", value: 14 }, { name: "Charts", value: 12 }];
  const data = [{ name: "UI Components", children }, { name: "Patterns", children: [{ name: "Navigation", value: 18 }, { name: "Feedback", value: 12 }] }, { name: "Utilities", value: 18 }];
  return {
    ...shared(theme, "item"),
    series: [{ type: "sunburst" as const, radius: ["10%", "86%"], sort: variant === "largeSunburst" ? undefined : "desc", nodeClick: "rootToNode" as const, data, label: { color: theme.textColor, rotate: variant === "labelRotate" ? "radial" : "tangential" }, itemStyle: { borderColor: theme.isDark ? "#0a0a0a" : "#fff", borderWidth: 2, borderRadius: variant === "roundedEdges" ? 8 : 0 }, levels: [{}, { r0: "10%", r: "42%", itemStyle: { color: palette[0] } }, { r0: "42%", r: "70%", itemStyle: { color: palette[1] } }, { r0: "70%", itemStyle: { color: palette[2] } }] }],
  };
}

function createParallelOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const dimensions = ["Performance", "Accessibility", "SEO", "UX"];
  const rows = variant === "parallelMetrics" ? [[92, 88, 78, 90], [72, 94, 88, 76], [84, 76, 92, 86], [64, 82, 70, 94]] : [[92, 88, 78, 90], [76, 82, 68, 74], [84, 74, 88, 82]];
  return { ...shared(theme, "axis"), parallelAxis: dimensions.map((name, dim) => ({ dim, name, min: 0, max: 100, axisLabel: { color: theme.textColor }, nameTextStyle: { color: theme.textColor } })), parallel: { left: "8%", right: "8%", bottom: "12%", top: "16%" }, series: [{ type: "parallel" as const, lineStyle: { width: 2, color: variant === "parallelComparison" ? secondary : primary, opacity: 0.8 }, data: rows.map((row, index) => ({ value: row, lineStyle: { color: [primary, secondary, tertiary][index % 3] } })) }] };
}

function createFunnelOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const funnelData = [{ name: "Visitors", value: 100 }, { name: "Sign ups", value: 72 }, { name: "Trials", value: 48 }, { name: "Customers", value: 26 }];
  const series = (data: typeof funnelData, left = "10%", width = "80%") => ({ type: "funnel" as const, left, width, top: 24, bottom: 24, min: 0, max: 100, minSize: "0%", maxSize: "100%", sort: variant === "upsideDown" ? "ascending" as const : "descending" as const, gap: 3, label: { color: theme.textColor, position: variant === "customFunnel" ? "inside" as const : "right" as const }, itemStyle: { borderColor: theme.isDark ? "#0a0a0a" : "#fff", borderWidth: 2 }, data });
  if (variant === "compareFunnels") return { ...shared(theme, "item"), legend: { bottom: 0, textStyle: { color: theme.textColor } }, series: [{ ...series(funnelData, "4%", "42%"), name: "Current", data: funnelData }, { ...series(funnelData.map((item, index) => ({ ...item, value: [92, 62, 36, 18][index] })), "54%", "42%"), name: "Previous", data: funnelData.map((item, index) => ({ ...item, value: [92, 62, 36, 18][index] })) }] };
  if (variant === "multipleFunnels") return { ...shared(theme, "item"), legend: { bottom: 0, textStyle: { color: theme.textColor } }, series: [{ ...series(funnelData.slice(0, 3), "4%", "28%"), name: "Product", data: funnelData.slice(0, 3) }, { ...series(funnelData.slice(1), "36%", "28%"), name: "Marketing", data: funnelData.slice(1) }, { ...series(funnelData.slice(0, 3).map((item, index) => ({ ...item, value: [80, 46, 20][index] })), "68%", "28%"), name: "Sales", data: funnelData.slice(0, 3).map((item, index) => ({ ...item, value: [80, 46, 20][index] })) }] };
  return { ...shared(theme, "item"), series: [{ ...series(funnelData), data: variant === "customFunnel" ? funnelData.map((item, index) => ({ ...item, itemStyle: { color: [primary, secondary, tertiary, theme.isDark ? "#d4d4d4" : "#262626"][index] } })) : funnelData }] };
}

function createCalendarOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const year = 2025;
  const dates = Array.from({ length: 180 }, (_, index) => { const date = new Date(Date.UTC(year, 0, index + 1)); return [date.toISOString().slice(0, 10), (index * 13) % 50]; });
  const cellSize: [number | "auto", number | "auto"] = variant === "customCalendar" ? [16, 16] : ["auto", 16];
  const calendar = { range: variant === "calendarLunar" ? ["2025-02-01", "2026-01-31"] : year, cellSize, top: 28, left: 32, right: 18, bottom: 36, splitLine: { lineStyle: { color: theme.axisColor } }, itemStyle: { borderWidth: 2, borderColor: theme.isDark ? "#0a0a0a" : "#fff" }, yearLabel: { color: theme.textColor }, monthLabel: { color: theme.textColor }, dayLabel: { color: theme.textColor } };
  const seriesType = variant === "calendarGraph" ? "scatter" as const : "heatmap" as const;
  const series = { type: seriesType, coordinateSystem: "calendar" as const, calendarIndex: 0, symbolSize: variant === "calendarGraph" ? 10 : undefined, itemStyle: { color: primary }, data: dates };
  if (variant === "calendarPies") return { ...shared(theme, "item"), visualMap: { min: 0, max: 50, show: false, inRange: { color: [theme.isDark ? "#404040" : "#f5f5f5", secondary, primary] } }, calendar, series: [series, { type: "scatter", coordinateSystem: "calendar", calendarIndex: 0, symbol: "circle", symbolSize: 14, itemStyle: { color: tertiary }, data: dates.filter((_, index) => index % 21 === 0) }] };
  return { ...shared(theme, "item"), visualMap: { min: 0, max: 50, calculable: true, orient: "horizontal", left: "center", bottom: 0, textStyle: { color: theme.textColor }, inRange: { color: [theme.isDark ? "#404040" : "#f5f5f5", secondary, primary] } }, calendar, series: [series] };
}

function createChordOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary, tertiary] = theme.colors;
  const nodes = ["Design", "Engineering", "Marketing", "Support", "Research"].map((name) => ({ name }));
  const links = [{ source: "Design", target: "Engineering", value: 18 }, { source: "Design", target: "Marketing", value: 10 }, { source: "Engineering", target: "Support", value: 14 }, { source: "Marketing", target: "Support", value: 8 }, { source: "Research", target: "Design", value: 12 }, { source: "Research", target: "Engineering", value: 9 }];
  const extra = variant === "chordDense" ? [{ source: "Support", target: "Research", value: 11 }, { source: "Marketing", target: "Research", value: 7 }] : [];
  return { ...shared(theme, "item"), legend: { bottom: 0, textStyle: { color: theme.textColor } }, series: [{ type: "graph" as const, layout: "circular", circular: { rotateLabel: variant === "chordEmphasis" }, data: nodes.map((node, index) => ({ ...node, symbolSize: variant === "chordEmphasis" && index === 0 ? 18 : 12, itemStyle: { color: [primary, secondary, tertiary][index % 3] } })), links: [...links, ...extra], roam: true, label: { color: theme.textColor }, lineStyle: { color: variant === "chordDirectional" ? "source" as const : "gradient" as const, curveness: 0.2, opacity: 0.7 }, emphasis: { focus: "adjacency" as const } }] };
}

function createCandlestickOption(variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const [primary, secondary] = theme.colors;
  const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
  const values = [[20, 34, 18, 38], [30, 28, 22, 36], [28, 35, 26, 42], [35, 32, 24, 39], [31, 40, 29, 45], [39, 44, 34, 48], [44, 42, 37, 51], [42, 48, 39, 53], [48, 46, 40, 56], [46, 54, 43, 60]];
  const base = { ...shared(theme), grid: [{ left: 12, right: 12, top: 24, height: variant === "volumeCandlestick" ? "58%" : "76%", containLabel: true }], xAxis: [{ type: "category" as const, data: categories, axisLabel: { color: theme.textColor }, axisLine: { lineStyle: { color: theme.axisColor } } }], yAxis: [{ type: "value" as const, axisLabel: { color: theme.textColor }, splitLine: { lineStyle: { color: theme.axisColor } } }] };
  const series: Array<Record<string, unknown>> = [{ type: "candlestick", data: values, itemStyle: { color: primary, color0: secondary, borderColor: primary, borderColor0: secondary } }];
  if (variant === "movingAverage") series.push({ type: "line", data: values.map((item) => (item[0] + item[1]) / 2), lineStyle: { color: theme.isDark ? "#d4d4d4" : "#262626", width: 2 }, symbol: "none" });
  if (variant === "volumeCandlestick") series.push({ type: "bar", xAxisIndex: 0, yAxisIndex: 0, data: values.map((item, index) => (item[1] - item[0]) * 100 + index * 20), itemStyle: { color: tertiary(theme) } });
  return { ...base, dataZoom: variant === "zoomCandlestick" ? [{ type: "inside" }, { type: "slider", textStyle: { color: theme.textColor } }] : undefined, series };
}

function tertiary(theme: ChartTheme) { return theme.colors[2]; }
