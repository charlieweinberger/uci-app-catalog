"use client";

import { useState } from "react";
import { Info, CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

import TagsCombobox from "./tagsCombobox";

import { tags } from "@/lib/mock-data";

export default function AddWebsiteModal({ isOpen, onClose }: {
  isOpen: boolean
  onClose: () => void
}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [creator, setCreator] = useState("");
  const [dateCreated, setDateCreated] = useState<Date>();
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isCreator, setIsCreator] = useState(false);
  const [canFollowUp, setCanFollowUp] = useState(false);
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();
    
    if (selectedTags.length === 0) {
      // TODO tell user to select tags
      return;
    }
    
    onClose();
    
    // TODO send this data to your backend
    console.log(screenshot); // this line is just to get rid of the error that arises from not using screenshot anywhere else
  
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-2/3 max-w-3xl h-min max-h-[calc(100vh-128px)] flex flex-col overflow-auto">
        
        <DialogHeader>
          <DialogTitle>Add New Website</DialogTitle>
        </DialogHeader>
        
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>How this works</AlertTitle>
          <AlertDescription>
            Adding a website here will add a website for you and you only. It&apos;ll also be sent to the creators of this site, where we can then verify if the website is legit. If so, it&apos;ll be added to the site for everyone else to view.
          </AlertDescription>
        </Alert>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="link">Link *</Label>
              <Input id="link" type="url" value={link} onChange={(e) => setLink(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="shortDescription">One-sentence description *</Label>
              <Input id="shortDescription" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required />
            </div>
            <div>
              <Label>Tags *</Label>
              <TagsCombobox options={tags} selectedOptions={selectedTags} setSelectedOptions={setSelectedTags} />
            </div>
            <div>
              <Label htmlFor="Creator">Creator</Label>
              <Input id="creator" value={creator} onChange={(e) => setCreator(e.target.value)} />
            </div>
            <div>
              <Label>Date Created</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !dateCreated && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    {dateCreated ? format(dateCreated, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-1">
                  <Calendar mode="single" selected={dateCreated} onSelect={setDateCreated} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div>
            <Label htmlFor="longDescription">Longer description</Label>
            <Textarea
              id="longDescription"
              className="h-32 max-h-32"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="screenshot">Screenshot</Label>
              <Input
                id="screenshot"
                type="file"
                accept="image/*"
                onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
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
                <Label htmlFor="canFollowUp">You can follow up with me about this website</Label>
              </div>
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>

      </DialogContent>
    </Dialog>
  );
}
