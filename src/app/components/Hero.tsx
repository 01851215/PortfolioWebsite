import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Cinematic Background Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse, #6366f1 0%, #8b5cf6 30%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, #ec4899 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            animation: "gridPulse 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/50" style={{ fontSize: "0.8125rem" }}>
            Available for new projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white tracking-[-0.04em] mb-6"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 600,
            lineHeight: 1.05,
          }}
        >
          I design products
          <br />
          <span className="hero-gradient-text text-transparent bg-clip-text" style={{
            backgroundImage: "linear-gradient(90deg, #a78bfa, #818cf8, #6366f1, #c084fc, #a78bfa)",
            backgroundSize: "200% auto",
            animation: "gradientShift 4s linear infinite",
          }}>
            people love to use
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/40 max-w-xl mx-auto mb-12"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7 }}
        >
          Product Designer based in London, crafting thoughtful digital
          experiences for forward-thinking companies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-[#09090b] rounded-2xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            style={{ fontSize: "0.9375rem", fontWeight: 500 }}
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/[0.1] text-white/70 rounded-2xl hover:bg-white/[0.04] hover:text-white hover:border-white/[0.15] transition-all duration-300"
            style={{ fontSize: "0.9375rem", fontWeight: 400 }}
          >
            Learn More
          </a>
        </motion.div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <span
            className="text-white/20 uppercase tracking-[0.15em]"
            style={{ fontSize: "0.6875rem" }}
          >
            Previously at
          </span>
          <div className="flex items-center gap-8 text-white/15" style={{ fontSize: "0.9375rem", fontWeight: 500, letterSpacing: "0.02em" }}>
            <span>Rolls-Royce</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>Imperial College</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>CGCU</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
