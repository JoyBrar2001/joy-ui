import type { ReactNode } from "react";

type ChartCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function ChartCard({ title, description, children }: ChartCardProps) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-neutral-950 dark:text-white">{title}</h2>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
      </div>
      {children}
    </article>
  );
}
