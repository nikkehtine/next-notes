"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { ComponentProps, useEffect } from "react";

// TODO: Fix FOUC

export const ThemeProvider = ({ children, ...props }: ComponentProps<typeof NextThemesProvider>) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);
