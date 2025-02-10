"use client";

import { Marquee } from "@/components/ui/marquee";
import GalleryItem from "@/components/gallery-item";
import { websites } from "@/lib/mock-data";

export default function WebsiteMarquee() {
  // TODO: make the gallery items unclickable (other than the link) in the marquee
  return (
    <Marquee className="max-w-[1536px]" pauseOnHover>
      {websites.map((website) => (
        <GalleryItem
          key={website.id}
          website={website}
          showSaveButton={false}
          width={"w-[384px]"}
        />
      ))}
    </Marquee>
  );
}
