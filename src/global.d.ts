interface Website {
  name: string
  link: string
  description: string
  developer: string
  tags: string[]
  screenshot: string
  activelyMaintained: string
};

type ImageType = "gallery" | "modal";

interface Feedback {
  userName: string
  userEmail: string
  feedbackType: FeedbackType
  appName?: string
  appLink?: string
  content: string
};

type FeedbackType = "App suggestion" | "Feature" | "Bug" | undefined;