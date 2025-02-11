import AntAlmanac from "./AntAlmanac.jpg";

export { AntAlmanac };

export interface Website {
  id: string
  name: string
  screenshot: string
  tags: string[]
  shortDescription: string
  link: string
  fullDescription: string
  creator: string
}

export const websites: Website[] = [
  {
    id: "1",
    name: "Zot4Plan",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["official", "course planning"],
    shortDescription: "The main portal for university information and services.",
    link: "https://university.edu",
    fullDescription:
      "This is the official university website where students can access course information, register for classes, view grades, and access various student services.",
    creator: "University IT Department",
  },
  {
    id: "2",
    name: "AntAlmanac",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "course planning"],
    shortDescription: "A schedule planning and course exploration tool for UCI students.",
    link: "https://coursereviews.com",
    fullDescription:
      "A platform created by students, for students. Here you can find honest reviews, ratings, and advice about courses from fellow students who have taken them.",
    creator: "Student Council",
  },
  {
    id: "3",
    name: "PeterPortal",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "food"],
    shortDescription: "Comprehensive guide to on-campus dining options.",
    link: "https://campusfood.com",
    fullDescription:
      "Explore all the dining options available on campus, including menus, hours of operation, and student reviews. Find the perfect spot for your next meal!",
    creator: "Food Lovers Club",
  },
  {
    id: "4",
    name: "ZotSites",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["official", "course planning"],
    shortDescription: "The main portal for university information and services.",
    link: "https://university.edu",
    fullDescription:
      "This is the official university website where students can access course information, register for classes, view grades, and access various student services.",
    creator: "University IT Department",
  },
  {
    id: "5",
    name: "CampusDish",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "course planning"],
    shortDescription: "Peer reviews and ratings for university courses.",
    link: "https://coursereviews.com",
    fullDescription:
      "A platform created by students, for students. Here you can find honest reviews, ratings, and advice about courses from fellow students who have taken them.",
    creator: "Student Council",
  },
]

export type Tag = "official" | "non-official" | "course-planning" | "food";

export const tags: Tag[] = ["official", "non-official", "course-planning", "food"];