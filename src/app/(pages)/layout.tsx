import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import { Sidebar } from "@/components/sidebar";
// import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCI App Hub",
  description: "A hub for all UCI apps and websites",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          {/* <Navbar /> */}
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
