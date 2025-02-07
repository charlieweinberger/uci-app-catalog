"use client";

import Link from "next/link";
import { LucideIcon, LayoutGrid, Bookmark, Plus, UserCircle2 } from "lucide-react";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface NavbarButtonProps {
  destination: string;
  variant: "link" | "destructive" | "default" | "outline" | "secondary" | "ghost" | null | undefined;
  icon: LucideIcon;
  text: string;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors h-10 w-10 md:w-fit md:px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function NavbarButton({ destination, variant, icon: Icon, text }: NavbarButtonProps) {
  return (
    <Link href={destination}>
      <button
        className={cn(buttonVariants({ variant }))}
      >
        <Icon />
        <div className="hidden md:block">
          {text}
        </div>
      </button>
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="border-b p-4 flex items-center">
      <div className="flex-1 flex gap-2">
        <NavbarButton destination="/gallery" variant="ghost" icon={LayoutGrid} text="Gallery" />
        <NavbarButton destination="/saved" variant="ghost" icon={Bookmark} text="Saved" />
      </div>
      <div className="flex-1">
        <Link href="/">
          <h1 className="text-center text-xl font-bold">
            UCI App Hub
          </h1>
        </Link>
      </div>
      <div className="flex-1 flex gap-2 justify-end">
        <NavbarButton destination="/add-website" variant="default" icon={Plus} text="Add Website" />
        <NavbarButton destination="/account" variant="ghost" icon={UserCircle2} text="Account" />
      </div>
    </nav>
  );
}
