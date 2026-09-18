import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import MissionSection from "@/components/MissionSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StatsBar from "@/components/StatsBar";
import AnimatedSection from "@/components/AnimatedSection";

const ABOUT_IMG = "/images/pexels-roman-odintsov-11025019.jpg";

const pillars = [
  {
    img: "/images/education-new.jpg",
    title: "Education",
    desc: "Supporting schools, scholarships, and training programmes to give every child access to quality learning.",
  },
  {
    img: "/images/health-new.jpg",
    title: "Health",
    desc: "Running medical outreach campaigns and healthcare services to advance community well-being.",
  },
  {
    img: "/images/food-security-new.jpg",
    title: "Food Security",
    desc: "Distributing relief goods and implementing nutrition programmes to fight hunger across rural Ghana.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSlideshow>
        <div
          className="max-w-4xl mx-auto rounded-2xl px-8 py-14"
          style={{ backgroundColor: "rgba(27,58,107,0.55)" }}
        >
        <p
  className="uppercase tracking-widest text-sm mb-4 font-sans
             opacity-0 animate-[fadeSlideDown_0.8s_ease-out_0.2s_forwards]"
  style={{ color: "var(--coral)" }}
>
  Baiden Etsiakoh Eagle Vision Foundation
</p>

<h1
  className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-sans text-white
             opacity-0 animate-[fadeSlideUp_0.9s_ease-out_0.5s_forwards]"
>
  Bringing Hope,
  <br />
  Changing Lives
</h1>

<p
  className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed
             opacity-0 animate-[fadeSlideUp_0.9s_ease-out_0.8s_forwards]"
>
  We thrive to fight poverty, poor health, and ignorance among rural
  dwellers while spreading the gospel of hope across Ghana.
</p>

          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeSlideUp_0.9s_ease-out_1.1s_forwards]">
  <Link
    href="/get-involved"
    style={{ backgroundColor: "var(--coral)" }}
    className="px-8 py-4 rounded font-bold font-sans tracking-wide text-white hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 text-sm"
  >
    DONATE NOW
  </Link>

  <Link
    href="/get-involved"
    className="px-8 py-4 rounded font-bold font-sans tracking-wide text-white border border-white hover:bg-white hover:text-[#1B3A6B] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 text-sm"
  >
    SPONSOR A CHILD
  </Link>

  <Link
    href="/our-work"
    className="px-8 py-4 rounded font-bold font-sans tracking-wide text-white border border-white/60 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
  >
    OUR WORK
  </Link>
</div>
        </div>
      </HeroSlideshow>

      {/* STATS BAR */}
      <StatsBar />

      {/* ABOUT US */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* About Image */}
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src={ABOUT_IMG}
                  alt="Community members supported by BEEVIF"
                  className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
                />

                <div
                  className="absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl -z-10"
                  style={{ backgroundColor: "var(--coral)" }}
                />
              </div>
            </AnimatedSection>

            {/* About Text */}
            <div>
              <AnimatedSection direction="right">
                <SectionHeading
                  label="Who We Are"
                  heading="About Us"
                  className="mb-8"
                />
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.15}>
                <p className="text-gray-600 leading-relaxed">
                  The Baiden Etsiakoh Eagle Vision Foundation (BEEVIF) is a
                  Ghana-registered charitable foundation based in Tantra Hills,
                  Accra. Our primary initiative, Nestling 2Innovate (N2I),
                  delivers STEM, digital skills, and artificial intelligence
                  education to school-age children and out-of-school youth in
                  under-resourced communities. Operating from the Special Grace
                  Academy (SGA) campus, N2I serves 172 learners while extending
                  reach to neighboring schools and Senior High School graduates.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.3}>
                <p className="text-gray-600 leading-relaxed mt-5">
                  Since 2025, we have successfully run four proof-of-concept
                  programs in web design, global virtual internships,
                  programming, and AI literacy — notably producing one of the
                  first Google Gemini AI Certified (K12) students in Ghana.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Mission Introduction */}
          <div className="border-t border-gray-200 pt-12 mt-20">
            <AnimatedSection direction="up">
              <SectionHeading
                label="What Drives Us"
                heading="Our Mission"
                headingSize="text-2xl md:text-3xl"
                className="mb-8"
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                At BEEVIF, our mission is to empower individuals and families
                by providing access to quality education, promoting health and
                well-being, and ensuring food security. We believe that by
                addressing these fundamental areas, we can foster self-reliant
                and thriving communities.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <MissionSection />

      {/* THREE PILLARS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Do"
            heading="Our Three Core Focus Areas"
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, index) => (
              <AnimatedSection
                key={p.title}
                direction="flip"
                delay={0.15 * index}
                className="rounded-2xl p-8 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div
                  className="h-44 overflow-hidden rounded-t-2xl"
                  style={{
                    width: "calc(100% + 4rem)",
                    marginLeft: "-2rem",
                    marginTop: "-2rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url('${p.img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                <h3
                  className="text-xl font-bold font-sans mb-3"
                  style={{ color: "var(--navy)" }}
                >
                  {p.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {p.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
<section className="relative py-24 px-4 text-center overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/cta-video.mp4" type="video/mp4" />
  </video>

  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-[#1B3A6B]/60"></div>

  {/* CTA Content */}
  <div className="relative z-10 max-w-3xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6 text-white">
      Your Generosity Can Change a Life Forever
    </h2>

    <p className="text-lg md:text-xl text-white mb-10 leading-relaxed">
      There are millions of children around the world who lack basic
      necessities. By donating or sponsoring a child, you give them hope
      for a brighter future.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center gap-4">

      {/* DONATE */}
      <Link
        href="/get-involved"
        style={{ backgroundColor: "var(--coral)" }}
        className="
          inline-block
          px-8 py-4
          rounded
          font-bold
          font-sans
          text-sm
          tracking-wide
          text-white
          shadow-md
          transform
          transition-all
          duration-300
          ease-in-out
          hover:scale-110
          hover:-translate-y-1
          hover:shadow-2xl
          active:scale-95
        "
      >
        DONATE
      </Link>

      {/* VOLUNTEER */}
      <Link
        href="/get-involved"
        className="
          inline-block
          px-8 py-4
          rounded
          font-bold
          font-sans
          text-sm
          tracking-wide
          text-white
          border
          border-white
          shadow-md
          transform
          transition-all
          duration-300
          ease-in-out
          hover:bg-white
          hover:text-[#1B3A6B]
          hover:scale-110
          hover:-translate-y-1
          hover:shadow-2xl
          active:scale-95
        "
      >
        VOLUNTEER
      </Link>

    </div>
  </div>
</section>

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />
    </>
  );
}