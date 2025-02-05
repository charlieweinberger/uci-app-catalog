"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GalleryItem } from "@/components/gallery-item"
import { ItemModal } from "@/components/item-modal"
import { websites, type Website } from "@/lib/mock-data"

export default function WebsiteGallery() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null)
  const [savedWebsites, setSavedWebsites] = useState<string[]>([])
  const [showSavedOnly, setShowSavedOnly] = useState(false)

  const allTags = Array.from(new Set(websites.flatMap((website) => website.tags)))

  useEffect(() => {
    const saved = localStorage.getItem("savedWebsites")
    if (saved) {
      setSavedWebsites(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("savedWebsites", JSON.stringify(savedWebsites))
  }, [savedWebsites])

  const filteredWebsites = websites.filter((website) => {
    const matchesSearch =
      website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => website.tags.includes(tag))
    const matchesSaved = !showSavedOnly || savedWebsites.includes(website.id)
    return matchesSearch && matchesTags && matchesSaved
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const toggleSaved = (websiteId: string) => {
    setSavedWebsites((prev) =>
      prev.includes(websiteId) ? prev.filter((id) => id !== websiteId) : [...prev, websiteId],
    )
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Website Gallery</h1>
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search websites..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="flex flex-wrap gap-2 mb-4">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        <Button
          variant={showSavedOnly ? "default" : "outline"}
          onClick={() => setShowSavedOnly((prev) => !prev)}
          className="mb-4"
        >
          {showSavedOnly ? "Show All" : "Show Saved Only"}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWebsites.map((website) => (
          <GalleryItem
            key={website.id}
            website={website}
            onClick={() => setSelectedWebsite(website)}
            onBookmark={() => toggleSaved(website.id)}
            isSaved={savedWebsites.includes(website.id)}
          />
        ))}
      </div>
      <ItemModal website={selectedWebsite} isOpen={!!selectedWebsite} onClose={() => setSelectedWebsite(null)} />
    </div>
  )
}
