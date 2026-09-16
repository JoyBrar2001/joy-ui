import type { ComponentCategory } from "./data";
import ChartExample, {
  type ChartKind,
  type ChartVariant,
} from "@/components/charts/ChartExamples";

const dependencies = [
  {
    type: "dependencies" as const,
    libraries: ["echarts", "echarts-for-react"],
  },
];
const source = [
  {
    type: "source" as const,
    name: "EChart.tsx",
    path: "@/components/charts/EChart.tsx",
    language: "tsx" as const,
    code: `"use client";\n\nimport dynamic from "next/dynamic";\nimport type { EChartsOption } from "echarts";\n\nconst ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });\n\nexport default function EChart({ option }: { option: EChartsOption }) {\n  return <ReactECharts option={option} opts={{ renderer: "svg" }} />;\n}`,
  },
];

function chartWithExamples(
  title: string,
  subtitle: string,
  kind: ChartKind,
  examples: Array<[string, ChartVariant]>,
): ComponentCategory {
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
  subtitle:
    "Black, white, and gray line chart patterns for trends, rankings, and stacked data.",
  steps: [...dependencies, ...source],
  components: lineExamples.map(([title, variant]) => ({
    title,
    component: () => <ChartExample kind="line" variant={variant} />,
    code: exampleCode("line", variant),
  })),
};

const pieCharts = chartWithExamples(
  "Pie Charts",
  "Monochrome pie patterns for composition, hierarchy, and proportions.",
  "pie",
  [
    ["Simple Pie", "basic"],
    ["Donut Pie", "donut"],
    ["Donut Pie with rounded edges", "roundedDonut"],
    ["Nightingale Chart", "nightingale"],
    ["Pie with special labels", "specialLabels"],
    ["Nested Pies", "nested"],
  ],
);

const barCharts = chartWithExamples(
  "Bar Charts",
  "Monochrome bar patterns for comparisons, ranges, totals, and large data sets.",
  "bar",
  [
    ["Basic Bar Chart", "basic"],
    ["Set style of single bar", "singleBar"],
    ["Waterfall chart", "waterfall"],
    ["Bar with negative axes as well", "negative"],
    ["Bar Label rotation", "rotatedLabels"],
    ["Stacked Column Chart", "stacked"],
    ["Stacked Bar normalization", "normalized"],
    ["Large Scale Bar chart", "largeScale"],
  ],
);

const radarCharts = chartWithExamples(
  "Radar Charts",
  "Monochrome radar patterns for single scores, comparisons, and custom metrics.",
  "radar",
  [
    ["Single stat", "singleStat"],
    ["Radar with multiple stats", "multipleStats"],
    ["Customized radar chart", "customRadar"],
  ],
);

const treeCharts = chartWithExamples(
  "Tree Charts",
  "Monochrome hierarchy patterns for organization, navigation, and nested data.",
  "tree",
  [
    ["Left to right tree", "basic"],
    ["Top to bottom tree", "topBottom"],
    ["Multiple trees", "multipleTrees"],
    ["Tree with polyline edge", "polyline"],
    ["Radial tree", "radial"],
    ["Compact tree", "compactTree"],
    ["Tree with custom symbols", "customSymbols"],
  ],
);

const treemapCharts = chartWithExamples(
  "Treemap Charts",
  "Monochrome treemaps for hierarchical proportions, gradients, and storage usage.",
  "treemap",
  [
    ["Basic Treemap", "basic"],
    ["Gradient Mapping", "gradientMapping"],
    ["Disk Usage", "diskUsage"],
  ],
);

const sankeyCharts = chartWithExamples(
  "Sankey Graphs",
  "Monochrome flow diagrams for relationships, alignment, labels, and weighted edges.",
  "sankey",
  [
    ["Basic Sankey", "basic"],
    ["Vertical Sankey", "verticalSankey"],
    ["Sankey with Label Settings", "labelSettings"],
    ["Node left align", "leftAlign"],
    ["Node right align", "rightAlign"],
    ["Gradient edge", "gradientEdge"],
  ],
);

const sunburstCharts = chartWithExamples(
  "Sunburst Charts",
  "Hierarchical ring charts for nested proportions and large data sets.",
  "sunburst",
  [
    ["Basic Sunburst", "basic"],
    ["Rounded Edges", "roundedEdges"],
    ["Label Rotation", "labelRotate"],
    ["Large Sunburst with hundreds of entries", "largeSunburst"],
  ],
);

const parallelCharts = chartWithExamples(
  "Parallel Charts",
  "Compare multiple dimensions across rows of high-dimensional data.",
  "parallel",
  [
    ["Basic Parallel Coordinates", "parallelBasic"],
    ["Parallel Comparison", "parallelComparison"],
    ["Parallel Metrics", "parallelMetrics"],
  ],
);

const funnelCharts = chartWithExamples(
  "Funnel Charts",
  "Conversion and stage-based comparisons with flexible funnel layouts.",
  "funnel",
  [
    ["Basic Funnel", "basic"],
    ["Upside down funnel", "upsideDown"],
    ["Funnel compare", "compareFunnels"],
    ["Customized funnel", "customFunnel"],
    ["Multiple funnel", "multipleFunnels"],
  ],
);

const calendarCharts = chartWithExamples(
  "Calendar Charts",
  "Calendar-based heatmaps, activity graphs, and date-driven visualizations.",
  "calendar",
  [
    ["Simple Calendar", "simpleCalendar"],
    ["Heatmap Calendar", "heatmapCalendar"],
    ["Calendar Graph", "calendarGraph"],
    ["Calendar Lunar", "calendarLunar"],
    ["Calendar Charts", "calendarCharts"],
    ["Custom Calendar", "customCalendar"],
    ["Calendar with Pies", "calendarPies"],
  ],
);

const chordCharts = chartWithExamples(
  "Chord Graphs",
  "Circular relationship graphs for flows between groups and entities.",
  "chord",
  [
    ["Basic Chord Graph", "chordBasic"],
    ["Directional Chord Graph", "chordDirectional"],
    ["Weighted Chord Graph", "chordWeighted"],
    ["Dense Chord Graph", "chordDense"],
    ["Emphasized Chord Graph", "chordEmphasis"],
  ],
);

const candlestickCharts = chartWithExamples(
  "Candlestick Charts",
  "Financial time-series examples with moving averages, volume, and zooming.",
  "candlestick",
  [
    ["Basic Candlestick", "candlestickBasic"],
    ["Candlestick with Moving Average", "movingAverage"],
    ["Candlestick with Volume", "volumeCandlestick"],
    ["Zoomable Candlestick", "zoomCandlestick"],
    ["Styled Candlestick", "styledCandlestick"],
  ],
);

function exampleCode(kind: ChartKind, variant: ChartVariant) {
  const names = {
    line: "lineOption",
    bar: "barOption",
    pie: "pieOption",
    radar: "radarOption",
    tree: "treeOption",
    treemap: "treemapOption",
    sankey: "sankeyOption",
    sunburst: "sunburstOption",
    parallel: "parallelOption",
    funnel: "funnelOption",
    calendar: "calendarOption",
    chord: "chordOption",
    candlestick: "candlestickOption",
  };
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
    const radius =
      variant === "basic" || variant === "specialLabels"
        ? '"62%"'
        : '["42%", "70%"]';
    const label =
      variant === "specialLabels"
        ? ', label: { formatter: "{b}\\n{c} ({d}%)" }'
        : "";
    body =
      variant === "nested"
        ? `series: [{ type: "pie", radius: ["28%", "45%"], data: [...] }, { type: "pie", radius: ["52%", "74%"], data: [...] }]`
        : `series: [{ type: "pie", radius: ${radius}${variant === "nightingale" ? ', roseType: "area"' : ""}${variant === "roundedDonut" ? ", itemStyle: { borderRadius: 10 }" : ""}${label}, data: [{ value: 1048, name: "Direct" }, { value: 735, name: "Search" }, { value: 580, name: "Social" }] }]`;
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
  } else if (kind === "sankey") {
    const options: Record<string, string> = {
      basic: `series: [{ type: "sankey", data: nodes, links }]`,
      verticalSankey: `series: [{ type: "sankey", orient: "vertical", data: nodes, links }]`,
      labelSettings: `series: [{ type: "sankey", label: { position: "right", fontSize: 13 }, data: nodes, links }]`,
      leftAlign: `series: [{ type: "sankey", nodeAlign: "left", data: nodes, links }]`,
      rightAlign: `series: [{ type: "sankey", nodeAlign: "right", data: nodes, links }]`,
      gradientEdge: `series: [{ type: "sankey", lineStyle: { color: "gradient", curveness: 0.5 }, data: nodes, links }]`,
    };
    body = options[variant] ?? options.basic;
  } else if (kind === "sunburst") {
    const options: Record<string, string> = {
      basic: `series: [{ type: "sunburst", radius: ["10%", "86%"], data: hierarchy }]`,
      roundedEdges: `series: [{ type: "sunburst", data: hierarchy, itemStyle: { borderRadius: 8 } }]`,
      labelRotate: `series: [{ type: "sunburst", data: hierarchy, label: { rotate: "radial" } }]`,
      largeSunburst: `series: [{ type: "sunburst", data: hundredsOfEntries }]`,
    };
    body = options[variant] ?? options.basic;
  } else if (kind === "parallel") {
    const options: Record<string, string> = {
      parallelBasic: `parallelAxis: dimensions,\nseries: [{ type: "parallel", data: rows }]`,
      parallelComparison: `parallelAxis: dimensions,\nseries: [{ type: "parallel", lineStyle: { color: "#525252" }, data: comparisonRows }]`,
      parallelMetrics: `parallelAxis: dimensions,\nseries: [{ type: "parallel", data: metrics }]`,
    };
    body = options[variant] ?? options.parallelBasic;
  } else if (kind === "funnel") {
    const options: Record<string, string> = {
      basic: `series: [{ type: "funnel", data: funnelData }]`,
      upsideDown: `series: [{ type: "funnel", sort: "ascending", data: funnelData }]`,
      compareFunnels: `series: [{ type: "funnel", name: "Current", data: current }, { type: "funnel", name: "Previous", data: previous }]`,
      customFunnel: `series: [{ type: "funnel", label: { position: "inside" }, itemStyle: { borderWidth: 2 }, data: funnelData }]`,
      multipleFunnels: `series: [{ type: "funnel", name: "Product", data: product }, { type: "funnel", name: "Marketing", data: marketing }]`,
    };
    body = options[variant] ?? options.basic;
  } else if (kind === "calendar") {
    const options: Record<string, string> = {
      simpleCalendar: `calendar: { range: 2025 },\nseries: [{ type: "heatmap", coordinateSystem: "calendar", data: activity }]`,
      heatmapCalendar: `visualMap: { min: 0, max: 50 },\nseries: [{ type: "heatmap", coordinateSystem: "calendar", data: activity }]`,
      calendarGraph: `series: [{ type: "scatter", coordinateSystem: "calendar", data: activity }]`,
      calendarLunar: `calendar: { range: ["2025-02-01", "2026-01-31"] },\nseries: [{ type: "heatmap", coordinateSystem: "calendar", data: lunarActivity }]`,
      calendarCharts: `calendar: { range: 2025 },\nseries: [{ type: "heatmap", coordinateSystem: "calendar", data: activity }]`,
      customCalendar: `calendar: { range: 2025, cellSize: [16, 16] },\nseries: [{ type: "heatmap", coordinateSystem: "calendar", data: activity }]`,
      calendarPies: `calendar: { range: 2025 },\nseries: [{ type: "heatmap", coordinateSystem: "calendar", data: activity }, { type: "scatter", coordinateSystem: "calendar", data: milestones }]`,
    };
    body = options[variant] ?? options.simpleCalendar;
  } else if (kind === "chord") {
    const options: Record<string, string> = {
      chordBasic: `series: [{ type: "graph", layout: "circular", data: nodes, links }]`,
      chordDirectional: `series: [{ type: "graph", layout: "circular", lineStyle: { color: "source" }, data: nodes, links }]`,
      chordWeighted: `series: [{ type: "graph", layout: "circular", lineStyle: { width: 3 }, data: nodes, links: weightedLinks }]`,
      chordDense: `series: [{ type: "graph", layout: "circular", data: nodes, links: denseLinks }]`,
      chordEmphasis: `series: [{ type: "graph", layout: "circular", emphasis: { focus: "adjacency" }, data: nodes, links }]`,
    };
    body = options[variant] ?? options.chordBasic;
  } else {
    const options: Record<string, string> = {
      candlestickBasic: `xAxis: { type: "category", data: dates },\nseries: [{ type: "candlestick", data: ohlc }]`,
      movingAverage: `series: [{ type: "candlestick", data: ohlc }, { type: "line", data: movingAverage, symbol: "none" }]`,
      volumeCandlestick: `series: [{ type: "candlestick", data: ohlc }, { type: "bar", data: volume }]`,
      zoomCandlestick: `dataZoom: [{ type: "inside" }, { type: "slider" }],\nseries: [{ type: "candlestick", data: ohlc }]`,
      styledCandlestick: `series: [{ type: "candlestick", itemStyle: { color: "#171717", color0: "#a3a3a3" }, data: ohlc }]`,
    };
    body = options[variant] ?? options.candlestickBasic;
  }
  return `"use client";\n\nimport EChart from "@/components/charts/EChart";\n\nconst ${option} = {\n  tooltip: { trigger: "${kind === "pie" || kind === "radar" || kind === "tree" || kind === "treemap" || kind === "sankey" || kind === "sunburst" || kind === "parallel" || kind === "funnel" || kind === "calendar" || kind === "chord" || kind === "candlestick" ? "item" : "axis"}" },\n  ${body}\n};\n\nexport function ${variant}${kind[0].toUpperCase()}${kind.slice(1)}Chart() {\n  return <EChart option={${option}} />;\n}`;
}

export const chartsData: Record<string, ComponentCategory> = {
  line: lineCharts,
  bar: barCharts,
  pie: pieCharts,
  radar: radarCharts,
  tree: treeCharts,
  treemap: treemapCharts,
  sankey: sankeyCharts,
  sunburst: sunburstCharts,
  parallel: parallelCharts,
  funnel: funnelCharts,
  calendar: calendarCharts,
  chord: chordCharts,
  candlestick: candlestickCharts,
};
