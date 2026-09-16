"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    img: "/images/compassion.jpg",
    title: "Compassion",
    desc: "We serve with empathy and deep care for every individual.",
  },
  {
    img: "/images/empowerment 2.jpg",
    title: "Empowerment",
    desc: "We equip communities with tools to create their own futures.",
  },
  {
    img: "/images/faith.jpg",
    title: "Faith",
    desc: "Our work is grounded in Christ-like values of love and service.",
  },
  {
    img: "/images/integrity.jpg",
    title: "Integrity",
    desc: "We operate with transparency and accountability to our communities.",
  },
];

export default function ValuesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className={`transition-all duration-700 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <SectionHeading
            label="What Guides Us"
            heading="Our Core Values"
            headingSize="text-3xl"
            className="mb-12"
          />
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="
                bg-white
                rounded-2xl
                p-6
                text-center
                shadow-sm
                border
                border-gray-100
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:shadow-xl
              "
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : "translateY(40px)",
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              {/* Image */}
              <div
                className="h-40 overflow-hidden rounded-t-2xl"
                style={{
                  width: "calc(100% + 3rem)",
                  marginLeft: "-1.5rem",
                  marginTop: "-1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <img
                  src={value.img}
                  alt={value.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-110
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="font-bold font-sans text-lg mb-2"
                style={{ color: "var(--navy)" }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}