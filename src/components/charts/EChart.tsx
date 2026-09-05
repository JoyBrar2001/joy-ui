"use client";

import dynamic from "next/dynamic";
import type { EChartsOption } from "echarts";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

type EChartProps = {
  option: EChartsOption;
  height?: number;
};

export default function EChart({ option, height = 320 }: EChartProps) {
  return (
    <ReactECharts
      option={option}
      notMerge
      lazyUpdate
      style={{ height, width: "100%" }}
      opts={{ renderer: "svg" }}
    />
  );
}
