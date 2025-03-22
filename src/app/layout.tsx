import type { Metadata } from "next";
import { Space_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Rules",
  description: "Find and download project rules for your codebase",
  openGraph: {
    title: "Project Rules",
    description: "Find and download project rules for your codebase",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Rules',
    description: 'Find and download project rules for your codebase',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.variable} ${spaceMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto py-8 px-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
