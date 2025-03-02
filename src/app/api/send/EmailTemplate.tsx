export default function EmailTemplate({
  userName,
  userEmail,
  feedbackType,
  appName,
  appLink,
  content,
}: Feedback) {
  return (
    <div className="flex flex-col">
      <p><strong>From:</strong> {userName} ({userEmail})</p>
      <p><strong>Feedback Type:</strong> {feedbackType}</p>      
      {(feedbackType === "App suggestion") && <p><strong>App:</strong> {appName} ({appLink})</p>}
      <p><strong>Content:</strong> {content}</p>
    </div>
  );
};
