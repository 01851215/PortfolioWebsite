import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef, useState, useEffect } from "react";

const caseStudies = [
  {
    id: 1,
    title: "Rolls-Royce Industrial Placement",
    client: "Rolls-Royce",
    duration: "5 months",
    impact: "15.3% failure rate reduction",
    description:
      "Design engineering placement contributing to real-world aerospace and defence projects. Ran iterative FEA simulations in ANSYS across 8 design cycles, built Python automation pipelines cutting analysis turnaround by ~30%, and synthesised 25+ research papers on brazing technologies — reducing product failure rates by 15.3% and improving joint strength by 7% through data-driven fatigue prediction.",
    image: "https://images.unsplash.com/photo-1691315038766-3d239bb97e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb2xscy1Sb3ljZSUyMGFlcm9zcGFjZSUyMGVuZ2luZSUyMGRhcmt8ZW58MXx8fHwxNzc1NDg2NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: [
      { label: "Failure Rate", value: "-15.3%" },
      { label: "Joint Strength", value: "+7%" },
      { label: "Turnaround", value: "-30%" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative py-32 px-6">
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ec4899, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="text-white/30 uppercase tracking-[0.2em] mb-4 block"
            style={{ fontSize: "0.75rem" }}
          >
            Deep Dives
          </span>
          <h2
            className="text-white tracking-[-0.03em]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.15 }}
          >
            Case Studies
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div
                className="group relative bg-white/[0.02] border border-white/[0.06] overflow-hidden cursor-pointer transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1]"
                style={{ borderRadius: "24px" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/11] lg:aspect-auto lg:h-full">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#09090b]/40 hidden lg:block" />
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {study.client}
                      </span>
                      <span className="text-white/20" style={{ fontSize: "0.75rem" }}>
                        {study.duration}
                      </span>
                    </div>

                    <h3
                      className="text-white mb-3 tracking-[-0.02em]"
                      style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 600, lineHeight: 1.2 }}
                    >
                      {study.title}
                    </h3>

                    <p
                      className="text-white/35 mb-8"
                      style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}
                    >
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.metrics.map((metric, mi) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + mi * 0.1 }}
                        >
                          <div
                            className="text-transparent bg-clip-text mb-1"
                            style={{
                              fontSize: "1.25rem",
                              fontWeight: 600,
                              backgroundImage: "linear-gradient(135deg, #c084fc, #818cf8)",
                            }}
                          >
                            {metric.value}
                          </div>
                          <div
                            className="text-white/25"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {metric.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div>
                      <span
                        className="inline-flex items-center gap-2 text-white/50 group-hover:text-white/80 transition-colors duration-300"
                        style={{ fontSize: "0.875rem", fontWeight: 500 }}
                      >
                        Read Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}