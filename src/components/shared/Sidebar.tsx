"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalize, cn } from "@/utils";
import { useEffect, useState } from "react";
import { data } from "@/constants/data";
import { Button } from "../ui/Button";

const sidebarItems = Array.from(
  Object.keys(data)
    .sort((a, b) => data[a].title.localeCompare(data[b].title))
    .map((component) => ({
      name: capitalize(component),
      path: `/components/ui/${component}`,
    })),
);

export default function Sidebar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const checkScrolled = () => {
      const scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrolled(scrolled > 20);
    };

    window.addEventListener("scroll", checkScrolled);
    return () => window.removeEventListener("scroll", checkScrolled);
  }, []);

  return (
    <aside className="sticky top-16 z-[5] h-auto w-full shrink-0 overflow-x-auto border-b border-gray-200 bg-white px-3 pb-2 dark:border-neutral-700 dark:bg-black md:top-0 md:h-screen md:w-64 md:overflow-y-auto md:overflow-x-hidden md:border-b-0 md:border-r md:px-4 md:pb-4 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0">
      <Link href="/components/ui">
        <h2
          className={cn(
            "mb-2 whitespace-nowrap text-lg font-bold transition-all duration-500 md:mb-4 md:text-xl",
            scrolled && "md:pt-28",
          )}
        >
          UI Components
        </h2>
      </Link>

      <nav className="flex min-w-max flex-row gap-1 md:flex-col md:space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={"block rounded-md transition-colors"}
          >
            <Button
              variant="ghost"
              className={cn(
                "w-auto justify-start whitespace-nowrap md:w-full",
                pathname === item.path && "text-white bg-neutral-900",
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
