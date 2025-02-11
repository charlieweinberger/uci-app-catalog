import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ItemButtons from "@/components/item-buttons";

export default function GalleryItem({ website, onClick, onSave, isSaved, onReport }: {
  website: Website
  onClick: () => void
  onSave: () => void
  isSaved: boolean
  onReport: () => void
}) {

  return (
    <div className="w-auto flex flex-col p-6 gap-4 cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-lg" onClick={onClick}>

      {/* Title + Links */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{website.name}</h2>
        <ItemButtons onSave={onSave} isSaved={isSaved} onReport={onReport} websiteLink={website.link} />
      </div>

      {/* Short Description*/}
      <p className="text-sm text-muted-foreground">
        {website.shortDescription}
      </p>

      {/* Image */}
      <Image
        src={website.screenshot}
        alt={website.name}
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {website.tags.map((tag) => (
          <Badge key={tag}>
            {tag}
          </Badge>
        ))}
      </div>

    </div>
  )
}
