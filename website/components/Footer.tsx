"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImg from "../public/images/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact Us" },
];

const socials = [
  {
    label: "Facebook",
    icon: <FaFacebookF size={16} />,
    href: "https://www.facebook.com/share/185UKmthf5/",
    bg: "#1877F2",
  },
  {
    label: "Instagram",
    icon: <FaInstagram size={16} />,
    href: "https://www.instagram.com/beevif_official?igsh=MWpsY296MXgwZXE3aQ==",
    bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
  },
  {
    label: "YouTube",
    icon: <FaYoutube size={16} />,
    href: "https://youtube.com/@beevifofficial?si=J_UQjy1T-gCWvCFW",
    bg: "#FF0000",
  },
  {
    label: "TikTok",
    icon: <FaTiktok size={16} />,
    href: "#",
    bg: "#010101",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedinIn size={16} />,
    href: "https://gh.linkedin.com/company/baiden-etsiakoh-eagle-vision-foundation",
    bg: "#0A66C2",
  },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--navy-dark)" }}
      className="text-white mt-auto overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.1s_forwards]">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-5 group"
            >
              <div
                className="bg-white rounded-full p-1 shrink-0 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl"
                style={{ width: 56, height: 56 }}
              >
                <Image
                  src={LogoImg}
                  alt="BEEVIF Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-contain w-full h-full"
                />
              </div>

              <span className="font-bold text-xl transition-colors duration-300 group-hover:text-white/80">
                BEEVIF
              </span>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Bringing Hope, Changing Lives. Supporting children and families
              facing poverty, health challenges, and more — because everyone
              deserves a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.25s_forwards]">
            <h4
              className="font-bold text-sm tracking-widest uppercase mb-5"
              style={{ color: "var(--coral)" }}
            >
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group text-white/70 hover:text-white text-sm inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-4"
                      style={{ backgroundColor: "var(--coral)" }}
                    />

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">
            <h4
              className="font-bold text-sm tracking-widest uppercase mb-5"
              style={{ color: "var(--coral)" }}
            >
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm text-white/70">

              {/* Address */}
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <img
                    src="/images/map.jpg"
                    alt="Address"
                    className="w-full h-full object-contain"
                  />
                </div>

                <span className="leading-relaxed pt-1">
                  P.O Box AN15698
                  <br />
                  Accra-North, Ghana
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <img
                    src="/images/phone.jpg"
                    alt="Phone"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-1 pt-1">
                  <span>+233 50 337 7231</span>
                  <span>+233 24 482 2288</span>
                  <span>+233 50 554 8804</span>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <img
                    src="/images/email.jpg"
                    alt="Email"
                    className="w-full h-full object-contain"
                  />
                </div>

                <a
                  href="mailto:info@beevif.org"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  info@beevif.org
                </a>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div className="opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.55s_forwards]">
            <h4
              className="font-bold text-sm tracking-widest uppercase mb-5"
              style={{ color: "var(--coral)" }}
            >
              Follow Us
            </h4>

            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  style={{ background: s.bg }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg active:scale-95"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <p className="text-white/50 text-xs mt-7 leading-relaxed">
              ©2026 Baiden Etsiakoh Eagle Vision Foundation.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="mt-14 pt-6 border-t border-white/10 text-center opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.7s_forwards]"
        >
          <p className="text-white/40 text-xs">
            Bringing Hope, Changing Lives.
          </p>
        </div>

      </div>
    </footer>
  );
}