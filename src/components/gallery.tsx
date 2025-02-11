import GalleryItem from "@/components/gallery-item";

export default function Gallery({ websiteList, setSelectedWebsite, toggleSaved, savedWebsites } : {
  websiteList: Website[],
  setSelectedWebsite: (website: Website) => void,
  toggleSaved: (id: string) => void,
  savedWebsites: string[],
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {websiteList.map((website: Website) => (
        <GalleryItem
          key={website.id}
          website={website}
          onClick={() => setSelectedWebsite(website)}
          onSave={() => toggleSaved(website.id)}
          isSaved={savedWebsites.includes(website.id)}
        />
      ))}
    </div>
  );
}
