"use client";

import ChartsSidebar from "@/components/shared/ChartsSidebar";

export default function ChartsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="mx-auto flex min-h-screen max-w-[100rem] bg-white pt-24 dark:bg-black"><ChartsSidebar />{children}</div>;
}
