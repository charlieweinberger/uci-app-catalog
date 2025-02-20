export const websites: Website[] = [
  /* ICSSC */
  {
    name: "AntAlmanac",
    link: "https://antalmanac.com/",
    description: "A schedule planning and course exploration tool for UCI students.",
    creator: "Information & Computer Science Student Council (ICSSC)",
    tags: ["Unofficial", "ICSSC", "Course Info", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Yes"
  },
  {
    name: "PeterPortal",
    link: "https://https://peterportal.org/",
    description: "A web application for course discovery and planning at UCI, featuring an enhanced catalogue and a 4-year planner.",
    creator: "Information & Computer Science Student Council (ICSSC)",
    tags: ["Unofficial", "ICSSC", "Course Info", "Course Planning"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Yes"
  },
  {
    name: "Anteater API",
    link: "https://anteaterapi.com/",
    description: "API that provides easy access to public data from UC Irvine. Developed for Anteaters, by Anteaters.",
    creator: "Information & Computer Science Student Council (ICSSC)",
    tags: ["Unofficial", "ICSSC", "Course Info", "API"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Yes"
  },
  {
    name: "Zotistics",
    link: "https://zotistics.com/",
    description: "View historical grade distributions and curves for UCI.",
    creator: "Information & Computer Science Student Council (ICSSC)",
    tags: ["Unofficial", "ICSSC", "Course Info"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Unknown"
  },
  /* Official */
  {
    name: "ZotGPT",
    link: "https://zotgpt.uci.edu/",
    description: "ZotGPT Chat is a free AI tool for UCI students, faculty, and staff, offering features like multiple models, chat history, file uploads, and a large context window.",
    creator: "UCI Office of Information Technology",
    tags: ["Official", "AI", "API"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Yes"
  },
  {
    name: "ZotBites",
    link: "https://zotbites.basicneeds.uci.edu/",
    description: "A text-based notification system that invites students to be an after-event guest when a catered event is over and excess food is available",
    creator: "UCI Basic Needs Center",
    tags: ["Official", "Food"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Yes"
  },
  /* Other */
  {
    name: "Antscoper",
    link: "https://antscoper.appspot.com/",
    description: "A tool for viewing the class schedules of every classroom and lecture hall of any particular building at UCI.",
    creator: "Ted Michael Celis (Krazete)",
    tags: ["Unofficial", "Course Info"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "No"
  },
  {
    name: "ZotSites",
    link: "https://zotsites.com/",
    description: "A UCI-specific search engine powered by generative AI that helps students navigate resources, tips and information across the plethora of UCI-related websites.",
    creator: "David Culciar & Arjun Dabir",
    tags: ["Unofficial", "AI"],
    screenshot: "/AntAlmanac.jpg",
    activelyMaintained: "Yes"
  },
];

export const tags: Tag[] = [...new Set(websites.map(w => w.tags).flat())].sort();

/*

  {
    name: "",
    link: "",
    description: "",
    creator: "",
    tags: [""],
    screenshot: "",
    activelyMaintained: ""
  },

*/
