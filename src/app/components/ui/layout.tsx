"use client";

import Sidebar from "@/components/shared/Sidebar";

export default function UiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="max-w-[100rem] mx-auto h-full flex pt-24 bg-white dark:bg-black">
        <Sidebar />

        {children}
      </div>
    </>
  );
}
