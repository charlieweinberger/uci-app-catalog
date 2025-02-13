"use client";

import { useState } from "react";
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import TagsCombobox from "@/components/tags-combobox";

export default function AddWebsiteModal({ isOpen, resetAddWebsiteModal }: {
  isOpen: boolean
  resetAddWebsiteModal: () => void
}) {
  const [websiteName, setWebsiteName] = useState("");
  const [link, setLink] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [screenshot, setScreenshot] = useState<File | string | null>(null);
  const [fullDescription, setFullDescription] = useState("");
  const [canFollowUp, setCanFollowUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  if (!isOpen) return null;

  const onClose = () => {
    resetAddWebsiteModal();
    setWebsiteName("");
    setLink("");
    setShortDescription("");
    setCreator("");
    setSelectedTags([]);
    setScreenshot(null);
    setFullDescription("");
    setCanFollowUp(false);
    setUserName("");
    setUserEmail("");
  }

  // TODO add website to user's localStorage
  const addWebsiteToLocalStorage = (website: Website) => {
    console.log("Adding website to localStorage: ", website);
    return;
  };

  // TODO send website to me
  const sendWebsiteToMe = (website: Website, user: User | null) => {
    // TODO add fields such as activelyMaintained, gitHubLink, dateAdded, or dateCreated
    console.log("Sending website by user to me: ", website, user);
  };

  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();
    onClose();

    const website: Website = {
      name: websiteName,
      link: link,
      shortDescription: shortDescription,
      creator: creator,
      tags: selectedTags,
      screenshot: screenshot,
      fullDescription: fullDescription,
      activelyMaintained: "Unknown"
    };

    const user: User = {
      exists: canFollowUp,
      userName: userName,
      userEmail: userEmail
    };

    addWebsiteToLocalStorage(website);
    sendWebsiteToMe(website, user);

  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-3/4 max-w-3xl h-min max-h-[calc(100vh-192px)] sm:max-h-[calc(100vh-96px)] flex flex-col overflow-auto">
        
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
        
        {/* // TODO create a simplified version of this, with the option to add more ("advanced details") */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="websiteName">Website Name *</Label>
              <Input id="websiteName" value={websiteName} onChange={(e) => setWebsiteName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="link">Link *</Label>
              <Input id="link" type="url" value={link} onChange={(e) => setLink(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="shortDescription">One-Sentence Description *</Label>
              <Input id="shortDescription" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="Creator">Website Creator</Label>
              <Input id="creator" value={creator} onChange={(e) => setCreator(e.target.value)} />
            </div>
            <div>
              <Label>Tags</Label>
              <TagsCombobox selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
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
          </div>
          <div>
            <Label htmlFor="fullDescription">Full Description</Label>
            <Textarea
              id="fullDescription"
              className="h-32 max-h-32"
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="canFollowUp"
              checked={canFollowUp}
              onCheckedChange={(checked) => setCanFollowUp(checked as boolean)}
            />
            <Label htmlFor="canFollowUp">You can follow up with me about this website</Label>
          </div>
          {canFollowUp && <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="userName">Your Name *</Label>
              <Input id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="userEmail">Your Email *</Label>
              <Input id="userEmail" type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
            </div>
          </div>}
          <Button type="submit">Submit</Button>
        </form>

      </DialogContent>
    </Dialog>
  );
}
