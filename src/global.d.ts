type Tag = "Official" | "Non-Official" | "Course Planning" | "Food";
type ActivelyMaintained = "Yes" | "No" | "Unknown";

interface Website {
  name: string
  link: string
  shortDescription: string
  creator: string
  tags: Tag[]
  screenshot: File | string | null
  fullDescription: string
  activelyMaintained: ActivelyMaintained
};

interface User {
  exists: boolean
  userName: string
  userEmail: string
}

interface WebsiteReport {
  website: Website
  user: User
  reason: string
}
