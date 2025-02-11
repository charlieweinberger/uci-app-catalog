import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

import { Bookmark, ExternalLink } from "lucide-react";

export default function ItemModal({ website, isOpen, onClose, onSave, isSaved }: {
  website: Website | null
  isOpen: boolean
  onClose: () => void
  onSave: () => void
  isSaved: boolean
}) {
  if (!website) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-2/3 max-w-3xl">
        <div className="flex flex-row justify-between">
          <DialogHeader>
            <DialogTitle>{website.name}</DialogTitle>
            <DialogDescription>{website.shortDescription}</DialogDescription>
          </DialogHeader>
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
        <div className="flex flex-col gap-4">
          <Image
            src={website.screenshot}
            alt={website.name}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded"
          />
          <div className="flex flex-wrap gap-2">
            {website.tags.map((tag) => (
              <Badge key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
          <p>{website.fullDescription}</p>
          <p className="text-sm text-muted-foreground">Creator: {website.creator}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
