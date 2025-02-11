import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import { AntAlmanac } from "@/lib/mock-data";

export default function ItemModal({ website, isOpen, onClose }: {
  website: Website | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!website) return null;

  // TODO: get rid of Dialog (other than when necessary), make similar to gallery-item.tsx

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-2/3 max-w-3xl">
        <DialogHeader>
          <DialogTitle>{website.name}</DialogTitle>
          <DialogDescription>{website.shortDescription}</DialogDescription>
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
          <p>{website.fullDescription}</p>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Creator: {website.creator}</span>
          </div>
          <a href={website.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
