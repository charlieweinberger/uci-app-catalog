"use client"

import { SendHorizontal } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="relative mb-12 w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search for UCI apps and websites..."
        className="w-full rounded-full border border-gray-300 py-3 pl-6 pr-12 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 transform">
        <SendHorizontal className="h-6 w-6 text-blue-500" />
      </button>
    </div>
  )
}

