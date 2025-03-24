import * as React from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme as Theme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
  }, []);

  const applyTheme = (newTheme: Theme | null) => {
    if (newTheme) {
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    } else {
      localStorage.removeItem("theme");
    }
  };

  return [theme, setTheme, applyTheme] as const;
}
