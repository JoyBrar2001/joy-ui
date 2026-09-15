"use client";

import ChartsSidebar from "@/components/shared/ChartsSidebar";

export default function ChartsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="mx-auto flex min-h-screen max-w-[100rem] flex-col bg-white pt-20 dark:bg-black md:flex-row md:pt-24"><ChartsSidebar />{children}</div>;
}
