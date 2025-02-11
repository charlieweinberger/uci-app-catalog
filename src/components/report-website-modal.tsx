"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

export default function ReportModal({ website, resetWebsiteToReport }: {
  website: Website | null
  resetWebsiteToReport: () => void
}) {

  const [reason, setReason] = useState("");
  const [canFollowUp, setCanFollowUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  if (!website) return null;

  const onClose = () => {
    resetWebsiteToReport();
    setReason("");
  }

  // TODO send reported website to me, so I can check it out
  const sendReportToMe = (report: WebsiteReport) => {
    // add activelyMaintained and dateAdded
    console.log("Sending report by user to me: ", report.website, report.user, report.reason);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    const user: User = {
      exists: canFollowUp,
      userName: userName,
      userEmail: userEmail
    };
    const report: WebsiteReport = {
      website: website,
      reason: reason,
      user: user
    }
    sendReportToMe(report);
  };

  return (
    <Dialog open={!!website} onOpenChange={onClose}>
      <DialogContent className="w-3/4 max-w-xl h-min max-h-[calc(100vh-192px)] sm:max-h-[calc(100vh-96px)] flex flex-col overflow-auto">
        
        <DialogHeader>
          <DialogTitle>Report Website</DialogTitle>
          <DialogDescription>Why do you want to report {website?.name}?</DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="reason">Reason</Label>
            <Textarea
              id="reason"
              className="h-32 max-h-32"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center gap-2">
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
