interface Website {
  name: string
  link: string
  description: string
  creator: string
  tags: string[]
  screenshot: string
  activelyMaintained: string
};

interface SuggestedWebsite {
  websiteName: string
  link: string
  description: string
  userEmail: string
};

type ImageType = "gallery" | "modal";
