"use client";

import { useState } from "react";

import GalleryItem from "@/components/gallery-item";
import ItemModal from "@/components/item-modal";
import AddWebsiteModal from "@/components/add-website-modal";
import TagsCombobox from "@/components/tags-combobox";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { websites } from "@/lib/mock-data";

export default function WebsiteGallery() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null);
  const [savedWebsites, setSavedWebsites] = useState<string[]>([]);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [addWebsiteModal, setAddWebsiteModal] = useState<boolean>(false);

  const filteredWebsites = websites.filter((website) => {
    const matchesSearch =
      website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.fullDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag: Tag) => website.tags.includes(tag));
    const matchesSaved = !showSavedOnly || savedWebsites.includes(website.id);
    return matchesSearch && matchesTags && matchesSaved;
  });

  const toggleSaved = (websiteId: string | undefined) => {
    if (!websiteId) return;
    setSavedWebsites((prev) =>
      prev.includes(websiteId) ? prev.filter((id) => id !== websiteId) : [...prev, websiteId],
    );
  };

  const checkIfSaved = (website: Website | null) => {
    if (!website) return false;
    return savedWebsites.includes(website.id);
  }

  return (
    <div className="p-8 flex flex-col gap-4">
      
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">UCI App Catalog</h1>
        <Button
          onClick={() => setAddWebsiteModal(!addWebsiteModal)}
        >
          Add Website
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search websites..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex flex-row gap-4">
          <TagsCombobox
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
          <Button
            variant={showSavedOnly ? "default" : "outline"}
            onClick={() => setShowSavedOnly((prev) => !prev)}
            className="mb-4"
          >
            Show Saved Only
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredWebsites.map((website: Website) => (
          <GalleryItem
            key={website.id}
            website={website}
            onClick={() => setSelectedWebsite(website)}
            onSave={() => toggleSaved(website.id)}
            isSaved={savedWebsites.includes(website.id)}
          />
        ))}
      </div>

      <ItemModal
        key={selectedWebsite?.id}
        website={selectedWebsite}
        isOpen={!!selectedWebsite}
        onClose={() => setSelectedWebsite(null)}
        onSave={() => toggleSaved(selectedWebsite?.id)}
        isSaved={checkIfSaved(selectedWebsite)}
      />
            
      <AddWebsiteModal isOpen={addWebsiteModal} onClose={() => setAddWebsiteModal(!addWebsiteModal)} />
    
    </div>
  );
}
