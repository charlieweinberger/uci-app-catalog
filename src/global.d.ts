type Tag = "Official" | "Unofficial" | "Course Info" | "Course Planning" | "ICSSC" | "API" | "AI" | "Food";
type ActivelyMaintained = "Yes" | "No" | "Unknown";

interface Website {
  name: string
  link: string
  description: string
  creator: string
  tags: Tag[]
  screenshot: File | string | null
  activelyMaintained: ActivelyMaintained
};

interface User {
  exists: boolean
  userName: string
  userEmail: string
}
