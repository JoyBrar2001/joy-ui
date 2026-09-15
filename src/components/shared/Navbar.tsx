"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";

import CreativeButton from "@/components/creative/CreativeButton";
import ModeToggle from "@/components/ModeToggle";
import { cn } from "@/utils";
import WebsiteCommandPalette from "@/components/shared/WebsiteCommandPalette";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const checkScrolled = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrolled > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", checkScrolled);

    return () => {
      window.removeEventListener("scroll", checkScrolled);
    }
  }, []);

  return (
    <header className={cn(
      "h-16 max-w-[100rem] px-4 mx-auto md:h-20 md:px-10",
      "fixed top-0 left-0 right-0 flex justify-between items-center z-10",
      "bg-white dark:bg-black border-0 border-neutral-200/0 dark:border-neutral-700/0",
      "transition-all duration-500 ease-in-out",
      scrolled && "top-2 w-[calc(100%-1rem)] scale-95 md:top-5 md:w-[90%] lg:w-[85%] mx-auto border border-neutral-200 dark:border-neutral-700 rounded-[2.5rem] backdrop-blur-xl",
    )}>
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-xl font-bold tracking-wide text-black dark:text-white">
            JOY UI
          </h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 md:text-base">
            <li>
              <Link
                href="/components/ui"
                className="flex items-center justify-center rounded-sm px-2 py-2 text-base font-medium text-neutral-700 transition-colors duration-300 hover:text-black dark:text-neutral-300 dark:hover:text-white"
              >
                UI Components
              </Link>
            </li>

            <li>
              <Link href="/components/creative">
                <CreativeButton>
                  Creative
                </CreativeButton>
              </Link>
            </li>

            <li>
              <Link
                href="/components/charts"
                className="flex items-center justify-center rounded-sm px-2 py-2 text-base font-medium text-neutral-700 transition-colors duration-300 hover:text-black dark:text-neutral-300 dark:hover:text-white"
              >
                Charts
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <WebsiteCommandPalette />
        <ModeToggle />

        <button type="button" className="flex size-10 items-center justify-center rounded-md text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800 md:hidden" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}>
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Link
          href="https://github.com/JoyBrar2001/joy-ui"
          target="_blank"
        >
          <span className="flex size-10 items-center justify-center rounded-md text-black transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800">
            <FaGithub className="size-5 absolute" />
          </span>
        </Link>
      </div>

      {mobileOpen && <nav className="absolute left-2 right-2 top-[calc(100%+0.5rem)] rounded-2xl border border-neutral-200 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95 md:hidden"><Link href="/components/ui" onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800">UI Components</Link><Link href="/components/creative" onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800">Creative</Link><Link href="/components/charts" onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800">Charts</Link></nav>}
    </header>
  );
}
