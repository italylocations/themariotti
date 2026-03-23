import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#0a0a0a] py-14"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex flex-col items-center gap-3">
        {/* Monogram */}
        <span className="font-serif text-[22px] tracking-[4px] text-[#e8e6e1] leading-none">
          MM
        </span>

        {/* Name */}
        <span
          className="font-sans text-[12px] uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Matteo Mariotti
        </span>

        {/* Copyright */}
        <span
          className="font-sans text-[11px] mt-1"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          © 2026 All rights reserved
        </span>

        {/* Policy links */}
        <div
          className="flex items-center gap-5 mt-1 font-sans text-[11px]"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          <Link
            href="/privacy-policy"
            className="hover:text-white/40 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <span>·</span>
          <Link
            href="/cookie-policy"
            className="hover:text-white/40 transition-colors duration-200"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
