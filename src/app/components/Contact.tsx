import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Cinematic glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #8b5cf6 0%, #6366f1 30%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="text-white/30 uppercase tracking-[0.2em] mb-6 block"
            style={{ fontSize: "0.75rem" }}
          >
            Get in Touch
          </span>

          <h2
            className="text-white tracking-[-0.04em] mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Let's create something
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #a78bfa, #818cf8, #6366f1, #c084fc, #a78bfa)",
                backgroundSize: "200% auto",
                animation: "gradientShift 4s linear infinite",
              }}
            >
              extraordinary together
            </span>
          </h2>

          <style>{`
            @keyframes gradientShift {
              0% { background-position: 0% center; }
              100% { background-position: 200% center; }
            }
          `}</style>

          <p
            className="text-white/35 max-w-lg mx-auto mb-12"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say
            hello, drop me a line.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:yl7222@ic.ac.uk"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#09090b] rounded-2xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              style={{ fontSize: "0.9375rem", fontWeight: 500 }}
            >
              <Mail className="w-4 h-4" />
              yl7222@ic.ac.uk
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/chris-liu-36b64123a" },
              { label: "Dribbble", href: "#" },
              { label: "Twitter / X", href: "#" },
              { label: "Read.cv", href: "#" },
            ].map((social, i) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-white/25 hover:text-white/60 transition-colors duration-300"
                style={{ fontSize: "0.8125rem" }}
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}