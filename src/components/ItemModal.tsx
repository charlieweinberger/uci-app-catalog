import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

import ItemButtons from "@/components/ItemButtons";
import WebsiteImage from "@/components/WebsiteImage";
import TagBadges from "@/components/TagBadges";

export default function ItemModal({ website, resetSelectedWebsite, onSave, isSaved }: {
  website: Website | null
  resetSelectedWebsite: () => void
  onSave: () => void
  isSaved: () => boolean
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
          <WebsiteImage website={website} type="modal" />
          <TagBadges website={website} />
          <div className="flex flex-row justify-between text-sm text-muted-foreground">
            <p>Creator: {website.creator}</p>
            <p>Actively Maintained: {website.activelyMaintained}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
