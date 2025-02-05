"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent) => {
    // add search functionality here
    event.preventDefault();
    console.log("before gallery")
    console.log(event);
    router.push("/gallery");
    console.log("now in gallery")
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-12 w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search for UCI apps and websites..."
        className="w-full rounded-full border border-gray-300 py-3 pl-6 pr-12 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <Button variant="ghost">
        <SendHorizontal className="h-6 w-6 text-blue-500" />
      </Button>
    </form>
  );
}

