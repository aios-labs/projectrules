"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0];

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // TODO: Remove forcedTheme once we have a dark mode
  return <NextThemesProvider {...props} forcedTheme="light">{children}</NextThemesProvider>;
}