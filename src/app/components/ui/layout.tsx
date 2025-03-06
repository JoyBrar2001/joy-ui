"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";
import Sidebar from "@/components/Sidebar";

const sidebarItems = [
  { name: "Alert", path: "/components/ui/alert" },
  { name: "Button", path: "/components/ui/button" },
  { name: "Card", path: "/components/ui/Card" },
  { name: "Input", path: "/components/ui/input" },
];

export default function UiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="max-w-[100rem] mx-auto h-full flex pt-24 bg-white dark:bg-black">
        {/* Scrollable Sidebar with Sticky Position */}
        <Sidebar />

        <div className="flex-1 p-6">{children}</div>
      </div>
    </>
  );
}
