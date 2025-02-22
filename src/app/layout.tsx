import type React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCI App Catalog",
  description: "The UCI App Catalog is an unofficial collection of uci-related websites and apps. Find, save, and suggest websites for yourself to others to use while at UCI to make your daily lives better!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-uci-blue`}>
        <div className="flex flex-col items-center h-screen">
          <main className="w-full max-w-[1536px]">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
