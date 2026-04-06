import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Case Studies", href: "#cases" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ${
        scrolled
          ? "bg-white/[0.04] border border-white/[0.08] shadow-2xl shadow-black/40"
          : "bg-transparent border border-transparent"
      } backdrop-blur-2xl rounded-2xl`}
    >
      <div className="flex items-center justify-between px-6 py-3.5">
        <a
          href="#"
          className="text-white tracking-[-0.02em]"
          style={{ fontSize: "1.125rem", fontWeight: 600 }}
        >
          Chris Liu.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/50 hover:text-white transition-colors duration-300"
              style={{ fontSize: "0.875rem" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#09090b] rounded-xl hover:bg-white/90 transition-all duration-300"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-white/[0.06] px-6 py-4 flex flex-col gap-3"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/60 hover:text-white transition-colors py-1"
              style={{ fontSize: "0.9375rem" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-white text-[#09090b] rounded-xl"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}