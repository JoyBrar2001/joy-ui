"use client";

import Sidebar from "@/components/shared/Sidebar";

export default function UiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mx-auto flex h-full max-w-[100rem] flex-col bg-white pt-20 dark:bg-black md:flex-row md:pt-24">
        <Sidebar />

        {children}
      </div>
    </>
  );
}
