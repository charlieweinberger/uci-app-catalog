import Link from "next/link";
import { LayoutGrid, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="w-16 bg-gray-100 h-screen flex flex-col items-center py-4 space-y-4">
      <Link href="/gallery">
        <Button variant="ghost" size="icon" title="Gallery">
          <LayoutGrid className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/add-website/">
        <Button variant="ghost" size="icon" title="Add Website">
          <Plus className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="/account/">
        <Button variant="ghost" size="icon" title="Account">
          <User className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
}
