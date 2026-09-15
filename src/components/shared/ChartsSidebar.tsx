"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils";
import { chartsData } from "@/constants/charts-data";

export default function ChartsSidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 overflow-y-auto border-r border-gray-200 bg-white px-4 pb-4 dark:border-neutral-700 dark:bg-black [&::-webkit-scrollbar]:w-0">
      <Link href="/components/charts">
        <h2 className="mb-4 text-xl font-bold text-neutral-900 dark:text-white">Charts</h2>
      </Link>
      <nav className="flex flex-col space-y-2">
        {Object.entries(chartsData).map(([slug, chart]) => (
          <Link key={slug} href={`/components/charts/${slug}`}>
            <Button variant="ghost" className={cn("w-full justify-start", pathname === `/components/charts/${slug}` && "bg-neutral-900 text-white dark:bg-neutral-800")}>
              {chart.title}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
