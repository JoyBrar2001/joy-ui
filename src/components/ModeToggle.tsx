"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "@/components/ui/Button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="size-10 rounded-md transition-all duration-300 text-black"
      variant="outline"
    >
      <Sun className="size-5 transition-all duration-300 absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="size-5 transition-all duration-300 absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
