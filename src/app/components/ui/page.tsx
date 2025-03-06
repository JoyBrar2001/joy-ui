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
        <Link href="/components/ui" className="text-white">
          <span>UI</span>
        </Link>
      </p>

      <h1 className="text-5xl font-bold text-white mt-2">UI Components</h1>
      <p className="text-neutral-400 mt-2">
        Select a component below to view its details and usage.
      </p>

      <div className="grid grid-cols-12 gap-6 mt-6">
        {Object.keys(data).map((component) => (
          <Link
            key={component}
            href={`/components/ui/${component}`}
            className="col-span-12 md:col-span-6 lg:col-span-4 bg-neutral-900 border border-neutral-700 p-4 rounded-lg flex items-center justify-between hover:border-white transition"
          >
            <span className="text-white font-medium text-lg">
              {data[component].title}
            </span>
            <ChevronRight className="size-5 text-neutral-400" />
          </Link>
        ))}
      </div>
    </section>
  );
}
