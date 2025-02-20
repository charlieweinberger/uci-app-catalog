"use client";

import { useState } from "react";

import GalleryItem from "@/components/gallery-item";
import ItemModal from "@/components/item-modal";
import AddWebsiteModal from "@/components/add-website-modal";
import TagsCombobox from "@/components/tags-combobox";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { websites } from "@/lib/data";

export default function WebsiteGallery() {

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ selectedTags, setSelectedTags ] = useState<string[]>([]);
  const [ selectedWebsite, setSelectedWebsite ] = useState<Website | null>(null);
  const [ savedWebsites, setSavedWebsites ] = useState<Website[]>([]);
  const [ showSavedWebsitesOnly, setShowSavedWebsitesOnly ] = useState(false);
  const [ addWebsiteModal, setAddWebsiteModal ] = useState<boolean>(false);

  const filteredWebsites = websites.filter((website) => {
    const matchesSearch =
      website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag: string) => website.tags.includes(tag));
    const matchesSaved = !showSavedWebsitesOnly || savedWebsites.includes(website);
    return matchesSearch && matchesTags && matchesSaved;
  });

  const updateSavedWebsites = (website: Website | null) => {
    if (!website) return;
    setSavedWebsites(
      savedWebsites.includes(website)
        ? savedWebsites.filter((savedWebsite) => savedWebsite !== website)
        : [...savedWebsites, website]
    );
  };

  const checkIfSaved = (website: Website | null) => {
    if (!website) return false;
    return savedWebsites.includes(website);
  }

  return (
    <div className="p-8 flex flex-col gap-4">
      
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-uci-gold">UCI App Catalog</h1>
        <Button
          onClick={() => setAddWebsiteModal(!addWebsiteModal)}
        >
          Add Website
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
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
            variant={showSavedWebsitesOnly ? "default" : "defaultWhite"}
            onClick={() => setShowSavedWebsitesOnly(!showSavedWebsitesOnly)}
          >
            Show Saved Only
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredWebsites.map((website: Website) => (
          <GalleryItem
            key={website.name}
            website={website}
            onClick={() => setSelectedWebsite(website)}
            onSave={() => updateSavedWebsites(website)}
            isSaved={savedWebsites.includes(website)}
          />
        ))}
      </div>

      <ItemModal
        website={selectedWebsite}
        resetSelectedWebsite={() => setSelectedWebsite(null)}
        onSave={() => updateSavedWebsites(selectedWebsite)}
        isSaved={checkIfSaved(selectedWebsite)}
      />
      <AddWebsiteModal
        isOpen={addWebsiteModal}
        resetAddWebsiteModal={() => setAddWebsiteModal(false)}
      />

    </div>
  );
}
