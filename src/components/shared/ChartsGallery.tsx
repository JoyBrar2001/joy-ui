"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight, BarChart3, Check, Command, Search, Sparkles } from "lucide-react";
import { chartsData } from "@/constants/charts-data";

const chartEntries = Object.entries(chartsData);
const featured = ["line", "bar", "pie", "radar"];
const chartMarks = ["⌁", "▥", "◔", "◎"];

function MiniChart({ index }: { index: number }) {
  if (index === 2) return <div className="flex size-20 items-center justify-center rounded-full border-[10px] border-white/80 border-r-white/20 border-t-white/40"><span className="text-[10px] text-neutral-400">64%</span></div>;
  if (index === 3) return <div className="relative size-20 rounded-full border border-neutral-500"><span className="absolute left-1/2 top-1/2 h-px w-14 -translate-x-1/2 rotate-12 bg-neutral-300" /><span className="absolute left-1/2 top-1/2 h-px w-14 -translate-x-1/2 -rotate-45 bg-neutral-400" /><span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" /></div>;
  return <div className="flex h-20 items-end gap-1.5">{[28, 45, 36, 62, 52, 78, index === 0 ? 92 : 66].map((height, itemIndex) => <span key={itemIndex} className="w-2 rounded-t-full bg-white/80" style={{ height: `${height}%`, opacity: 0.35 + itemIndex / 12 }} />)}</div>;
}

export default function ChartsGallery() {
  const root = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");

  const filteredEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return chartEntries;
    return chartEntries.filter(([slug, chart]) => `${slug} ${chart.title} ${chart.subtitle}`.toLowerCase().includes(normalizedQuery));
  }, [query]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({ defaults: { ease: "power4.out" } })
          .from(".charts-gallery-eyebrow", { y: 16, opacity: 0, duration: 0.5 })
          .from(".charts-gallery-title", { y: 35, opacity: 0, duration: 0.8 }, "-=0.25")
          .from(".charts-gallery-intro", { y: 18, opacity: 0, duration: 0.6 }, "-=0.45")
          .from(".charts-gallery-feature", { y: 24, opacity: 0, stagger: 0.08, duration: 0.65 }, "-=0.25")
          .from(".charts-gallery-card", { y: 18, opacity: 0, stagger: 0.035, duration: 0.45 }, "-=0.35");
        gsap.to(".charts-gallery-orbit", { rotate: 360, duration: 32, repeat: -1, ease: "none" });
        gsap.utils.toArray<HTMLElement>(".charts-gallery-card, .charts-gallery-feature").forEach((element) => {
          const enter = () => gsap.to(element, { y: -5, duration: 0.3, ease: "power2.out" });
          const leave = () => gsap.to(element, { y: 0, duration: 0.4, ease: "power3.out" });
          element.addEventListener("mouseenter", enter);
          element.addEventListener("mouseleave", leave);
          return () => { element.removeEventListener("mouseenter", enter); element.removeEventListener("mouseleave", leave); };
        });
      });
      return () => media.revert();
    }, root);
    return () => context.revert();
  }, []);

  return (
    <main ref={root} className="relative min-h-screen flex-1 overflow-hidden bg-white p-6 text-neutral-950 dark:bg-black dark:text-white sm:p-8 lg:p-10">
      <div className="charts-gallery-orbit pointer-events-none absolute -right-48 -top-48 size-[34rem] rounded-full border border-neutral-200 dark:border-neutral-800" />
      <div className="relative mx-auto max-w-7xl">
        <div className="charts-gallery-eyebrow flex items-center gap-2 text-sm text-neutral-500"><Link href="/components">Components</Link><span>/</span><span className="text-neutral-900 dark:text-white">Charts</span></div>
        <div className="mt-8 max-w-3xl"><div className="charts-gallery-title flex items-start gap-4"><span className="mt-2 hidden rounded-full border border-neutral-300 p-2 text-neutral-500 dark:border-neutral-700 sm:block"><BarChart3 className="size-5" /></span><div><h1 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">Charts</h1><p className="charts-gallery-intro mt-5 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">Responsive, theme-aware data visualizations for turning complex information into clear, useful stories.</p></div></div></div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Chart families</p><p className="mt-2 text-3xl font-semibold">{chartEntries.length}<span className="ml-1 text-sm font-normal text-neutral-500">types</span></p></div><div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Examples</p><p className="mt-2 flex items-center gap-2 text-3xl font-semibold"><Check className="size-6" />{chartEntries.reduce((total, [, chart]) => total + chart.components.length, 0)}<span className="text-sm font-normal text-neutral-500">patterns</span></p></div><div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Powered by</p><p className="mt-2 text-3xl font-semibold">ECharts<span className="ml-1 text-sm font-normal text-neutral-500">engine</span></p></div></div>

        <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-950 p-5 text-white dark:border-neutral-800 dark:bg-neutral-900 sm:p-7"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500"><Sparkles className="size-3" /> Start with a signal</p><h2 className="mt-2 text-2xl font-semibold">Popular chart patterns</h2></div><Link href="/components/charts/line" className="group flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white">Explore Line Charts <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{featured.map((slug, index) => { const chart = chartsData[slug]; return <Link key={slug} href={`/components/charts/${slug}`} className="charts-gallery-feature group rounded-xl border border-neutral-700 bg-neutral-900 p-4 transition-colors hover:border-neutral-500 dark:bg-neutral-950"><div className="flex min-h-20 items-center justify-between"><span className="text-2xl text-neutral-500">{chartMarks[index]}</span><MiniChart index={index} /></div><div className="mt-5 flex items-end justify-between gap-3"><div><h3 className="font-medium">{chart.title}</h3><p className="mt-1 text-xs text-neutral-400">{chart.components.length} examples</p></div><ArrowUpRight className="size-4 text-neutral-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></Link>; })}</div></section>

        <div className="mt-12 flex flex-col justify-between gap-4 border-b border-neutral-200 pb-5 dark:border-neutral-800 sm:flex-row sm:items-center"><div><p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Browse the collection</p><p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Each family includes multiple examples, source code, and installation guidance.</p></div><label className="flex w-full items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 sm:w-64"><Search className="size-4 text-neutral-500" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter charts" className="w-full bg-transparent outline-none placeholder:text-neutral-500" aria-label="Filter charts" /><kbd className="hidden text-xs text-neutral-500 sm:block">⌘K</kbd></label></div>

        <div className="mt-2 grid grid-cols-12 gap-x-6">{filteredEntries.map(([slug, chart], index) => <Link key={slug} href={`/components/charts/${slug}`} className="charts-gallery-card group col-span-12 flex min-h-36 flex-col justify-between border-b border-neutral-200 py-6 transition-colors hover:border-neutral-900 dark:border-neutral-800 dark:hover:border-white sm:col-span-6 lg:col-span-4"><div className="flex items-start justify-between"><span className="text-xs text-neutral-400">{String(index + 1).padStart(2, "0")}</span><ArrowUpRight className="size-4 text-neutral-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><div><h3 className="text-xl font-semibold">{chart.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-6 text-neutral-500">{chart.subtitle}</p><span className="mt-3 inline-flex items-center gap-1 text-xs text-neutral-400"><Command className="size-3" />{chart.components.length} examples</span></div></Link>)}</div>
        {filteredEntries.length === 0 && <div className="py-20 text-center text-neutral-500">No charts match “{query}”.</div>}
      </div>
    </main>
  );
}
