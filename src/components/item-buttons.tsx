import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bookmark, Flag, ExternalLink } from "lucide-react";

export default function ItemButtons({ onSave, isSaved, onReport, websiteLink }: {
  onSave: () => void
  isSaved: boolean
  onReport: () => void
  websiteLink: string
}) {
  return (
    <div className="flex gap-2">
      
      <Button
        variant="outline"
        size="icon"
        className="w-8 h-8"
        onClick={(e) => {
          e.stopPropagation();
          onSave();
        }}
      >
        <Bookmark className={isSaved ? "fill-current" : ""} />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="w-8 h-8"
        onClick={(e) => {
          e.stopPropagation();
          onReport();
        }}
      >
        <Flag />
      </Button>

      <Button size="icon" className="w-8 h-8" asChild>
        <Link
          href={websiteLink}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
        >
          <ExternalLink />
        </Link>
      </Button>
    
    </div>
  );
}
