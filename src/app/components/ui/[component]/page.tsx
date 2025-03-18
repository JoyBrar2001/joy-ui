import { capitalize, cn } from "@/utils";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { data } from "@/constants/data";
import ComponentWrapper from "@/components/ComponentWrapper";

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

  if (!componentData) {
    return (
      <div className="flex-1 p-6 min-h-screen h-full">
        <div className="text-center text-black dark:text-white text-2xl mt-10">🚀 Coming Soon...</div>
      </div>
    );
  }

  return (
    <section className="flex-1 p-6 min-h-screen h-full">
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

      <h1 className="text-5xl font-bold mt-2">
        {componentData.title}
      </h1>

      <h6 className="text-base text-neutral-400 mt-2">
        {componentData.subtitle}
      </h6>

      <div className="grid grid-cols-12 gap-8 overflow-hidden w-full mt-6">
        {componentData.components.map(({ title, component: Component }, index) => (
          <ComponentWrapper
            key={index}
            title={title}
            cols={componentData.cols}
            steps={componentData.steps}
          >
            <Component label="Label" placeholder="Enter text" />
          </ComponentWrapper>
        ))}
      </div>
    </section>
  );
}
