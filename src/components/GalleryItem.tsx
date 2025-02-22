import Image from "next/image";

import ItemButtons from "@/components/ItemButtons";
import TagBadges from "@/components/TagBadges";

export default function GalleryItem({ website, onClick, onSave, isSaved }: {
  website: Website
  onClick: () => void
  onSave: () => void
  isSaved: () => boolean
}) {

  return (
    <div className="w-auto flex flex-col p-6 gap-4 cursor-pointer rounded-lg bg-white border shadow-sm transition-shadow hover:shadow-lg" onClick={onClick}>

      {/* Title + Links */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-uci-blue">{website.name}</h2>
        <ItemButtons onSave={onSave} isSaved={isSaved} websiteLink={website.link} />
      </div>

      {/* Description*/}
      <p className="text-sm text-muted-foreground">
        {website.description}
      </p>

      {/* Image */}
      <Image
        src={website.screenshot as string}
        alt={website.name}
        width={1000}
        height={1000}
        className="w-full h-40 object-cover rounded border-uci-blue border-4"
      />

      {/* Tags */}
      <TagBadges website={website} />

    </div>
  )
}
