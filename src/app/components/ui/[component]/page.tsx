import { capitalize } from "@/utils";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ component: string; }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { component } = (await params);

  return {
    title: `${capitalize(component)} | Joy UI`,
  };
}

export default async function ComponentPage({
  params
}: Props) {
  const { component } = await params;

  return (
    <section className="h-[300vh]">
      <p className="flex gap-1 items-center text-neutral-500">
        <Link href="/components">
          <span>
            Components
          </span>
        </Link>
        <ChevronRight className="size-6" />
        <Link href="/components/ui">
          <span>
            UI
          </span>
        </Link>
        <ChevronRight className="size-6" />
        <span className="text-white">
          {capitalize(component)}
        </span>
      </p>
      <h1 className="text-5xl font-bold mt-2">
        {capitalize(component)}
      </h1>

      <div className="grid grid-cols-12 w-full divide-x-1 divide-y-1 divide-neutral-600">
        <div className="col-span-4 p-4 flex flex-col">
          <label>Label</label>
          <input type="text" placeholder="palceholder" />
        </div>
        <div className="col-span-4 p-4 flex flex-col">
          <label>Label</label>
          <input type="text" placeholder="palceholder" />
        </div>
        <div className="col-span-4 p-4 flex flex-col">
          <label>Label</label>
          <input type="text" placeholder="palceholder" />
        </div>
        <div className="col-span-4 p-4 flex flex-col">
          <label>Label</label>
          <input type="text" placeholder="palceholder" />
        </div>
        <div className="col-span-4 p-4 flex flex-col">
          <label>Label</label>
          <input type="text" placeholder="palceholder" />
        </div>
        <div className="col-span-4 p-4 flex flex-col">
          <label>Label</label>
          <input type="text" placeholder="palceholder" />
        </div>
      </div>
    </section>
  );
}