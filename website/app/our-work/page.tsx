import Link from "next/link";
import WorkProgrammes from "@/components/WorkProgrammes";
import SectionHeading from "@/components/SectionHeading";
import CertificationsSection from "@/components/CertificationsSection";

const HERO_BG = "/images/our-work.jpg";

export default function OurWork() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative z-10 max-w-3xl mx-auto rounded-3xl px-8 py-12"
          style={{ backgroundColor: "rgba(27,58,107,0.55)" }}
        >
          <p
            className="uppercase text-xs tracking-widest mb-3 font-sans opacity-0 animate-[fadeSlideDown_0.8s_ease-out_0.2s_forwards]"
            style={{ color: "var(--coral)" }}
          >
            Impact
          </p>

          <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6 text-white opacity-0 animate-[fadeSlideUp_0.9s_ease-out_0.5s_forwards]">
            Our Work
          </h1>

          <p className="text-white/85 text-lg leading-relaxed opacity-0 animate-[fadeSlideUp_0.9s_ease-out_0.8s_forwards]">
            We are proud to share the impactful strides BEEVIF has made in the
            sectors of education, health, and food security.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
            <SectionHeading
              heading="Holistic Community Development"
              headingSize="text-2xl md:text-3xl"
              className="mb-4"
            />
          </div>

          <p className="text-gray-600 leading-relaxed opacity-0 animate-[fadeSlideUp_0.9s_ease-out_0.45s_forwards]">
            Our commitment to holistic community development has led to
            significant achievements across rural Ghana. Every programme is
            designed to address immediate needs while building long-term
            resilience in the communities we serve.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="pb-20 px-4">
        <WorkProgrammes />
      </section>

      {/* Certifications */}
      <CertificationsSection />

      {/* CTA */}
      <section
        style={{ backgroundColor: "var(--coral)" }}
        className="py-16 px-4 text-white text-center overflow-hidden"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-sans mb-4 opacity-0 animate-[fadeSlideDown_0.8s_ease-out_0.2s_forwards]">
            Join the Next Cohort
          </h2>

          <p className="text-white/90 leading-relaxed mb-8 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.45s_forwards]">
            Interested in our digital creator programme, volunteer
            opportunities, or sponsoring a child? Get involved today and help
            us reach more communities.
          </p>

          <Link
            href="/get-involved"
            style={{ backgroundColor: "var(--navy)" }}
            className="
              inline-block
              px-8
              py-4
              rounded
              font-bold
              font-sans
              text-sm
              tracking-wide
              transition-all
              duration-300
              ease-in-out
              opacity-0
              animate-[fadeSlideUp_0.8s_ease-out_0.7s_forwards]
              hover:scale-110
              hover:-translate-y-1
              hover:shadow-xl
              active:scale-95
            "
          >
            GET INVOLVED
          </Link>
        </div>
      </section>
    </>
  );
}