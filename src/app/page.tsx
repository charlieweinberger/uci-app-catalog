"use client";

import SearchBar from "@/components/searchbar";
import Marquee from "@/components/marquee";

export default function Home() {
  return (
    <main className="h-full p-24 flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">UCI App Hub</h1>
        <p className="text-xl">Your one-stop-shop for all UCI-related apps and websites</p>
        <SearchBar />
      </div>
      <Marquee />
    </main>
  )
}