"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Github } from "lucide-react";

import ModeToggle from "@/components/ModeToggle";
import { cn } from "@/utils";
import Button from "./shared/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

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
      "h-20 max-w-[100rem] px-10 mx-auto",
      "fixed top-0 left-0 right-0 flex justify-between items-center z-50",
      "bg-white dark:bg-black border-0 border-neutral-200/0 dark:border-neutral-700/0",
      "transition-all duration-500 ease-in-out",
      scrolled && "top-5 scale-95 md:w-[90%] lg:w-[85%] mx-auto border-1 border-neutral-200 dark:border-neutral-700 rounded-[2.5rem] backdrop-blur-xl",
    )}>
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold tracking-wide text-black dark:text-white">
          JOY UI
        </h1>

        <nav>
          <ul className="flex gap-6 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
            <li>
              <Link
                href="/components/ui"
                className="hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                UI Components
              </Link>
            </li>
            <li>
              <Link
                href="/components/creative"
                className="hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Creative
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />

        <Link
          href="https://github.com/joybrar2001"
          target="_blank"
        >
          <Button
            className="size-10 rounded-md transition-all duration-300 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
            variant="ghost"
          >
            <Github className="size-5 absolute" />
          </Button>
        </Link>
      </div>
    </header>
  );
}