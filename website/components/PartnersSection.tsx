"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const partners = [
  {
    name: "Bertha Ghartey",
    phone: "+233208174554",
    email: "btghartey@gmail.com",
  },
  {
    name: "Samuel Etsiakoh",
    phone: "+233503377231",
    email: "samueletsiakoh@beevif.org",
  },
  {
    name: "Hannah Etsiakoh",
    phone: "+233244822288",
    email: "etsiakoh1658@yahoo.com",
  },
  {
    name: "Lola Kusi Amoah",
    phone: "+233243677913",
    email: null,
  },
  {
    name: "Emmanuel Nii Okai",
    phone: "+233243930113",
    email: null,
  },
  {
    name: "Angela Etsiakoh",
    phone: "USA – 0019177021528",
    email: null,
  },
  {
    name: "Rev. Emmanuel Inkoom",
    phone: "Canada – 0016132950503",
    email: null,
  },
];

export default function PartnersSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <SectionHeading
          label="Partners"
          heading="Clarion Call for Caring Vision Partners and Sponsors"
          headingSize="text-3xl md:text-4xl"
          className="mb-14"
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            perspective: "1200px",
          }}
        >
          {partners.map((p, i) => (
            <div
              key={p.name}
              className="
                group
                rounded-3xl
                border
                border-gray-100
                bg-white
                shadow-sm
                p-7
                hover:shadow-xl
              "
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "rotateY(0deg)"
                  : "rotateY(-90deg)",
                transformOrigin: "center",
                transitionProperty:
                  "transform, opacity, box-shadow",
                transitionDuration: "0.8s",
                transitionTimingFunction:
                  "cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: `${i * 0.15}s`,
                backfaceVisibility: "hidden",
              }}
            >
              {/* Initial */}
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  mb-5
                  font-bold
                  text-white
                  font-sans
                  text-sm
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
                style={{
                  backgroundColor: "var(--navy)",
                }}
              >
                {p.name.charAt(0)}
              </div>

              {/* Name */}
              <h3
                className="font-bold font-sans text-base mb-3"
                style={{ color: "var(--navy)" }}
              >
                {p.name}
              </h3>

              {/* Contact Details */}
              <div className="space-y-2 text-sm text-gray-600">
                <p>{p.phone}</p>

                {p.email && (
                  <a
                    href={`mailto:${p.email}`}
                    className="
                      block
                      hover:underline
                      transition-opacity
                      duration-300
                      hover:opacity-75
                    "
                    style={{ color: "var(--coral)" }}
                  >
                    {p.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}