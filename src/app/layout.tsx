import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ReduxProvider from "./state/ReduxProvider";
import { ThemeProvider } from "./ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Everyday",
  description: "Social media app where you making a memory every day",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <main>{children}</main>
            </ThemeProvider>
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
