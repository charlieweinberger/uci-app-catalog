import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

import { AntAlmanac, Website } from "@/lib/mock-data";

interface ItemModalProps {
  website: Website | null
  isOpen: boolean
  onClose: () => void
}

export function ItemModal({ website, isOpen, onClose }: ItemModalProps) {
  if (!website) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{website.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Image
            src={AntAlmanac}
            // src={website.screenshot}
            alt={website.name}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded"
          />
          <div className="flex flex-wrap gap-2">
            {website.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground">{website.shortDescription}</p>
          <p>{website.longDescription}</p>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Author: {website.author}</span>
            <span>Created: {website.createdDate}</span>
          </div>
          <a href={website.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

