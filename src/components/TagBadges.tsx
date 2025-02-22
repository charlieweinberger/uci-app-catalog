import { Badge } from "@/components/ui/badge";

export default function TagBadges({ website }: { website: Website }) {
  return (
    <div className="flex flex-wrap gap-2">
      {website.tags.sort().map((tag) => (
        <Badge key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
}
