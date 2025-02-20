export const websites: Website[] = [
  {
    name: "Zot4Plan",
    link: "https://zot4plan.com/",
    description: "A schedule planning tool that helps UCI students visualize their academic plan.",
    creator: "University IT Department",
    tags: ["Non-Official", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "No"
  },
  {
    name: "AntAlmanac",
    link: "https://coursereviews.com",
    description: "A schedule planning and course exploration tool for UCI students.",
    creator: "Student Council",
    tags: ["Non-Official", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Yes"
  },
  {
    name: "PeterPortal",
    link: "https://campusfood.com",
    description: "Comprehensive guide to on-campus dining options.",
    creator: "Food Lovers Club",
    tags: ["Non-Official", "Food"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Yes"
  },
  {
    name: "ZotSites",
    link: "https://university.edu",
    description: "The main portal for university information and services.",
    creator: "University IT Department",
    tags: ["Official", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Yes"
  },
  {
    name: "CampusDish",
    link: "https://coursereviews.com",
    description: "Peer reviews and ratings for university courses.",
    creator: "Student Council",
    tags: ["Non-Official", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Unknown"
  },
];

export const tags: Tag[] = [...new Set(websites.map(w => w.tags).flat())];
