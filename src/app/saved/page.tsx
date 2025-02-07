"use client";

import { useState } from "react";
import Gallery from "@/components/gallery";
import ItemModal from "@/components/item-modal";

import { websites, type Website } from "@/lib/mock-data";

export default function SavedWebsites() {
  const [savedWebsites, setSavedWebsites] = useState<string[]>([]);
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null);

  const savedWebsitesList = websites.filter((website) => savedWebsites.includes(website.id));
  // const savedWebsitesList = websites;

  const toggleSaved = (websiteId: string) => {
    setSavedWebsites((prev) =>
      prev.includes(websiteId) ? prev.filter((id) => id !== websiteId) : [...prev, websiteId],
    )
  };

  // TODO: Update this w/ Supabase, as needed and depending on backend

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Saved Websites</h1>
      {savedWebsitesList.length === 0 ? (
        <p>You haven&apos;t saved any websites yet.</p>
      ) : (
        <Gallery websiteList={savedWebsitesList} setSelectedWebsite={setSelectedWebsite} toggleSaved={toggleSaved} savedWebsites={savedWebsites} />
      )}
      <ItemModal website={selectedWebsite} isOpen={!!selectedWebsite} onClose={() => setSelectedWebsite(null)} />
    </div>
  );
}
