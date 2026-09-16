"use client";

import SectionHeading from "@/components/SectionHeading";

const ways = [
  {
    img: "/images/sponsor-child.jpg",
    title: "Sponsor a Child",
    desc: "Your sponsorship provides education, school supplies, medical care, and nutritious meals — helping break the cycle of poverty and empowering a child to achieve their dreams.",
    cta: "SPONSOR A CHILD",
    href: "https://forms.google.com",
  },
  {
    img: "/images/sponsor-family.jpg",
    title: "Sponsor a Family",
    desc: "Every family deserves a chance at a better life — food on the table, access to education, and a safe place to call home. Your support provides nutritious food, clean water, education for children, medical care, and livelihood training.",
    cta: "SPONSOR A FAMILY",
    href: "https://forms.google.com",
  },
  {
    img: "/images/donate-impact.jpg",
    title: "Donate",
    desc: "A one-time or recurring donation goes directly towards our programmes in education, health, and food security. Every amount makes a difference in the lives of families across rural Ghana.",
    cta: "DONATE NOW",
    href: "/contact",
  },
  {
    img: "/images/volunteer.jpg",
    title: "Volunteer",
    desc: "Your time and skills can lead to lasting improvements in the well-being of communities. Whether you are a teacher, doctor, builder, or organiser — we welcome your involvement.",
    cta: "SIGN UP",
    href: "https://forms.gle/4ry4xDKefR5ZzRRe9",
  },
];

// Duplicate for seamless loop
const track = [...ways, ...ways];

export default function WaysToHelpCarousel() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
          <SectionHeading
            label="How You Can Help"
            heading="There Are Millions Who Need Your Help"
            className="mb-14"
          >
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              There are millions of children around the world who lack basic
              necessities of life such as food, education, healthcare and
              shelter. You can make a difference.
            </p>
          </SectionHeading>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div
            className="marquee-track flex gap-6"
            style={{
              width: "max-content",
              perspective: "1200px",
            }}
          >
            {track.map((w, i) => (
              <div
                key={i}
                className="
                  group
                  rounded-3xl
                  border
                  border-gray-100
                  shadow-md
                  overflow-hidden
                  flex
                  flex-col
                  bg-white
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:shadow-2xl
                "
                style={{
                  width: "300px",
                  flexShrink: 0,
                  opacity: 0,
                  animation: `waysCardFlip 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${
                    0.3 + (i % ways.length) * 0.2
                  }s forwards`,
                  transformOrigin: "center",
                  backfaceVisibility: "hidden",
                }}
                onMouseEnter={(e) => {
                  const trackElement = e.currentTarget.closest(
                    ".marquee-track"
                  ) as HTMLElement | null;

                  if (trackElement) {
                    trackElement.style.animationPlayState = "paused";
                  }
                }}
                onMouseLeave={(e) => {
                  const trackElement = e.currentTarget.closest(
                    ".marquee-track"
                  ) as HTMLElement | null;

                  if (trackElement) {
                    trackElement.style.animationPlayState = "running";
                  }
                }}
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={w.img}
                    alt={w.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Image overlay */}
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
                        "linear-gradient(to top, rgba(27,58,107,0.45), transparent 65%)",
                    }}
                  />

                  {/* Shine effect */}
                  <div
                    className="
                      absolute
                      inset-y-0
                      -left-full
                      w-1/2
                      skew-x-[-20deg]
                      bg-white/20
                      group-hover:left-[140%]
                      transition-all
                      duration-1000
                      ease-in-out
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 items-center text-center">
                  <h3
                    className="text-lg font-bold font-sans mb-3"
                    style={{ color: "var(--navy)" }}
                  >
                    {w.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                    {w.desc}
                  </p>

                  {/* Button */}
                  <a
                    href={w.href}
                    target={
                      w.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      w.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{ backgroundColor: "var(--coral)" }}
                    className="
                      w-full
                      py-3
                      rounded
                      text-white
                      font-bold
                      font-sans
                      text-sm
                      tracking-wide
                      transition-all
                      duration-300
                      ease-in-out
                      hover:scale-105
                      hover:-translate-y-1
                      hover:shadow-lg
                      active:scale-95
                    "
                  >
                    {w.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marqueeScroll 18s linear infinite;
        }

        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes waysCardFlip {
          from {
            opacity: 0;
            transform: rotateY(-90deg);
          }

          to {
            opacity: 1;
            transform: rotateY(0deg);
          }
        }
      `}</style>
    </section>
  );
}