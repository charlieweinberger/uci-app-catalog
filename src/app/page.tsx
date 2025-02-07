"use client";

import SearchBar from "@/components/searchbar";
import WebsiteMarquee from "@/components/marquee";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24 h-full">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">UCI App Hub</h1>
        <p className="mb-8 text-xl">Your one-stop-shop for all UCI-related apps and websites</p>
      </div>
      <SearchBar />
      <WebsiteMarquee />
    </main>
  )
}