"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import { useEffect, useState } from "react";

const sidebarItems = [
  { name: "Alert", path: "/components/ui/alert" },
  { name: "Button", path: "/components/ui/button" },
  { name: "Card", path: "/components/ui/card" },
  { name: "Input", path: "/components/ui/input" },
];

export default function Sidebar() {
  const pathname = usePathname();
    const [scrolled, setScrolled] = useState<boolean>(false);
  
    useEffect(() => {
      const checkScrolled = () => {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        setScrolled(scrolled > 20);
      };
  
      window.addEventListener("scroll", checkScrolled);
      return () => window.removeEventListener("scroll", checkScrolled);
    }, []);

  return (
    <aside className="w-64 h-screen sticky top-0 overflow-y-auto px-4 pb-4 bg-white dark:bg-black border-r border-gray-200 dark:border-neutral-700 [&::-webkit-scrollbar]:w-0">
          <Link href="/components/ui">
            <h2
              className={cn(
                "text-xl font-bold mb-4 transition-all duration-500",
                scrolled && "pt-28"
              )}
            >
              UI Components
            </h2>
          </Link>

          <nav className="flex flex-col space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "block px-4 py-2 rounded-md transition-colors",
                  pathname === item.path
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-black"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>
  );
}
