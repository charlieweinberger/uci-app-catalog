interface Website {
  name: string
  link: string
  description: string
  creator: string
  tags: string[]
  screenshot: File | string | null
  activelyMaintained: string
};

interface User {
  exists: boolean
  userName: string
  userEmail: string
};
