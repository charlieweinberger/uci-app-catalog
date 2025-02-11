import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

import ItemButtons from "@/components/item-buttons";

export default function ItemModal({ website, resetSelectedWebsite, onSave, isSaved, onReport }: {
  website: Website | null
  resetSelectedWebsite: () => void
  onSave: () => void
  isSaved: boolean
  onReport: () => void
}) {
  if (!website) return null;

  return (
    <Dialog open={!!website} onOpenChange={resetSelectedWebsite}>
      <DialogContent className="w-3/4 max-w-3xl max-h-[calc(100vh-192px)] overflow-auto">
        
        <DialogHeader>
          <div className="flex flex-row justify-between">
            <DialogTitle>{website.name}</DialogTitle>
            <ItemButtons onSave={onSave} isSaved={isSaved} onReport={onReport} websiteLink={website.link} />
          </div>
          <DialogDescription>{website.shortDescription}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Image
            src={website.screenshot as string}
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
          <div className="flex flex-row justify-between text-sm text-muted-foreground">
            <p>Creator: {website.creator}</p>
            <p>Actively Maintained? {website.activelyMaintained}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
