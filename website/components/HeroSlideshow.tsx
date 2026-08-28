"use client";

import { useEffect, useState } from "react";

const IMAGES = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
  "/images/hero-6.jpg",
  "/images/hero-7.jpg",
  "/images/hero-8.jpg",
  "/images/hero-9.jpg",
  "/images/hero-10.jpg",
  "/images/hero-11.jpg",
];

const MOVEMENTS = [
  {
    from: "scale(1.08) translate(0%, 0%)",
    to: "scale(1.15) translate(-2%, -1%)",
  },
  {
    from: "scale(1.12) translate(-2%, 0%)",
    to: "scale(1.06) translate(2%, 1%)",
  },
  {
    from: "scale(1.07) translate(1%, -1%)",
    to: "scale(1.14) translate(-1%, 2%)",
  },
  {
    from: "scale(1.10) translate(-1%, 1%)",
    to: "scale(1.07) translate(2%, -1%)",
  },
  {
    from: "scale(1.08) translate(2%, 0%)",
    to: "scale(1.15) translate(-2%, 1%)",
  },
  {
    from: "scale(1.11) translate(-1%, -1%)",
    to: "scale(1.06) translate(2%, 2%)",
  },
  {
    from: "scale(1.07) translate(0%, 2%)",
    to: "scale(1.14) translate(-2%, -1%)",
  },
  {
    from: "scale(1.10) translate(2%, -1%)",
    to: "scale(1.06) translate(-1%, 2%)",
  },
  {
    from: "scale(1.08) translate(-2%, 1%)",
    to: "scale(1.15) translate(1%, -1%)",
  },
  {
    from: "scale(1.09) translate(1%, 0%)",
    to: "scale(1.06) translate(-2%, 1%)",
  },
  {
    from: "scale(1.07) translate(-1%, -1%)",
    to: "scale(1.14) translate(2%, 0%)",
  },
];

export default function HeroSlideshow({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevious(current);
      setTransitioning(true);

      setTimeout(() => {
        setCurrent((value) => (value + 1) % IMAGES.length);
        setTransitioning(false);
      }, 1600);
    }, 10000);

    return () => clearInterval(interval);
  }, [current]);

  const goToSlide = (index: number) => {
    if (index === current || transitioning) return;

    setPrevious(current);
    setTransitioning(true);

    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 1600);
  };

  const movement = MOVEMENTS[current];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

      {/* Current image */}
      <div
        key={`current-${current}`}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${IMAGES[current]}")`,
          animation: "heroZoom 10s ease-out forwards",
          zIndex: 1,
        }}
      />

      {/* Previous image during transition */}
      {previous !== null && transitioning && (
        <div
          key={`previous-${previous}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${IMAGES[previous]}")`,
            animation: "heroFadeOut 1.6s ease-in-out forwards",
            zIndex: 2,
          }}
        />
      )}

      {/* Professional dark gradient */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,24,45,0.82) 0%, rgba(8,24,45,0.58) 42%, rgba(8,24,45,0.25) 100%)",
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-[4]"
        style={{
          background:
            "linear-gradient(to top, rgba(8,24,45,0.55), transparent)",
        }}
      />

      {/* Website content */}
      <div className="relative z-10 w-full px-4">
        {children}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="h-1.5 rounded-full transition-all duration-700"
            style={{
              width: index === current ? "32px" : "7px",
              backgroundColor:
                index === current
                  ? "var(--coral)"
                  : "rgba(255,255,255,0.55)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes heroZoom {
          from {
            opacity: 0;
            transform: ${movement.from};
          }

          15% {
            opacity: 1;
          }

          to {
            opacity: 1;
            transform: ${movement.to};
          }
        }

        @keyframes heroFadeOut {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes heroZoom {
            from {
              opacity: 0;
              transform: scale(1);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
      `}</style>
    </section>
  );
}