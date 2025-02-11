export const websites: Website[] = [
  {
    name: "Zot4Plan",
    link: "https://university.edu",
    shortDescription: "The main portal for university information and services.",
    creator: "University IT Department",
    tags: ["Official", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    fullDescription:
    "This is the official university website where students can access course information, register for classes, view grades, and access various student services.",
    activelyMaintained: "No"
  },
  {
    name: "AntAlmanac",
    link: "https://coursereviews.com",
    shortDescription: "A schedule planning and course exploration tool for UCI students.",
    creator: "Student Council",
    tags: ["Non-Official", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    fullDescription:
    "A platform created by students, for students. Here you can find honest reviews, ratings, and advice about courses from fellow students who have taken them.",
    activelyMaintained: "Yes"
  },
  {
    name: "PeterPortal",
    link: "https://campusfood.com",
    shortDescription: "Comprehensive guide to on-campus dining options.",
    creator: "Food Lovers Club",
    tags: ["Non-Official", "Food"],
    screenshot: "/AntAlmanac.jpg",
    fullDescription:
      "Explore all the dining options available on campus, including menus, hours of operation, and student reviews. Find the perfect spot for your next meal!",
    activelyMaintained: "Yes"
  },
  {
    name: "ZotSites",
    link: "https://university.edu",
    shortDescription: "The main portal for university information and services.",
    creator: "University IT Department",
    tags: ["Official", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    fullDescription:
      "This is the official university website where students can access course information, register for classes, view grades, and access various student services.",
    activelyMaintained: "Yes"
  },
  {
    name: "CampusDish",
    link: "https://coursereviews.com",
    shortDescription: "Peer reviews and ratings for university courses.",
    creator: "Student Council",
    tags: ["Non-Official", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    fullDescription:
      "A platform created by students, for students. Here you can find honest reviews, ratings, and advice about courses from fellow students who have taken them.",
    activelyMaintained: "Unknown"
  },
];

export const tags: Tag[] = [...new Set(websites.map(w => w.tags).flat())];
