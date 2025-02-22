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
  name: string
  link: string
  description: string
  userEmail: string
};
