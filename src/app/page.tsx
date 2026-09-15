import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white dark:bg-black">
      <section className="max-w-3xl h-screen flex flex-col justify-center items-center">
        <h1 className={cn("text-4xl font-bold sm:text-6xl text-neutral-900 dark:text-white")}>
          Build Stunning Interfaces with <span className="text-blue-500">Joy UI</span>
        </h1>

        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          A modern UI library that empowers developers to craft sleek and powerful applications with ease.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/components/ui"
            className="flex items-center justify-center gap-3 rounded-md bg-black px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Get Started <ArrowRight className="size-5" />
          </Link>

          <Button variant="outline" className="px-6 py-3 text-lg">
            Learn More
          </Button>
        </div>
      </section>

      <section className="h-[200vh] w-full"></section>
    </main>
  );
}
