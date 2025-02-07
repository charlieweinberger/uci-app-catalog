"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically update the user's account information
    console.log({ email, password });
  }

  // TODO: Update this w/ Clerk or Supabase Auth, as needed and depending on backend

  return (
    <div className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-1/2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Update Account</Button>
      </form>
    </div>
  );
}
