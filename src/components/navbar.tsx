import Link from "next/link"
import { LayoutGrid, Bookmark, Plus, UserCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4 mr-auto">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <LayoutGrid className="h-5 w-5 mr-2" />
              Gallery
            </Button>
          </Link>
          <Link href="/saved">
            <Button variant="ghost" size="sm">
              <Bookmark className="h-5 w-5 mr-2" />
              Saved
            </Button>
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <h1 className="text-xl font-bold">UCI App Hub</h1>
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <Link href="/add-website">
            <Button size="sm">
              <Plus className="h-5 w-5 mr-2" />
              Add Website
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="sm">
              <UserCircle2 className="h-5 w-5 mr-2" />
              Account
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

