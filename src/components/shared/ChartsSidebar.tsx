"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils";
import { chartsData } from "@/constants/charts-data";

export default function ChartsSidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-16 z-[5] h-auto w-full shrink-0 overflow-x-auto border-b border-gray-200 bg-white px-3 pb-2 dark:border-neutral-700 dark:bg-black md:top-0 md:h-screen md:w-64 md:overflow-y-auto md:overflow-x-hidden md:border-b-0 md:border-r md:px-4 md:pb-4 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0">
      <Link href="/components/charts">
        <h2 className="mb-2 whitespace-nowrap text-lg font-bold text-neutral-900 dark:text-white md:mb-4 md:text-xl">Charts</h2>
      </Link>
      <nav className="flex min-w-max flex-row gap-1 md:flex-col md:space-y-2">
        {Object.entries(chartsData).map(([slug, chart]) => (
          <Link key={slug} href={`/components/charts/${slug}`}>
            <Button variant="ghost" className={cn("w-auto justify-start whitespace-nowrap md:w-full", pathname === `/components/charts/${slug}` && "bg-neutral-900 text-white dark:bg-neutral-800")}>
              {chart.title}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
