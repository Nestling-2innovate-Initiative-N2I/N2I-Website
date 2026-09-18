"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const leadership = [
  {
    name: "Thomas Etsiakoh",
    role: "Chief Executive Officer",
    img: "/images/Thomas Etsiakoh.jpg",
    bio: "Thomas founded BEEVIF with a passionate vision to fight poverty, poor health, and ignorance in rural Ghanaian communities. Under his leadership, the foundation has grown into a beacon of hope for thousands of families.",
  },
  {
    name: "Hannah Etsiakoh",
    role: "Vice President",
    img: "/images/Hannah Etsiakoh.jpg",
    bio: "Hannah drives the foundation's strategic direction and programme oversight, ensuring every initiative delivers lasting impact to the communities BEEVIF serves.",
  },
  {
    name: "Samuel Gracious Etsiakoh",
    role: "International Liaison Officer",
    img: "/images/Samuel-Gracious-Etsiakoh.jpg",
    bio: "Samuel bridges BEEVIF's local work with international partners and sponsors, expanding the foundation's reach and securing the resources needed to scale its impact.",
  },
  {
    name: "Bertha Ghartey",
    role: "Administrator",
    img: "/images/Bertha-Ghartey.jpg",
    bio: "Bertha keeps the organisation running smoothly, managing operations, communications, and administrative functions that underpin every programme BEEVIF delivers.",
  },
  {
    name: "Apostle Fred Hamilton",
    role: "USA Representative",
    img: "/images/Apostle-Fred-Hamilton.jpg",
    bio: "Apostle Fred Hamilton brings spiritual leadership and strategic guidance to BEEVIF, supporting the foundation's Christian values-driven approach to community transformation.",
  },
];

export default function LeadershipSection() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardsRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <SectionHeading
          label="The Team"
          heading="Our Leadership Team"
          className="mb-14"
        />

        {/* Leadership Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {leadership.map((person, i) => (
            <div
              key={person.name}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-gray-100
                shadow-md
                transition-all
                duration-500
                ease-out
                hover:-translate-y-3
                hover:shadow-2xl
              "
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible
                  ? "translateY(0)"
                  : "translateY(45px)",
                transitionProperty: "transform, opacity, box-shadow",
                transitionDuration: "0.8s",
                transitionTimingFunction:
                  "cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Profile Image */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                  style={{
                    background:
                      "linear-gradient(to top, rgba(18,40,72,0.25), transparent 55%)",
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-7">
                <h3
                  className="font-bold font-sans text-lg mb-1"
                  style={{ color: "var(--navy)" }}
                >
                  {person.name}
                </h3>

                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: "var(--coral)" }}
                >
                  {person.role}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}