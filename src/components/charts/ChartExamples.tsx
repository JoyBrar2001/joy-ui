"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import type { EChartsOption } from "echarts";

import EChart from "./EChart";

export type ChartKind = "line" | "bar" | "pie" | "radar";
export type ChartVariant =
  | "basic"
  | "advanced"
  | "smooth"
  | "area"
  | "stacked"
  | "stackedArea"
  | "gradientStackedArea"
  | "bump";

type ChartExamplesProps = {
  kind: ChartKind;
  variant: ChartVariant;
};

export default function ChartExample({ kind, variant }: ChartExamplesProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const textColor = isDark ? "#a3a3a3" : "#737373";
  const axisColor = isDark ? "#404040" : "#e5e5e5";
  const tooltipBackground = isDark ? "#171717" : "#ffffff";
  const option = useMemo(
    () => createOption(kind, variant, { isDark, textColor, axisColor, tooltipBackground }),
    [axisColor, isDark, kind, textColor, tooltipBackground, variant]
  );

  return <EChart option={option} />;
}

type ChartTheme = {
  isDark: boolean;
  textColor: string;
  axisColor: string;
  tooltipBackground: string;
};

function createOption(kind: ChartKind, variant: ChartVariant, theme: ChartTheme): EChartsOption {
  const { isDark, textColor, axisColor, tooltipBackground } = theme;
  const tooltip = { backgroundColor: tooltipBackground, borderColor: axisColor, textStyle: { color: isDark ? "#fff" : "#171717" } };

  if (kind === "line") {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const primary = isDark ? "#f5f5f5" : "#171717";
    const secondary = isDark ? "#a3a3a3" : "#525252";
    const tertiary = isDark ? "#525252" : "#a3a3a3";
    const area = isDark ? "rgba(245, 245, 245, 0.16)" : "rgba(23, 23, 23, 0.12)";
    const isSmooth = variant === "smooth" || variant === "area" || variant === "stackedArea" || variant === "gradientStackedArea";
    const isStacked = variant === "stacked" || variant === "stackedArea" || variant === "gradientStackedArea";
    const isArea = variant === "area" || variant === "stackedArea" || variant === "gradientStackedArea";

    if (variant === "bump") {
      return {
        tooltip: { ...tooltip, trigger: "axis" },
        legend: { textStyle: { color: textColor } },
        grid: { left: 12, right: 12, top: 42, bottom: 8, containLabel: true },
        xAxis: { type: "category", data: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"], axisLabel: { color: textColor }, axisLine: { lineStyle: { color: axisColor } } },
        yAxis: { type: "value", min: 1, max: 5, inverse: true, interval: 1, axisLabel: { color: textColor }, splitLine: { lineStyle: { color: axisColor } } },
        series: [{ name: "Product A", type: "line", data: [4, 3, 3, 2, 1], symbolSize: 12, lineStyle: { width: 3, color: primary }, itemStyle: { color: primary } }, { name: "Product B", type: "line", data: [2, 2, 1, 3, 4], symbolSize: 12, lineStyle: { width: 3, color: secondary }, itemStyle: { color: secondary } }, { name: "Product C", type: "line", data: [1, 4, 4, 4, 3], symbolSize: 12, lineStyle: { width: 3, color: tertiary }, itemStyle: { color: tertiary } }],
      };
    }

    return {
      tooltip: { ...tooltip, trigger: "axis" },
      legend: isStacked ? { textStyle: { color: textColor } } : undefined,
      grid: { left: 12, right: 12, top: isStacked ? 42 : 24, bottom: 8, containLabel: true },
      xAxis: { type: "category", boundaryGap: false, data: labels, axisLabel: { color: textColor }, axisLine: { lineStyle: { color: axisColor } } },
      yAxis: { type: "value", axisLabel: { color: textColor }, splitLine: { lineStyle: { color: axisColor } } },
      series: isStacked
        ? [{ name: "Desktop", type: "line", stack: "total", smooth: isSmooth, data: [420, 680, 540, 890, 760, 1120, 980], lineStyle: { width: 3, color: primary }, itemStyle: { color: primary }, areaStyle: isArea ? { color: variant === "gradientStackedArea" ? { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: area }, { offset: 1, color: "rgba(0,0,0,0)" }] } : area } : undefined }, { name: "Mobile", type: "line", stack: "total", smooth: isSmooth, data: [220, 380, 280, 460, 410, 620, 560], lineStyle: { width: 3, color: secondary }, itemStyle: { color: secondary }, areaStyle: isArea ? { color: isDark ? "rgba(163, 163, 163, 0.14)" : "rgba(82, 82, 82, 0.1)" } : undefined }]
        : [{ name: "Visitors", type: "line", smooth: isSmooth, data: [420, 680, 540, 890, 760, 1120, 980], lineStyle: { width: 3, color: primary }, itemStyle: { color: primary }, areaStyle: isArea ? { color: area } : undefined }],
    };
  }

  if (kind === "bar") {
    const categories = variant === "basic" ? ["Design", "Engineering", "Marketing", "Support"] : ["Q1", "Q2", "Q3", "Q4"];
    return {
      tooltip: { ...tooltip, trigger: "axis" },
      legend: { textStyle: { color: textColor } },
      grid: { left: 12, right: 12, top: 42, bottom: 8, containLabel: true },
      xAxis: { type: "category", data: categories, axisLabel: { color: textColor }, axisLine: { lineStyle: { color: axisColor } } },
      yAxis: { type: "value", axisLabel: { color: textColor }, splitLine: { lineStyle: { color: axisColor } } },
      series: variant === "basic"
        ? [{ name: "Completed", type: "bar", barMaxWidth: 32, data: [76, 92, 58, 64], itemStyle: { color: "#8b5cf6", borderRadius: [5, 5, 0, 0] } }]
        : [{ name: "Revenue", type: "bar", barMaxWidth: 26, data: [120, 180, 156, 224], itemStyle: { color: "#8b5cf6", borderRadius: [5, 5, 0, 0] } }, { name: "Expenses", type: "bar", barMaxWidth: 26, data: [80, 110, 98, 130], itemStyle: { color: "#22d3ee", borderRadius: [5, 5, 0, 0] } }],
    };
  }

  if (kind === "pie") {
    const data = variant === "basic"
      ? [{ value: 1048, name: "Direct", itemStyle: { color: "#8b5cf6" } }, { value: 735, name: "Search", itemStyle: { color: "#06b6d4" } }, { value: 580, name: "Social", itemStyle: { color: "#f59e0b" } }]
      : [{ value: 1048, name: "Direct", itemStyle: { color: "#8b5cf6" } }, { value: 735, name: "Search", itemStyle: { color: "#06b6d4" } }, { value: 580, name: "Social", itemStyle: { color: "#f59e0b" } }, { value: 484, name: "Referral", itemStyle: { color: "#10b981" } }];
    return { tooltip: { ...tooltip, trigger: "item" }, legend: { bottom: 0, textStyle: { color: textColor } }, series: [{ name: "Traffic source", type: "pie", radius: variant === "basic" ? "62%" : ["42%", "70%"], center: ["50%", "45%"], itemStyle: { borderColor: isDark ? "#0a0a0a" : "#fff", borderWidth: 3 }, label: { color: textColor }, data }] };
  }

  return {
    tooltip: { ...tooltip, trigger: "item" },
    legend: { bottom: 0, textStyle: { color: textColor } },
    radar: { indicator: [{ name: "Performance", max: 100 }, { name: "Accessibility", max: 100 }, { name: "Best practices", max: 100 }, { name: "SEO", max: 100 }, { name: "UX", max: 100 }], axisName: { color: textColor }, splitLine: { lineStyle: { color: axisColor } }, splitArea: { areaStyle: { color: isDark ? ["#171717", "#111111"] : ["#fafafa", "#f5f5f5"] } }, axisLine: { lineStyle: { color: axisColor } } },
    series: [{ type: "radar", data: variant === "basic" ? [{ value: [92, 88, 94, 78, 90], name: "Current release", lineStyle: { color: "#8b5cf6", width: 3 }, itemStyle: { color: "#8b5cf6" }, areaStyle: { color: "rgba(139, 92, 246, 0.24)" } }] : [{ value: [92, 88, 94, 78, 90], name: "Current release", lineStyle: { color: "#8b5cf6", width: 3 }, itemStyle: { color: "#8b5cf6" }, areaStyle: { color: "rgba(139, 92, 246, 0.24)" } }, { value: [76, 82, 80, 68, 74], name: "Previous release", lineStyle: { color: "#06b6d4", width: 2 }, itemStyle: { color: "#06b6d4" }, areaStyle: { color: "rgba(6, 182, 212, 0.12)" } }] }],
  };
}
