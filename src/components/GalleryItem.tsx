import ItemButtons from "@/components/ItemButtons";
import WebsiteImage from "@/components/WebsiteImage";
import TagBadges from "@/components/TagBadges";

export default function GalleryItem({ website, onClick, onSave, isSaved }: {
  website: Website
  onClick: () => void
  onSave: () => void
  isSaved: () => boolean
}) {
  return (
    <div className="w-auto flex flex-col p-6 gap-4 cursor-pointer rounded-lg bg-white hover:bg-gray-100" onClick={onClick}>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-uci-blue">{website.name}</h2>
        <ItemButtons onSave={onSave} isSaved={isSaved} websiteLink={website.link} />
      </div>
      <p className="text-sm text-muted-foreground">
        {website.description}
      </p>
      <WebsiteImage website={website} type="gallery" />
      <TagBadges website={website} />
    </div>
  )
}
