"use client";

import { useTheme } from "@/hooks/use-theme";
import { ReactNode, useEffect } from "react";

// TODO: Fix FOUC

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme] = useTheme();

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <>{children}</>;
};
