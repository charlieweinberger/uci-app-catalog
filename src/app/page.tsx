"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToHome() {
  const router = useRouter();  
  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      Error: failed to push to home page. Try reloading the page.
    </div>
  );
}
