export interface Website {
  id: string
  name: string
  screenshot: string
  tags: string[]
  shortDescription: string
  link: string
  longDescription: string
  author: string
  createdDate: string
}

export const websites: Website[] = [
  {
    id: "1",
    name: "Official University Portal",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["official", "course planning"],
    shortDescription: "The main portal for university information and services.",
    link: "https://university.edu",
    longDescription:
      "This is the official university website where students can access course information, register for classes, view grades, and access various student services.",
    author: "University IT Department",
    createdDate: "2020-01-01",
  },
  {
    id: "2",
    name: "Student-Run Course Review Site",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "course planning"],
    shortDescription: "Peer reviews and ratings for university courses.",
    link: "https://coursereviews.com",
    longDescription:
      "A platform created by students, for students. Here you can find honest reviews, ratings, and advice about courses from fellow students who have taken them.",
    author: "Student Council",
    createdDate: "2021-03-15",
  },
  {
    id: "3",
    name: "Campus Dining Guide",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "food"],
    shortDescription: "Comprehensive guide to on-campus dining options.",
    link: "https://campusfood.com",
    longDescription:
      "Explore all the dining options available on campus, including menus, hours of operation, and student reviews. Find the perfect spot for your next meal!",
    author: "Food Lovers Club",
    createdDate: "2022-09-01",
  },
  {
    id: "4",
    name: "Official University Portal",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["official", "course planning"],
    shortDescription: "The main portal for university information and services.",
    link: "https://university.edu",
    longDescription:
      "This is the official university website where students can access course information, register for classes, view grades, and access various student services.",
    author: "University IT Department",
    createdDate: "2020-01-01",
  },
  {
    id: "5",
    name: "Student-Run Course Review Site",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "course planning"],
    shortDescription: "Peer reviews and ratings for university courses.",
    link: "https://coursereviews.com",
    longDescription:
      "A platform created by students, for students. Here you can find honest reviews, ratings, and advice about courses from fellow students who have taken them.",
    author: "Student Council",
    createdDate: "2021-03-15",
  },
  {
    id: "6",
    name: "Campus Dining Guide",
    screenshot: "/placeholder.svg?height=200&width=300",
    tags: ["non-official", "food"],
    shortDescription: "Comprehensive guide to on-campus dining options.",
    link: "https://campusfood.com",
    longDescription:
      "Explore all the dining options available on campus, including menus, hours of operation, and student reviews. Find the perfect spot for your next meal!",
    author: "Food Lovers Club",
    createdDate: "2022-09-01",
  },
]
