"use client";

import { useRouter } from "next/navigation";
import { SendHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SearchBar() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    // add search functionality here
    event.preventDefault();
    router.push("/gallery");
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 min-w-80 max-w-[640px] relative">
      <input
        type="text"
        className={cn("flex h-10 w-full rounded-md border border-input bg-background py-2 px-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 pr-8")}
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <SendHorizontal className="text-muted-foreground hover:text-blue-500" size={18} />
      </button>
    </form>
  );
}
