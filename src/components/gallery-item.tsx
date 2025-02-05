import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Bookmark } from "lucide-react"
import type { Website } from "@/lib/mock-data"

interface GalleryItemProps {
  website: Website
  onClick: () => void
  onBookmark: () => void
  isSaved: boolean
}

export function GalleryItem({ website, onClick, onBookmark, isSaved }: GalleryItemProps) {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow relative">
      <CardContent className="p-4" onClick={onClick}>
        <Image
          src={website.screenshot || "/placeholder.svg"}
          alt={website.name}
          width={300}
          height={200}
          className="w-full h-40 object-cover mb-4 rounded"
        />
        <h3 className="font-semibold text-lg mb-2">{website.name}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {website.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-2">{website.shortDescription}</p>
        <a
          href={website.link}
          className="text-sm text-blue-600 hover:underline"
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
      </CardContent>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2"
        onClick={(e) => {
          e.stopPropagation()
          onBookmark()
        }}
      >
        <Bookmark className={isSaved ? "fill-current" : ""} />
      </Button>
    </Card>
  )
}

