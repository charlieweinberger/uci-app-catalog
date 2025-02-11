"use client";

import { useState } from "react";

import Gallery from "@/components/gallery";
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

  const toggleSaved = (websiteId: string) => {
    setSavedWebsites((prev) =>
      prev.includes(websiteId) ? prev.filter((id) => id !== websiteId) : [...prev, websiteId],
    );
  };

  return (
    <div className="p-8 flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">UCI App Hub</h1>
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
      <Gallery websiteList={filteredWebsites} setSelectedWebsite={setSelectedWebsite} toggleSaved={toggleSaved} savedWebsites={savedWebsites} />
      <ItemModal website={selectedWebsite} isOpen={!!selectedWebsite} onClose={() => setSelectedWebsite(null)} />
      <AddWebsiteModal isOpen={addWebsiteModal} onClose={() => setAddWebsiteModal(!addWebsiteModal)} />
    </div>
  );
}
