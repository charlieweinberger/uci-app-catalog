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

export default function ItemModal({ website, resetSelectedWebsite, onSave, isSaved }: {
  website: Website | null
  resetSelectedWebsite: () => void
  onSave: () => void
  isSaved: boolean
}) {
  if (!website) return null;

  return (
    <Dialog open={!!website} onOpenChange={resetSelectedWebsite}>
      <DialogContent className="w-3/4 max-w-3xl max-h-[calc(100vh-192px)] overflow-auto">
        
        <DialogHeader>
          <div className="flex flex-row justify-between">
            <DialogTitle>{website.name}</DialogTitle>
            <ItemButtons onSave={onSave} isSaved={isSaved} websiteLink={website.link} />
          </div>
          <DialogDescription>{website.description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Image
            src={website.screenshot as string}
            alt={website.name}
            width={1000}
            height={1000}
            className="w-full h-84 object-cover rounded border-uci-blue border-4"
          />
          <div className="flex flex-wrap gap-2">
            {website.tags.map((tag) => (
              <Badge key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-row justify-between text-sm text-muted-foreground">
            <p>Creator: {website.creator}</p>
            <p>Actively Maintained: {website.activelyMaintained}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
