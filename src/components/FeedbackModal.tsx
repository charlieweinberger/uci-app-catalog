"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

export default function FeedbackModal({ isOpen, resetFeedbackModal }: {
  isOpen: boolean
  resetFeedbackModal: () => void
}) {

  const [ userName, setUserName ] = useState("");
  const [ userEmail, setUserEmail ] = useState("");
  const [ feedbackType, setFeedbackType ] = useState<FeedbackType>(undefined);
  const [ appName, setAppName ] = useState("");
  const [ appLink, setAppLink ] = useState("");
  const [ content, setContent ] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetFeedbackModal();
    resetInputFields();
    sendFeedbackToMe();
  };

  const onClose = () => {
    resetFeedbackModal();
    resetInputFields();
  }

  const resetInputFields = () => {
    setUserName("");
    setUserEmail("");
    setFeedbackType(undefined);
    setAppName("");
    setAppLink("");
    setContent("");
  }

  const sendFeedbackToMe = async () => {
    try {
      
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName,
          userEmail: userEmail,
          feedbackType: feedbackType,
          appName: appName,
          appLink: appLink,
          content: content
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Submitted suggested website: ", data.message);
      }

    } catch (error) {
      console.log("Error submitting suggested website: ", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-3/4 max-w-2xl h-min max-h-[calc(100vh-192px)] sm:max-h-[calc(100vh-96px)] flex flex-col overflow-auto">
        
        <DialogHeader>
          <DialogTitle>Submit Feedback</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="w-full">
              <Label htmlFor="userName">Your Name</Label>
              <Input id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="w-full">
              <Label htmlFor="userEmail">Your Email</Label>
              <Input id="userEmail" type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            </div>
          </div>
          <div>
            <Label htmlFor="userName">Feedback Type</Label>
            <div className="flex flex-row gap-2 md:gap-4">
              <Button
                variant={(feedbackType === "App suggestion") ? "default" : "outline"}
                className="w-full"
                onClick={() => setFeedbackType("App suggestion")}
              >
                App suggestion
              </Button>
              <Button
                variant={(feedbackType === "Feature") ? "default" : "outline"}
                className="w-full"
                onClick={() => setFeedbackType("Feature")}
              >
                Feature
              </Button>
              <Button
                variant={(feedbackType === "Bug") ? "default" : "outline"}
                className="w-full"
                onClick={() => setFeedbackType("Bug")}
              >
                Bug
              </Button>
            </div>
          </div>
          {(feedbackType === "App suggestion") && <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="w-full">
              <Label htmlFor="appName">App Name *</Label>
              <Input id="appName" value={appName} onChange={(e) => setAppName(e.target.value)} required />
            </div>
            <div className="w-full">
              <Label htmlFor="appLink">App Link *</Label>
              <Input id="appLink" type="url" value={appLink} onChange={(e) => setAppLink(e.target.value)} required />
            </div>
          </div>}
          {(feedbackType === "Feature" || feedbackType === "Bug") && <div>
            <Label htmlFor="content">{feedbackType} *</Label>
            <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
          </div>}
          <Button type="submit">Submit</Button>
        </form>

      </DialogContent>
    </Dialog>
  );
}
