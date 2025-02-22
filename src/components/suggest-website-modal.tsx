"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

export default function SuggestWebsiteModal({ isOpen, resetSuggestWebsiteModal }: {
  isOpen: boolean
  resetSuggestWebsiteModal: () => void
}) {
  const [ websiteName, setWebsiteName ] = useState("");
  const [ link, setLink ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ userEmail, setUserEmail ] = useState("");

  if (!isOpen) return null;

  const onClose = () => {
    resetSuggestWebsiteModal();
    setWebsiteName("");
    setLink("");
    setDescription("");
    setUserEmail("");
  }

  // TODO send website to me
  const sendWebsiteToMe = (suggestion: SuggestedWebsite) => {
    console.log("User suggestion: ", suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    sendWebsiteToMe({
      name: websiteName,
      link: link,
      description: description,
      userEmail: userEmail
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-3/4 max-w-2xl h-min max-h-[calc(100vh-192px)] sm:max-h-[calc(100vh-96px)] flex flex-col overflow-auto">
        
        <DialogHeader>
          <DialogTitle>Suggest Website</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-4">
            <div>
              <Label htmlFor="websiteName">Website Name</Label>
              <Input id="websiteName" value={websiteName} onChange={(e) => setWebsiteName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="link">Link</Label>
              <Input id="link" type="url" value={link} onChange={(e) => setLink(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="userEmail">Your Email</Label>
              <Input id="userEmail" type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>

      </DialogContent>
    </Dialog>
  );
}
