"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const websites = [
  {
    name: "UCI WebReg",
    description: "Course registration and schedule planning",
    tags: ["Registration", "Courses", "Schedule"],
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    name: "UCI Canvas",
    description: "Learning management system for courses",
    tags: ["Courses", "Assignments", "Grades"],
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    name: "UCI ZotMail",
    description: "Official UCI email service",
    tags: ["Email", "Communication"],
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    name: "UCI Library",
    description: "Access to digital and physical resources",
    tags: ["Research", "Books", "Journals"],
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    name: "UCI Housing",
    description: "On-campus housing information and applications",
    tags: ["Housing", "Dorms", "Apartments"],
    image: "/placeholder.svg?height=150&width=200",
  },
];

export default function WebsiteMarquee() {
  return (
    <Marquee className="py-4" pauseOnHover>
      {websites.map((website, index) => (
        <div key={index} className="mx-4 flex w-64 flex-col items-center rounded-lg bg-white p-4 shadow-md">
          <Image
            width="10"
            height="10"
            src={website.image || "/placeholder.svg"}
            alt={website.name}
            className="mb-2 h-32 w-full rounded-md object-cover"
          />
          <h3 className="mb-1 text-lg font-semibold">{website.name}</h3>
          <p className="mb-2 text-sm text-gray-600">{website.description}</p>
          <div className="flex flex-wrap justify-center">
            {website.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="m-1 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Marquee>
  )
}

