import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, ExternalLink } from "lucide-react";

import { AntAlmanac, Website } from "@/lib/mock-data";

interface GalleryItemProps {
  website: Website
  onClick?: () => void
  onSave?: () => void
  isSaved?: boolean
}

export default function GalleryItem({ website, onClick, onSave, isSaved }: GalleryItemProps) {
  return (
    <div className="flex flex-col p-6 gap-4 cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg" onClick={onClick}>

      {/* Title + Links */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">
          {website.name}
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation()
              onSave?.()
            }}
          >
            <Bookmark className={isSaved ? "fill-current" : ""} />
          </Button>
          <Button size="icon" className="h-8 w-8" asChild>
            <Link
              href={website.link}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
            >
              <ExternalLink />
            </Link>
          </Button>
          </div>
      </div>

      {/* Short Description*/}
      <p className="text-sm text-muted-foreground">
        {website.shortDescription}
      </p>

      {/* Image */}
      <Image
        src={AntAlmanac}
        // src={website.screenshot}
        alt={website.name}
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {website.tags.map((tag) => (
          <Badge key={tag}>
            {tag}
          </Badge>
        ))}
      </div>

    </div>
  )
}
