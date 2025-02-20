import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCI App Catalog",
  description: "A catalog for all UCI apps and websites",
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
      </body>
    </html>
  );
}
