"use client";

import { useEffect, useRef, useState } from "react";

export default function VolunteerSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div
        ref={ref}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Text — slides from left */}
        <div
          style={{
            transform: visible ? "translateX(0)" : "translateX(-90px)",
            opacity: visible ? 1 : 0,
            transitionProperty: "transform, opacity",
            transitionDuration: "0.85s",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            transitionDelay: "0s",
          }}
        >
          <p
            className="uppercase text-xs tracking-widest mb-3 font-sans"
            style={{ color: "var(--coral)" }}
          >
            Volunteer
          </p>

          <h2
            className="text-3xl font-bold font-sans mb-5"
            style={{ color: "var(--navy)" }}
          >
            Become a Volunteer
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Your involvement can lead to lasting improvements in the well-being
            of communities. We welcome educators, healthcare workers, builders,
            organisers, and anyone with a heart to serve.
          </p>

          <a
            href="https://forms.gle/4ry4xDKefR5ZzRRe9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "var(--navy)" }}
            className="
              inline-block
              px-8
              py-4
              rounded
              font-bold
              font-sans
              text-white
              text-sm
              tracking-wide
              transition-all
              duration-300
              ease-in-out
              hover:scale-110
              hover:-translate-y-1
              hover:shadow-xl
              active:scale-95
            "
          >
            SIGN UP NOW
          </a>
        </div>

        {/* Image — slides from right */}
        <div
          className="
            group
            rounded-3xl
            overflow-hidden
            shadow-lg
            transition-all
            duration-500
            ease-out
            hover:-translate-y-2
            hover:shadow-2xl
          "
          style={{
            transform: visible ? "translateX(0)" : "translateX(90px)",
            opacity: visible ? 1 : 0,
            transitionProperty: "transform, opacity, box-shadow",
            transitionDuration: "0.85s",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            transitionDelay: "0.1s",
          }}
        >
          <div
            role="img"
            aria-label="Volunteers at work"
            className="relative w-full h-80 overflow-hidden"
            style={{
              backgroundImage: "url('/images/Volunteer.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Hover overlay */}
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
                  "linear-gradient(to top, rgba(18,40,72,0.45), transparent 65%)",
              }}
            />

            {/* Image zoom */}
            <div
              className="
                absolute
                inset-0
                bg-cover
                bg-center
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
              "
              style={{
                backgroundImage: "url('/images/Volunteer.jpg')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
