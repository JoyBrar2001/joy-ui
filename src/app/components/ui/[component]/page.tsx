import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

import ComponentWrapper from "@/components/ComponentWrapper";
import { capitalize } from "@/utils";
import { data } from "@/constants/data";

type Props = {
  params: Promise<{ component: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { component } = await params;

  return {
    title: `${capitalize(component)} | Joy UI`,
  };
}

export default async function ComponentPage({ params }: Props) {
  const { component } = await params;

  const componentData = data[component];

  if (!componentData) notFound();

  return (
    <section className="min-w-0 flex-1 p-4 sm:p-6">
      <p className="flex gap-1 items-center text-neutral-500">
        <Link href="/components">
          <span>Components</span>
        </Link>

        <ChevronRight className="size-6" />

        <Link href="/components/ui">
          <span>UI</span>
        </Link>

        <ChevronRight className="size-6" />

        <span className="text-black dark:text-white">
          {capitalize(component)}
        </span>
      </p>

      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
        {componentData.title}
      </h1>

      <h6 className="text-base text-neutral-400 mt-2">
        {componentData.subtitle}
      </h6>

      <div className="mt-6 grid w-full min-w-0 grid-cols-12 gap-4 overflow-hidden sm:gap-8">
        {componentData.components.map(
          ({ title, component: Component, code }, index) => (
            <ComponentWrapper
              key={index}
              title={title}
              cols={componentData.cols}
              steps={componentData.steps}
              code={code}
            >
              <Component />
            </ComponentWrapper>
          ),
        )}
      </div>
    </section>
  );
}
