"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoImg from "../public/images/Logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      style={{ backgroundColor: "var(--navy)" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
          >
            <div
              className="bg-white rounded-full p-1 shrink-0 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg"
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

            <span className="text-white font-bold text-lg leading-tight hidden sm:block transition-all duration-300 group-hover:text-white/80">
              BEEVIF
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">

            {links.map((l) => {
              const active = pathname === l.href;

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                    active
                      ? "text-white bg-white/20 shadow-sm"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label.toUpperCase()}

                  {/* Active indicator */}
                  <span
                    className={`absolute left-1/2 -bottom-1 h-0.5 rounded-full transition-all duration-300 ${
                      active
                        ? "w-5 -translate-x-1/2 opacity-100"
                        : "w-0 -translate-x-1/2 opacity-0"
                    }`}
                    style={{ backgroundColor: "var(--coral)" }}
                  />
                </Link>
              );
            })}

            {/* Donate button */}
            <Link
              href="/get-involved"
              style={{ backgroundColor: "var(--coral)" }}
              className="ml-4 px-5 py-2.5 rounded-lg text-white text-sm font-bold tracking-wide transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              DONATE
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "var(--navy-dark)" }}
      >
        <div className="px-4 pb-4 pt-2">

          {links.map((l, index) => {
            const active = pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-3.5 text-sm tracking-wide font-semibold border-b border-white/10 transition-all duration-300 ${
                  active
                    ? "text-white pl-2"
                    : "text-white/80 hover:text-white hover:pl-2"
                }`}
                style={{
                  transitionDelay: open ? `${index * 50}ms` : "0ms",
                }}
              >
                {l.label.toUpperCase()}
              </Link>
            );
          })}

          {/* Mobile Donate */}
          <Link
            href="/get-involved"
            onClick={() => setOpen(false)}
            style={{ backgroundColor: "var(--coral)" }}
            className="mt-4 block text-center py-3 rounded-lg text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg active:scale-95"
          >
            DONATE
          </Link>
        </div>
      </div>
    </nav>
  );
}