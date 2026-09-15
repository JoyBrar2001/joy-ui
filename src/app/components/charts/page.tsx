import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { chartsData } from "@/constants/charts-data";

export default function ChartsPage() {
  return (
    <section className="min-h-screen bg-white p-6 text-neutral-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-[100rem]">
        <p className="flex items-center gap-1 text-neutral-500">
          <Link href="/components">Components</Link>
          <ChevronRight className="size-5" />
          <span className="text-neutral-900 dark:text-white">Charts</span>
        </p>
        <h1 className="mt-3 text-5xl font-bold">Charts</h1>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          A set of responsive, theme-aware chart examples powered by Apache ECharts.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(chartsData).map(([slug, chart]) => (
            <Link key={slug} href={`/components/charts/${slug}`} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition hover:border-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-white">
              <h2 className="text-xl font-semibold">{chart.title}</h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{chart.subtitle}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium">View examples <ChevronRight className="size-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
