import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { data } from "@/constants/data";

export default function UiPage() {
  return (
    <section className="flex-1 p-6 min-h-screen h-full">
      <p className="flex gap-1 items-center text-neutral-500">
        <Link href="/components">
          <span>Components</span>
        </Link>
        <ChevronRight className="size-6" />
        <Link href="/components/ui" className="text-neutral-900 dark:text-white">
          <span>UI</span>
        </Link>
      </p>

      <h1 className="mt-2 text-5xl font-bold text-neutral-900 dark:text-white">UI Components</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Select a component below to view its details and usage.
      </p>

      <div className="grid grid-cols-12 gap-6 mt-6">
        {Object.keys(data).map((component) => (
          <Link
            key={component}
            href={`/components/ui/${component}`}
            className="col-span-12 flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 p-4 transition hover:border-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-white md:col-span-6 lg:col-span-4"
          >
            <span className="text-lg font-medium text-neutral-900 dark:text-white">
              {data[component].title}
            </span>
            <ChevronRight className="size-5 text-neutral-500 dark:text-neutral-400" />
          </Link>
        ))}
      </div>
    </section>
  );
}
