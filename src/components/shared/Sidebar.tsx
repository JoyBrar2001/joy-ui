"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalize, cn } from "@/utils";
import { useEffect, useState } from "react";
import { data } from "@/constants/data";
import { Button } from "../ui/Button";

const sidebarItems = Array.from(
  Object
    .keys(data)
    .map((component) => ({
      name: capitalize(component),
      path: `/components/ui/${component}`
    }))
);

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
            className={"block rounded-md transition-colors"}
          >
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === item.path && "text-white bg-neutral-900"
              )}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
