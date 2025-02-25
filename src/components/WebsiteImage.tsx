import Image from "next/image";

export default function WebsiteImage({ website, type }: {
  website: Website
  type: ImageType
}) {
  return (
    <div className={`h-${(type === "gallery") ? 40 : 72} flex flex-row justify-center`}>
      <Image
        src={website.screenshot}
        alt={`Screenshot of ${website.name}`}
        width={1000}
        height={1000}
        className="w-auto max-w-full h-auto max-h-full object-cover rounded-xl border-uci-blue border-4"
      />
    </div>
  );
}
