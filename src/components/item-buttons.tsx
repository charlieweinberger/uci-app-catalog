import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bookmark, Flag, ExternalLink, Ellipsis } from "lucide-react";

function FullVersion({ onSave, isSaved, onReport, websiteLink }: {
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

function EllipsesVersion({ onSave, isSaved, onReport, websiteLink }: {
  onSave: () => void
  isSaved: boolean
  onReport: () => void
  websiteLink: string
}) {
  return (
    <div className="flex gap-2">
      
      <Button size="icon" className="w-8 h-8" asChild>
        <Link
          href={websiteLink}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
        >
          <ExternalLink />
        </Link>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="w-8 h-8">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col">
          <Button
            variant="ghost"
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
            variant="ghost"
            size="icon"
            className="w-8 h-8"
            onClick={(e) => {
              e.stopPropagation();
              onReport();
            }}
          >
            <Flag />
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    
    </div>
  );
}

export default function ItemButtons({ fullVersion, onSave, isSaved, onReport, websiteLink }: {
  fullVersion: boolean
  onSave: () => void
  isSaved: boolean
  onReport: () => void
  websiteLink: string
}) {
  return fullVersion
    ? <FullVersion onSave={onSave} isSaved={isSaved} onReport={onReport} websiteLink={websiteLink} />
    : <EllipsesVersion onSave={onSave} isSaved={isSaved} onReport={onReport} websiteLink={websiteLink} />;
}
