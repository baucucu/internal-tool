import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LandingPageHeader } from "@/components/component/landing-page-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Internal tool",
  description: "Made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LandingPageHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
