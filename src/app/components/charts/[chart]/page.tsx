import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

import ComponentWrapper from "@/components/ComponentWrapper";
import { chartsData } from "@/constants/charts-data";
import { capitalize } from "@/utils";

type Props = { params: Promise<{ chart: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { chart } = await params;
  return { title: `${capitalize(chart)} Charts | Joy UI` };
}

export default async function ChartPage({ params }: Props) {
  const { chart } = await params;
  const chartData = chartsData[chart];
  if (!chartData) notFound();

  return <section className="min-h-screen flex-1 p-6"><p className="flex items-center gap-1 text-neutral-500"><Link href="/components">Components</Link><ChevronRight className="size-5" /><Link href="/components/charts">Charts</Link><ChevronRight className="size-5" /><span className="text-black dark:text-white">{capitalize(chart)}</span></p><h1 className="mt-2 text-5xl font-bold">{chartData.title}</h1><p className="mt-2 text-base text-neutral-400">{chartData.subtitle}</p><div className="mt-6 grid w-full grid-cols-12 gap-8 overflow-hidden">{chartData.components.map(({ title, component: Component, code }) => <ComponentWrapper key={title} title={title} cols={chartData.cols} steps={chartData.steps} code={code} codePath="@/components/charts/ChartExamples.tsx"><Component /></ComponentWrapper>)}</div></section>;
}
