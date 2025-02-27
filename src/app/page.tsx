"use client";

import { useState, useEffect } from "react";

import GalleryItem from "@/components/GalleryItem";
import ItemModal from "@/components/ItemModal";
import SuggestWebsiteModal from "@/components/SuggestWebsiteModal";
import TagsCombobox from "@/components/TagsCombobox";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { websites } from "@/lib/data";

export default function WebsiteGallery() {

  const [ searchTerm, setSearchTerm ] = useState("");
  const [ selectedTags, setSelectedTags ] = useState<string[]>([]);
  const [ selectedWebsite, setSelectedWebsite ] = useState<Website | null>(null);
  const [ savedWebsites, setSavedWebsites ] = useState<Website[]>([]);
  const [ showSavedWebsitesOnly, setShowSavedWebsitesOnly ] = useState(false);
  const [ suggestWebsiteModal, setSuggestWebsiteModal ] = useState(false);

  useEffect(() => {
    const localSavedWebsites = localStorage.getItem("savedWebsites");
    if (localSavedWebsites) {
      setSavedWebsites(JSON.parse(localSavedWebsites));
    }
  }, []);

  const updateSavedWebsites = (website: Website | null) => {
    if (!website) return;
    const newSavedWebsites = checkIfSaved(website)
      ? savedWebsites.filter(savedWebsite => savedWebsite.name !== website.name)
      : [...savedWebsites, website];
    setSavedWebsites(newSavedWebsites);
    localStorage.setItem("savedWebsites", JSON.stringify(newSavedWebsites));
  };

  const checkIfSaved = (website: Website | null) => {
    if (!website) return false;
    return savedWebsites.some(savedWebsite => savedWebsite.name === website.name);
  }

  const filteredWebsites = websites.filter((website) => {
    const matchesSearch =
      website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 || selectedTags.every(tag => website.tags.includes(tag));
    const matchesSaved =
      !showSavedWebsitesOnly ||
      checkIfSaved(website);
    return matchesSearch && matchesTags && matchesSaved;
  });

  return (
    <div className="p-8 flex flex-col gap-4">
      
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-uci-gold">UCI App Catalog</h1>
        <Button
          onClick={() => setSuggestWebsiteModal(!suggestWebsiteModal)}
        >
          Suggest Website
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
            // size="icon"
            // className="w-20"
            onClick={() => setShowSavedWebsitesOnly(!showSavedWebsitesOnly)}
          >
            Show Saved
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
            isSaved={() => checkIfSaved(website)}
          />
        ))}
      </div>

      <ItemModal
        website={selectedWebsite}
        resetSelectedWebsite={() => setSelectedWebsite(null)}
        onSave={() => updateSavedWebsites(selectedWebsite)}
        isSaved={() => checkIfSaved(selectedWebsite)}
      />
      <SuggestWebsiteModal
        isOpen={suggestWebsiteModal}
        resetSuggestWebsiteModal={() => setSuggestWebsiteModal(false)}
      />

    </div>
  );
}
