"use client";

import { Marquee } from "@/components/ui/marquee";
import GalleryItem from "@/components/gallery-item";
import { websites } from "@/lib/mock-data";

export default function WebsiteMarquee() {
  return (
    <div>
      <Marquee className="max-w-[1536px]" pauseOnHover>
        {websites.map((website) => (
          <GalleryItem
            key={website.id}
            website={website}
          />
        ))}
      </Marquee>
    </div>
  );
}
