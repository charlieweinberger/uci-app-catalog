import AntAlmanac from "./AntAlmanac.jpg";

export { AntAlmanac };

export interface Website {
  id: string
  name: string
  screenshot: string
  tags: string[]
  shortDescription: string
  link: string
  longDescription: string
  creator: string
  createdDate: string
}

export const websites: Website[] = [
  {
    id: "1",
    name: "Zot4Plan",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["official", "course planning"],
    shortDescription: "The main portal for university information and services.",
    link: "https://university.edu",
    longDescription:
      "This is the official university website where students can access course information, register for classes, view grades, and access various student services.",
    creator: "University IT Department",
    createdDate: "2020-01-01",
  },
  {
    id: "2",
    name: "AntAlmanac",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "course planning"],
    shortDescription: "Peer reviews and ratings for university courses.",
    link: "https://coursereviews.com",
    longDescription:
      "A platform created by students, for students. Here you can find honest reviews, ratings, and advice about courses from fellow students who have taken them.",
    creator: "Student Council",
    createdDate: "2021-03-15",
  },
  {
    id: "3",
    name: "PeterPortal",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "food"],
    shortDescription: "Comprehensive guide to on-campus dining options.",
    link: "https://campusfood.com",
    longDescription:
      "Explore all the dining options available on campus, including menus, hours of operation, and student reviews. Find the perfect spot for your next meal!",
    creator: "Food Lovers Club",
    createdDate: "2022-09-01",
  },
  {
    id: "4",
    name: "ZotSites",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["official", "course planning"],
    shortDescription: "The main portal for university information and services.",
    link: "https://university.edu",
    longDescription:
      "This is the official university website where students can access course information, register for classes, view grades, and access various student services.",
    creator: "University IT Department",
    createdDate: "2020-01-01",
  },
  {
    id: "5",
    name: "CampusDish",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "course planning"],
    shortDescription: "Peer reviews and ratings for university courses.",
    link: "https://coursereviews.com",
    longDescription:
      "A platform created by students, for students. Here you can find honest reviews, ratings, and advice about courses from fellow students who have taken them.",
    creator: "Student Council",
    createdDate: "2021-03-15",
  },
]

export const tags: string[] = ["official", "non-official", "course-planning", "food"];