"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("dark");

  // Read the theme applied by the pre-hydration script so React state matches the DOM.
  React.useEffect(() => {
    const root = document.documentElement;
    const current: Theme = root.classList.contains("light") ? "light" : "dark";
    setThemeState(current);
  }, []);

  const applyTheme = React.useCallback((next: Theme) => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.classList.remove("light", "dark");
    root.classList.add(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
    // Remove the transition helper after it finishes to avoid janking other animations.
    window.setTimeout(() => root.classList.remove("theme-transition"), 550);
  }, []);

  const setTheme = React.useCallback(
    (next: Theme) => {
      setThemeState(next);
      applyTheme(next);
    },
    [applyTheme]
  );

  const toggleTheme = React.useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  const value = React.useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Inline script string that runs before hydration to prevent a flash of the wrong theme.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(!t){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(t);}catch(e){document.documentElement.classList.add("dark");}})();`;
