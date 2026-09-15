"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Code2, Command, Layers3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Slider } from "@/components/ui/Slider";
import { Command as CommandRoot, CommandInput, CommandItem, CommandList } from "@/components/ui/CommandPalette";

gsap.registerPlugin(ScrollTrigger);

const previewComponents = [
  { name: "Button", className: "bg-black text-white dark:bg-white dark:text-black" },
  { name: "Toast", className: "border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900" },
  { name: "Slider", className: "border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900" },
  { name: "Command", className: "bg-neutral-100 dark:bg-neutral-800" },
];
const chartItems = ["Line", "Bar", "Radar", "Tree", "Treemap", "Sankey"];
const benefits = [
  { number: "01", title: "Copy-ready", text: "Every example comes with installation steps and source code you can take into your project.", icon: Code2 },
  { number: "02", title: "Accessible by default", text: "Radix primitives and thoughtful states give your interfaces a dependable foundation.", icon: Layers3 },
  { number: "03", title: "Built to explore", text: "From practical controls to expressive charts, discover patterns without starting from zero.", icon: Sparkles },
];

function PlaygroundDemo({ name }: { name: string }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState([68]);

  if (name === "Button") {
    return <Button className="w-full" onClick={() => setButtonClicked(true)}>{buttonClicked ? "It works ✓" : "Click me"}</Button>;
  }

  if (name === "Toast") {
    return <div className="relative min-h-24 w-full"><Button variant="outline" className="w-full" onClick={() => setToastVisible(true)}>Show toast</Button><div className={"absolute inset-x-0 bottom-0 rounded-md border border-neutral-700 bg-neutral-950 p-2 text-xs text-white shadow-xl transition-all duration-300 " + (toastVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0")}><div className="flex items-center justify-between gap-2"><span>Changes saved successfully.</span><button type="button" aria-label="Dismiss toast" className="text-neutral-400 hover:text-white" onClick={() => setToastVisible(false)}>×</button></div></div></div>;
  }

  if (name === "Slider") {
    return <div className="w-full"><Slider value={sliderValue} onValueChange={setSliderValue} showValue aria-label="Demo slider" /><p className="mt-3 text-center text-xs text-neutral-500">Drag to explore</p></div>;
  }

  return <CommandRoot className="w-full overflow-hidden rounded-md border border-neutral-300 bg-white text-left text-black dark:border-neutral-700 dark:bg-neutral-950 dark:text-white"><CommandInput placeholder="Search..." className="h-8 w-full border-b border-neutral-200 bg-transparent px-2 text-xs outline-none dark:border-neutral-700" /><CommandList className="p-1"><CommandItem className="rounded px-2 py-1.5 text-xs data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800" value="components">UI Components</CommandItem><CommandItem className="rounded px-2 py-1.5 text-xs data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800" value="charts">Charts</CommandItem></CommandList></CommandRoot>;
}

export default function HomeExperience() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({ defaults: { ease: "power4.out" } })
          .from(".hero-eyebrow", { y: 18, opacity: 0, duration: 0.7 })
          .from(".hero-title-line", { yPercent: 110, opacity: 0, stagger: 0.12, duration: 1.1 }, "-=0.35")
          .from(".hero-copy", { y: 20, opacity: 0, duration: 0.7 }, "-=0.65")
          .from(".hero-actions", { y: 20, opacity: 0, duration: 0.7 }, "-=0.45")
          .from(".hero-visual", { scale: 0.86, opacity: 0, rotate: 3, duration: 1.2 }, "-=0.7")
          .from(".hero-stat", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.55");
        gsap.to(".hero-orbit", { rotate: 360, duration: 28, repeat: -1, ease: "none" });
        gsap.to(".hero-float", { y: -14, duration: 2.2, repeat: -1, yoyo: true, stagger: 0.25, ease: "sine.inOut" });
        gsap.to(".hero-pulse", { scale: 1.18, opacity: 0.35, duration: 2.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((element) => {
          gsap.from(element, { y: 55, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>(".benefit-card, .category-card, .preview-card").forEach((element) => {
          const enter = () => gsap.to(element, { y: -8, scale: 1.015, duration: 0.35, ease: "power2.out" });
          const leave = () => gsap.to(element, { y: 0, scale: 1, duration: 0.45, ease: "power3.out" });
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
    <main ref={root} className="overflow-hidden bg-white text-neutral-950 dark:bg-black dark:text-white">
      <section className="relative min-h-screen px-6 pb-20 pt-36 sm:px-10 lg:px-16">
        <div className="hero-orbit pointer-events-none absolute -right-52 top-16 size-[36rem] rounded-full border border-neutral-200 dark:border-neutral-800" />
        <div className="hero-pulse pointer-events-none absolute right-24 top-48 size-40 rounded-full bg-neutral-200/60 blur-3xl dark:bg-neutral-800/50" />
        <div className="mx-auto grid max-w-[100rem] items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div className="relative z-[1] max-w-3xl">
            <p className="hero-eyebrow mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400"><span className="size-2 rounded-full bg-black dark:bg-white" /> The interface playground</p>
            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              <span className="block overflow-hidden"><span className="hero-title-line block">Build better</span></span>
              <span className="block overflow-hidden"><span className="hero-title-line block text-neutral-400 dark:text-neutral-600">interfaces, faster.</span></span>
            </h1>
            <p className="hero-copy mt-8 max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">Joy UI is a collection of polished, accessible components and data visualizations that help you move from idea to interface with confidence.</p>
            <div className="hero-actions mt-8 flex flex-wrap gap-3">
              <Link href="/components/ui" className="group flex items-center gap-3 rounded-md bg-black px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">Explore components <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
              <Link href="/components/charts" className="flex items-center gap-3 rounded-md border border-neutral-300 px-6 py-3 font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900">Browse charts <ArrowUpRight className="size-4" /></Link>
            </div>
            <div className="mt-10 flex gap-8 border-t border-neutral-200 pt-5 dark:border-neutral-800">
              <div className="hero-stat"><p className="text-2xl font-semibold">30+</p><p className="text-sm text-neutral-500">components</p></div>
              <div className="hero-stat"><p className="text-2xl font-semibold">14</p><p className="text-sm text-neutral-500">chart families</p></div>
              <div className="hero-stat"><p className="text-2xl font-semibold">⌘K</p><p className="text-sm text-neutral-500">quick search</p></div>
            </div>
          </div>
          <div className="hero-visual relative mx-auto h-[28rem] w-full max-w-xl">
            <div className="absolute inset-8 rounded-[2rem] border border-neutral-200 bg-neutral-50/80 p-5 shadow-2xl shadow-neutral-200/40 dark:border-neutral-800 dark:bg-neutral-950/80 dark:shadow-black">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800"><span className="text-sm font-medium">Joy UI / dashboard</span><span className="size-2 rounded-full bg-neutral-400" /></div>
              <div className="mt-5 grid grid-cols-3 gap-3">{["Revenue", "Users", "Growth"].map((item, index) => <div key={item} className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900"><p className="text-xs text-neutral-500">{item}</p><p className="mt-2 text-lg font-semibold">{["$24.8k", "8,492", "+18%"][index]}</p></div>)}</div>
              <div className="mt-4 rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"><div className="flex items-center justify-between"><p className="text-sm font-medium">Activity</p><p className="text-xs text-neutral-500">Last 7 days</p></div><div className="mt-8 flex h-28 items-end gap-2">{[35, 55, 44, 78, 62, 92, 70, 84, 54, 96, 72, 88].map((height, index) => <span key={index} className="w-full rounded-t-sm bg-black dark:bg-white" style={{ height: height + "%", opacity: 0.25 + index / 20 }} />)}</div></div>
              <div className="mt-4 flex items-center justify-between rounded-lg bg-black px-4 py-3 text-white dark:bg-white dark:text-black"><span className="text-sm">Ship your next idea</span><ArrowRight className="size-4" /></div>
            </div>
            <div className="hero-float absolute -left-1 top-20 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-xl dark:border-neutral-800 dark:bg-neutral-900"><p className="text-xs text-neutral-500">Components</p><p className="mt-1 text-sm font-semibold">Ready to compose</p></div>
            <div className="hero-float absolute -right-2 bottom-20 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-xl dark:border-neutral-800 dark:bg-neutral-900"><p className="text-xs text-neutral-500">Charts</p><p className="mt-1 text-sm font-semibold">Data, made visual</p></div>
          </div>
        </div>
      </section>

      <section className="section-reveal overflow-hidden border-y border-neutral-200 py-5 dark:border-neutral-800"><div className="flex min-w-max animate-[marquee_24s_linear_infinite] motion-reduce:animate-none gap-12 px-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">{[...chartItems, ...chartItems].map((item, index) => <span key={item + index}>✦ {item} charts</span>)}</div></section>

      <section className="section-reveal px-6 py-28 sm:px-10 lg:px-16"><div className="mx-auto max-w-[100rem]"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Built for momentum</p><h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A calm foundation for ambitious interfaces.</h2></div><p className="max-w-sm text-neutral-600 dark:text-neutral-400">Explore a growing system of primitives, patterns, and visualizations designed to be understood at a glance.</p></div><div className="grid gap-4 md:grid-cols-3">{benefits.map(({ number, title, text, icon: Icon }) => <article key={title} className="benefit-card rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-colors dark:border-neutral-800 dark:bg-neutral-950"><div className="flex items-start justify-between"><span className="text-sm text-neutral-400">{number}</span><Icon className="size-5 text-neutral-500" /></div><h3 className="mt-16 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">{text}</p></article>)}</div></div></section>

      <section className="section-reveal bg-neutral-950 px-6 py-28 text-white dark:bg-neutral-900 sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[100rem] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">The playground</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">See the system in motion.</h2><p className="mt-5 max-w-md leading-7 text-neutral-400">Browse practical UI building blocks and expressive chart patterns. Find the shape that fits, then make it yours.</p><Link href="/components/ui" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-black transition-transform hover:-translate-y-1">Open the library <ArrowRight className="size-4" /></Link></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{previewComponents.map(({ name, className }, index) => <div key={name} className={"preview-card flex aspect-square flex-col justify-between rounded-2xl p-4 text-black dark:text-white " + className}><span className="text-xs text-neutral-500">0{index + 1}</span><div className="w-full"><p className="mb-4 text-lg font-semibold">{name}</p><PlaygroundDemo name={name} /></div></div>)}</div></div></section>

      <section className="section-reveal px-6 py-28 sm:px-10 lg:px-16"><div className="mx-auto max-w-[100rem]"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Data visualization</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Make numbers memorable.</h2></div><Link href="/components/charts" className="group flex items-center gap-2 font-medium">Explore all charts <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div><div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_0.6fr]"><Link href="/components/charts/line" className="category-card group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-950"><div className="relative z-[1]"><p className="text-sm text-neutral-500">01 / Trends</p><h3 className="mt-24 text-3xl font-semibold">Line charts</h3><p className="mt-2 text-neutral-600 dark:text-neutral-400">Follow the movement, not just the number.</p></div><div className="absolute bottom-10 right-8 flex h-36 w-1/2 items-end gap-2 opacity-70">{[35, 48, 42, 72, 58, 91, 76, 100].map((height, index) => <span key={index} className="w-full rounded-t-full bg-black dark:bg-white" style={{ height: height + "%", transitionDelay: index * 35 + "ms" }} />)}</div></Link><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{chartItems.slice(1, 4).map((item, index) => <Link key={item} href={"/components/charts/" + item.toLowerCase()} className="category-card group flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950"><div><p className="text-xs text-neutral-500">0{index + 2} / Chart</p><h3 className="mt-2 text-xl font-semibold">{item}</h3></div><ArrowUpRight className="size-5 text-neutral-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>)}</div></div></div></section>

      <section className="section-reveal px-6 pb-28 sm:px-10 lg:px-16"><div className="mx-auto max-w-[100rem] rounded-3xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-950 sm:p-12"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">A simple workflow</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">From blank canvas to shipped UI.</h2></div><div className="grid gap-7 sm:grid-cols-4">{[["01", "Choose", "Start with a pattern"], ["02", "Install", "Add what you need"], ["03", "Copy", "Take the source"], ["04", "Compose", "Make it yours"]].map(([number, title, text]) => <div key={number} className="border-t border-neutral-300 pt-4 dark:border-neutral-700"><span className="text-xs text-neutral-500">{number}</span><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p></div>)}</div></div></div></section>

      <section className="section-reveal relative overflow-hidden bg-black px-6 py-28 text-center text-white dark:bg-white dark:text-black sm:px-10"><div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 dark:border-black/10" /><div className="relative mx-auto max-w-3xl"><p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">Keep exploring</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Your next interface starts here.</h2><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-400 dark:text-neutral-600">Open the library, find a starting point, and turn a good idea into something people can use.</p><Link href="/components" className="mt-8 inline-flex items-center gap-3 rounded-md bg-white px-6 py-3 font-medium text-black transition-transform hover:-translate-y-1 dark:bg-black dark:text-white">Start building <ArrowRight className="size-4" /></Link></div></section>

      <div className="border-t border-neutral-200 px-6 py-8 dark:border-neutral-800 sm:px-10 lg:px-16"><div className="mx-auto flex max-w-[100rem] flex-col justify-between gap-3 text-sm text-neutral-500 sm:flex-row"><span>JOY UI — a system for making.</span><span className="flex items-center gap-2"><Command className="size-4" /> Press ⌘K to explore</span></div></div>
    </main>
  );
}
