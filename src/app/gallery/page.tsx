"use client";

import { useState } from "react";

import Gallery from "@/components/gallery";
import ItemModal from "@/components/item-modal";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from 'lucide-react';

import { websites, type Website } from "@/lib/mock-data";

type Checked = DropdownMenuCheckboxItemProps["checked"];
interface Tag {
  name: string,
  checked: Checked,
  setChecked: (checked: Checked) => void
}

function TagDropdownMenu({ tags, updateSelectedTags }: {
  tags: Tag[],
  updateSelectedTags: (tag: string) => void
}) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Tags
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {tags.map((tag: Tag) => {
          return (
            <DropdownMenuCheckboxItem
              key={tag.name}
              checked={tag.checked}
              onCheckedChange={(checked: boolean) => {
                updateSelectedTags(tag.name);
                tag.setChecked(checked);
              }}
            >
              {tag.name}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function WebsiteGallery() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null);
  const [savedWebsites, setSavedWebsites] = useState<string[]>([]);
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const allTagNames = Array.from(new Set(websites.flatMap((website) => website.tags)));
  const [tagStates, setTagStates] = useState<Record<string, Checked>>({});
  const tags: Tag[] = allTagNames.map((tagName) => ({
    name: tagName,
    checked: tagStates[tagName] || false,
    setChecked: (checked: Checked) => setTagStates(prev => ({ ...prev, [tagName]: checked }))
  }));

  const updateSelectedTags = (tag: string) => {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag]
    );
  };

  const filteredWebsites = websites.filter((website) => {
    const matchesSearch =
      website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => website.tags.includes(tag))
    const matchesSaved = !showSavedOnly || savedWebsites.includes(website.id)
    return matchesSearch && matchesTags && matchesSaved
  })

  const toggleSaved = (websiteId: string) => {
    setSavedWebsites((prev) =>
      prev.includes(websiteId) ? prev.filter((id) => id !== websiteId) : [...prev, websiteId],
    )
  }

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Website Gallery</h1>
      <div className="flex flex-row gap-4">
        <Input
          type="text"
          placeholder="Search websites..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TagDropdownMenu tags={tags} updateSelectedTags={updateSelectedTags} />        
        <Button
          variant={showSavedOnly ? "default" : "outline"}
          onClick={() => setShowSavedOnly((prev) => !prev)}
          className="mb-4"
        >
          Show Saved Only
        </Button>
      </div>
      <Gallery websiteList={filteredWebsites} setSelectedWebsite={setSelectedWebsite} toggleSaved={toggleSaved} savedWebsites={savedWebsites} />
      <ItemModal website={selectedWebsite} isOpen={!!selectedWebsite} onClose={() => setSelectedWebsite(null)} />
    </div>
  )
}
