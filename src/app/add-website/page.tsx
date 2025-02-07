"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Info, CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

import TagsCombobox from "./tagsCombobox";

import { tags } from "@/lib/mock-data";

export default function AddWebsite() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [creator, setCreator] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [date, setDate] = useState<Date>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isCreator, setIsCreator] = useState(false);
  const [canFollowUp, setCanFollowUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({
      name,
      link,
      creator,
      shortDescription,
      longDescription,
      date: date ? format(date, "yyyy-MM-dd") : "",
      tags: selectedTags,
      screenshot,
      isCreator,
      canFollowUp,
    });
    // After submission, redirect to the gallery page
    router.push("/gallery");
  };

  return (
    <div className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Add New Website</h1>
      <Alert className="w-2/3">
        <Info className="h-4 w-4" />
        <AlertTitle>How this works</AlertTitle>
        <AlertDescription>
          Adding a website here will add a website for you and you only. It&apos;ll also be sent to the creators of this site, where we can then verify if the website is legit. If so, it&apos;ll be added to the site for everyone else to view.
        </AlertDescription>
      </Alert>
      <form onSubmit={handleSubmit} className="w-2/3 flex flex-col gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="link">Link *</Label>
          <Input id="link" type="url" value={link} onChange={(e) => setLink(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="Creator">Creator</Label>
          <Input id="creator" value={creator} onChange={(e) => setCreator(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="shortDescription">One-sentence description</Label>
          <Input id="shortDescription" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="longDescription">Longer description</Label>
          <Textarea id="longDescription" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} />
        </div>
        <div>
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-1 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Label>Tags</Label>
          <TagsCombobox options={tags} selectedOptions={selectedTags} setSelectedOptions={setSelectedTags} />
        </div>
        <div>
          <Label htmlFor="screenshot">Screenshot</Label>
          <Input
            id="screenshot"
            type="file"
            accept="image/*"
            onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="isCreator"
            checked={isCreator}
            onCheckedChange={(checked) => setIsCreator(checked as boolean)}
          />
          <Label htmlFor="isCreator">I am the creator of this website</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="canFollowUp"
            checked={canFollowUp}
            onCheckedChange={(checked) => setCanFollowUp(checked as boolean)}
          />
          <Label htmlFor="canFollowUp">You can follow up with me about this submission</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
