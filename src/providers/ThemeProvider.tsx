"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children, defaultTheme = "system", enableSystem = true }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("joy-ui-theme");
    if (storedTheme === "light" || storedTheme === "dark" || (storedTheme === "system" && enableSystem)) {
      // The persisted preference is external browser state and is unavailable during SSR.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(storedTheme);
    }
    setReady(true);
  }, [enableSystem]);

  useEffect(() => {
    const nextResolvedTheme = theme === "system" && enableSystem ? getSystemTheme() : theme === "dark" ? "dark" : "light";
    // resolvedTheme mirrors the browser's system preference after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResolvedTheme(nextResolvedTheme);
    document.documentElement.classList.toggle("dark", nextResolvedTheme === "dark");
    document.documentElement.style.colorScheme = nextResolvedTheme;

    if (ready) window.localStorage.setItem("joy-ui-theme", theme);

    if (theme !== "system" || !enableSystem) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      const systemTheme = event.matches ? "dark" : "light";
      setResolvedTheme(systemTheme);
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
      document.documentElement.style.colorScheme = systemTheme;
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [enableSystem, ready, theme]);

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme }), [resolvedTheme, theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
