"use client"

import { useState, useEffect } from "react"
import { GalleryItem } from "@/components/gallery-item"
import { ItemModal } from "@/components/item-modal"
import { websites, type Website } from "@/lib/mock-data"

export default function SavedWebsites() {
  const [savedWebsites, setSavedWebsites] = useState<string[]>([])
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("savedWebsites")
    if (saved) {
      setSavedWebsites(JSON.parse(saved))
    }
  }, [])

  const savedWebsitesList = websites.filter((website) => savedWebsites.includes(website.id))

  const toggleSaved = (websiteId: string) => {
    setSavedWebsites((prev) =>
      prev.includes(websiteId) ? prev.filter((id) => id !== websiteId) : [...prev, websiteId],
    )
  }

  useEffect(() => {
    localStorage.setItem("savedWebsites", JSON.stringify(savedWebsites))
  }, [savedWebsites])

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Saved Websites</h1>
      {savedWebsitesList.length === 0 ? (
        <p>You haven&apos;t saved any websites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedWebsitesList.map((website) => (
            <GalleryItem
              key={website.id}
              website={website}
              onClick={() => setSelectedWebsite(website)}
              onSave={() => toggleSaved(website.id)}
              isSaved={true}
            />
          ))}
        </div>
      )}
      <ItemModal website={selectedWebsite} isOpen={!!selectedWebsite} onClose={() => setSelectedWebsite(null)} />
    </div>
  )
}

