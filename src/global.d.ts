type Tag = "official" | "non-official" | "course-planning" | "food";

interface Website {
  id: string
  name: string
  screenshot: string
  tags: Tag[]
  shortDescription: string
  link: string
  fullDescription: string
  creator: string
};
