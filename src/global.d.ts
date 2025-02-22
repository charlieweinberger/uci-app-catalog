interface Website {
  name: string
  link: string
  description: string
  creator: string
  tags: string[]
  screenshot: File | string | null
  activelyMaintained: string
};

interface SuggestedWebsite {
  websiteName: string
  link: string
  description: string
  userEmail: string
};
