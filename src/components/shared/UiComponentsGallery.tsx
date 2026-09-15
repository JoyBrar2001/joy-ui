"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight, Boxes, Check, Command, Search, Sparkles } from "lucide-react";
import { data } from "@/constants/data";

const componentEntries = Object.entries(data);
const featured = ["button", "toast", "commandPalette", "slider"];

const iconMarks = ["✦", "◌", "⌘", "＋", "□", "◒", "◇", "↗"];

export default function UiComponentsGallery() {
  const root = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");

  const filteredEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return componentEntries;
    return componentEntries.filter(([slug, component]) => `${slug} ${component.title} ${component.subtitle}`.toLowerCase().includes(normalizedQuery));
  }, [query]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({ defaults: { ease: "power4.out" } })
          .from(".ui-gallery-eyebrow", { y: 16, opacity: 0, duration: 0.5 })
          .from(".ui-gallery-title", { y: 35, opacity: 0, duration: 0.8 }, "-=0.25")
          .from(".ui-gallery-intro", { y: 18, opacity: 0, duration: 0.6 }, "-=0.45")
          .from(".ui-gallery-feature", { y: 24, opacity: 0, stagger: 0.08, duration: 0.65 }, "-=0.25")
          .from(".ui-gallery-card", { y: 18, opacity: 0, stagger: 0.035, duration: 0.45 }, "-=0.35");

        gsap.to(".ui-gallery-glow", { rotate: 360, duration: 32, repeat: -1, ease: "none" });
        gsap.utils.toArray<HTMLElement>(".ui-gallery-card, .ui-gallery-feature").forEach((element) => {
          const enter = () => gsap.to(element, { y: -5, duration: 0.3, ease: "power2.out" });
          const leave = () => gsap.to(element, { y: 0, duration: 0.4, ease: "power3.out" });
          element.addEventListener("mouseenter", enter);
          element.addEventListener("mouseleave", leave);
          return () => {
            element.removeEventListener("mouseenter", enter);
            element.removeEventListener("mouseleave", leave);
          };
        });
      });
      return () => media.revert();
    }, root);
    return () => context.revert();
  }, []);

  return (
    <main ref={root} className="relative min-h-screen flex-1 overflow-hidden p-6 text-neutral-950 dark:text-white sm:p-8 lg:p-10">
      <div className="ui-gallery-glow pointer-events-none absolute -right-48 -top-48 size-[34rem] rounded-full border border-neutral-200 dark:border-neutral-800" />
      <div className="relative mx-auto max-w-7xl">
        <div className="ui-gallery-eyebrow flex items-center gap-2 text-sm text-neutral-500"><Link href="/components">Components</Link><span>/</span><span className="text-neutral-900 dark:text-white">UI</span></div>
        <div className="mt-8 max-w-3xl">
          <div className="ui-gallery-title flex items-start gap-4"><span className="mt-2 hidden rounded-full border border-neutral-300 p-2 text-neutral-500 dark:border-neutral-700 sm:block"><Boxes className="size-5" /></span><div><h1 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">UI Components</h1><p className="ui-gallery-intro mt-5 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">A growing toolkit of accessible primitives, expressive patterns, and copy-ready examples for building your next interface.</p></div></div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Library size</p><p className="mt-2 text-3xl font-semibold">{componentEntries.length}<span className="ml-1 text-sm font-normal text-neutral-500">components</span></p></div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Ready to copy</p><p className="mt-2 flex items-center gap-2 text-3xl font-semibold"><Check className="size-6" />100%</p></div>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950"><p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Built with</p><p className="mt-2 text-3xl font-semibold">Radix<span className="ml-1 text-sm font-normal text-neutral-500">primitives</span></p></div>
        </div>

        <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-950 p-5 text-white dark:border-neutral-800 dark:bg-neutral-900 sm:p-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500"><Sparkles className="size-3" /> Start here</p><h2 className="mt-2 text-2xl font-semibold">Popular building blocks</h2></div><Link href="/components/ui/button" className="group flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white">View Button examples <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{featured.map((slug, index) => { const component = data[slug]; return <Link key={slug} href={`/components/ui/${slug}`} className="ui-gallery-feature group rounded-xl border border-neutral-700 bg-neutral-900 p-4 transition-colors hover:border-neutral-500 dark:bg-neutral-950"><div className="flex items-center justify-between"><span className="text-2xl text-neutral-500">{iconMarks[index]}</span><ArrowUpRight className="size-4 text-neutral-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="mt-8 font-medium">{component.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-6 text-neutral-400">{component.subtitle}</p></Link>; })}</div>
        </section>

        <div className="mt-12 flex flex-col justify-between gap-4 border-b border-neutral-200 pb-5 dark:border-neutral-800 sm:flex-row sm:items-center"><div><p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Browse the collection</p><p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Every card includes live examples, installation, and source code.</p></div><label className="flex w-full items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 sm:w-64"><Search className="size-4 text-neutral-500" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter components" className="w-full bg-transparent outline-none placeholder:text-neutral-500" aria-label="Filter components" /><kbd className="hidden text-xs text-neutral-500 sm:block">⌘K</kbd></label></div>

        <div className="mt-2 grid grid-cols-12 gap-x-6">{filteredEntries.map(([slug, component], index) => <Link key={slug} href={`/components/ui/${slug}`} className="ui-gallery-card group col-span-12 flex min-h-32 flex-col justify-between border-b border-neutral-200 py-6 transition-colors hover:border-neutral-900 dark:border-neutral-800 dark:hover:border-white sm:col-span-6 lg:col-span-4"><div className="flex items-start justify-between"><span className="text-xs text-neutral-400">{String(index + 1).padStart(2, "0")}</span><ArrowUpRight className="size-4 text-neutral-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><div><h3 className="text-xl font-semibold">{component.title}</h3><p className="mt-1 line-clamp-1 text-sm text-neutral-500">{component.subtitle}</p><span className="mt-3 inline-flex items-center gap-1 text-xs text-neutral-400"><Command className="size-3" />{component.components.length} examples</span></div></Link>)}</div>
        {filteredEntries.length === 0 && <div className="py-20 text-center text-neutral-500">No components match “{query}”.</div>}
      </div>
    </main>
  );
}
