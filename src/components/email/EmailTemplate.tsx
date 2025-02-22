export default function EmailTemplate({ websiteName, link, description, userEmail }: SuggestedWebsite) {
  return (
    <div className="flex flex-col">
      <h1>{websiteName}</h1>
      <p><strong>Link:</strong> {link}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>User Email:</strong> {userEmail}</p>
    </div>
  );
};
