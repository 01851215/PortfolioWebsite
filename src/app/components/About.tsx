import { useState } from "react";
import { motion } from "motion/react";
import chrisPhoto from "../../assets/b1fc3b5532c2746efd387eafd09da02947ccc571.png";
import ProfileCard from "./ProfileCard";

const skills = [
  "Python", "SQL", "Power BI", "Excel (Advanced)", "MATLAB",
  "ANSYS", "Siemens NX", "Data Visualisation", "DfM", "ERP Systems",
  "Full Stack Engineering", "Backend Coding", "Project Management",
  "Stakeholder Communication", "Problem Solving", "Continuous Improvement",
];

const experience = [
  { role: "Engineering & Technology Placement", company: "Rolls-Royce plc", period: "Apr 2025 — Oct 2025" },
  { role: "Operation Manager", company: "CGCU", period: "Sep 2025 — Present" },
  { role: "Operations Manager & Secretary", company: "Design Engineering Society", period: "Sep 2023 — Jun 2024" },
  { role: "Undergraduate Teaching Assistant", company: "Imperial College London", period: "Oct 2024 — Jan 2025" },
  { role: "Computational Thinking — Student Shaper", company: "Imperial College London", period: "Jul — Sep 2024" },
  { role: "FYP — Learning-to-Rank Street Popularity", company: "Imperial College London", period: "Jul — Sep 2024" },
];

export function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="relative py-32 px-6">
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6366f1, transparent 70%)",
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
            About Me
          </span>
          <h2
            className="text-white tracking-[-0.03em]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.15 }}
          >
            A bit about Chris
          </h2>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* Flip Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="about-flip-container mx-auto lg:mx-0"
            onClick={() => setFlipped(!flipped)}
          >
            <div className={`about-flip-inner ${flipped ? "flipped" : ""}`}>
              {/* Front — Profile Card */}
              <div className="about-flip-front">
                <ProfileCard
                  name="Chris Liu"
                  title="Design Engineer"
                  handle="chrisliu"
                  status="Imperial College London"
                  contactText="Flip me"
                  avatarUrl={chrisPhoto}
                  showUserInfo={true}
                  enableTilt={!flipped}
                  behindGlowColor="rgba(129, 140, 248, 0.5)"
                  innerGradient="linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
                  onContactClick={() => setFlipped(true)}
                />
              </div>

              {/* Back — Info Card */}
              <div className="about-flip-back">
                <div
                  className="w-full overflow-hidden"
                  style={{
                    aspectRatio: "0.718",
                    maxHeight: "540px",
                    height: "80svh",
                    background: "linear-gradient(145deg, #0f0f1a 0%, #111127 50%, #0a0a1e 100%)",
                    borderRadius: "30px",
                    border: "1px solid rgba(129, 140, 248, 0.15)",
                    padding: "20px 18px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(129,140,248,0.08)",
                    display: "flex",
                    flexDirection: "column" as const,
                  }}
                >
                  {/* Bio */}
                  <div className="mb-3">
                    <div
                      className="text-indigo-400/60 uppercase tracking-[0.15em] mb-1"
                      style={{ fontSize: "0.55rem" }}
                    >
                      Who am I
                    </div>
                    <p className="text-white/50" style={{ fontSize: "0.62rem", lineHeight: 1.6 }}>
                      Design Engineering student at Imperial College London (MEng, Predicted First).
                      Background in manufacturing, operations & process optimisation — hands-on experience at Rolls-Royce.
                    </p>
                    <p className="text-white/35 mt-1" style={{ fontSize: "0.58rem", lineHeight: 1.6 }}>
                      Passionate about motorsport engineering, AI in manufacturing, race strategy analytics & sustainable innovation. English, Chinese, basic Japanese.
                    </p>
                  </div>

                  {/* Core Skills */}
                  <div className="mb-3">
                    <div
                      className="text-indigo-400/60 uppercase tracking-[0.15em] mb-1"
                      style={{ fontSize: "0.55rem" }}
                    >
                      Core Skills
                    </div>
                    <div className="flex flex-wrap gap-0.5">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300/70"
                          style={{ fontSize: "0.5rem", lineHeight: 1.3 }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex-1 min-h-0">
                    <div
                      className="text-indigo-400/60 uppercase tracking-[0.15em] mb-1"
                      style={{ fontSize: "0.55rem" }}
                    >
                      Experience
                    </div>
                    <div>
                      {experience.map((exp) => (
                        <div
                          key={`${exp.company}-${exp.role}`}
                          className="py-1 border-b border-white/[0.04] last:border-0"
                        >
                          <div className="text-white/60" style={{ fontSize: "0.56rem", fontWeight: 500, lineHeight: 1.3 }}>
                            {exp.role}
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/30" style={{ fontSize: "0.5rem" }}>
                              {exp.company}
                            </span>
                            <span className="text-white/20 shrink-0 ml-2" style={{ fontSize: "0.48rem" }}>
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flip back hint */}
                  <div className="mt-2 text-center">
                    <span
                      className="text-white/20 uppercase tracking-widest"
                      style={{ fontSize: "0.5rem" }}
                    >
                      Click to flip back
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip */}
            <motion.p
              className="text-center text-white/25 mt-4 tracking-widest uppercase"
              style={{ fontSize: "0.7rem" }}
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {flipped ? "Click to flip back" : "Click card to reveal more"}
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
