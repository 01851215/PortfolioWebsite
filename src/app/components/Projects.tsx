import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import CardSwap, { Card } from "./CardSwap";
import Folder from "./Folder";

const projects = [
  {
    id: 1,
    title: "Stylar — AI-Powered Design Tool",
    category: "Product Design · Figma Plugin",
    year: "2025",
    description:
      "An intelligent Figma plugin that lets designers apply AI-generated styles — colours, textures, and moods — directly onto design elements.",
    image:
      "https://images.unsplash.com/photo-1653647054667-c99dc7f914ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRlc2lnbiUyMHRvb2wlMjBGaWdtYSUyMGludGVyZmFjZSUyMGRhcmt8ZW58MXx8fHwxNzczMTY4MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["AI Design", "Figma Plugin", "Generative UI"],
    link: "https://stylar.figma.site/",
  },
  {
    id: 2,
    title: "Kaluza Demand-Response Platform",
    category: "Strategy & Data Analysis",
    year: "2025",
    description:
      "Commercial deployment strategy for Kaluza's demand-response platform in Orkney, tackling wind curtailment and fuel poverty.",
    image:
      "https://images.unsplash.com/photo-1663702610675-a13c95299b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBlbmVyZ3klMjBkYXRhJTIwYW5hbHl0aWNzJTIwZGFya3xlbnwxfHx8fDE3NzU0ODQ2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Financial Modelling", "Energy Strategy"],
    link: null,
  },
  {
    id: 3,
    title: "OmniTrip — AI Travel Companion",
    category: "Mobile Design · Full Stack",
    year: "2025",
    description:
      "A mobile-first travel app with an AI \"Buddy\" that plans trips, books flights, tracks budgets, and gives real-time voice guidance.",
    image:
      "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB0cmF2ZWwlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXJrJTIwVUl8ZW58MXx8fHwxNzc1NDg1MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Supabase", "OpenAI"],
    link: "https://omnitrip-buddy-eq5u.vercel.app/",
  },
  {
    id: 4,
    title: "Beneath the Surface — Empathy Board Game",
    category: "Game Design · User Research",
    year: "2024",
    description:
      "A tabletop card game building empathy between neurotypical and neurodivergent people around autistic shutdown.",
    image:
      "https://images.unsplash.com/photo-1617783919078-b4d1cffde0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBjYXJkcyUyMHRhYmxldG9wJTIwZGVzaWduJTIwbWluaW1hbCUyMGRhcmt8ZW58MXx8fHwxNzc1NDg2MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Game Design", "Playtesting", "Accessibility"],
    link: null,
  },
  {
    id: 5,
    title: "E-Commerce Redesign",
    category: "Web Design",
    year: "2024",
    description:
      "Conversion-focused redesign that increased checkout completion by 35%.",
    image:
      "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbWluaW1hbHxlbnwxfHx8fDE3NzMwNTkzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Shopify", "A/B Testing", "UX Audit"],
    link: null,
  },
];

function PaperContent({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="paper-content">
      <img src={project.image} alt={project.title} />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <div className="paper-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="paper-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectCardContent({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="relative overflow-hidden" style={{ height: "50%" }}>
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {project.link && (
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        )}
      </div>
      <div className="px-6 pb-5 pt-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/30 truncate" style={{ fontSize: "0.75rem" }}>
            {project.category}
          </span>
          <span className="text-white/20 shrink-0 ml-2" style={{ fontSize: "0.75rem" }}>
            {project.year}
          </span>
        </div>
        <h3
          className="text-white mb-2 tracking-[-0.02em]"
          style={{ fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.3 }}
        >
          {project.title}
        </h3>
        <p className="text-white/35 mb-3 flex-1" style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40"
              style={{ fontSize: "0.7rem" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [opened, setOpened] = useState(false);

  const handleCardClick = (index: number) => {
    const project = projects[index];
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="work" className="relative py-32 px-6 overflow-hidden">
      {/* Section glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #818cf8, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            className="text-white/30 uppercase tracking-[0.2em] mb-4 block"
            style={{ fontSize: "0.75rem" }}
          >
            Selected Work
          </span>
          <h2
            className="text-white tracking-[-0.03em]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.15 }}
          >
            Featured Projects
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {!opened ? (
            /* Big Folder — click to reveal cards */
            <motion.div
              key="folder"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, y: -40 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-8 cursor-pointer"
              onClick={() => setOpened(true)}
            >
              <Folder
                color="#818cf8"
                size={4}
                items={[
                  <PaperContent key="p1" project={projects[0]} />,
                  <PaperContent key="p2" project={projects[1]} />,
                  <PaperContent key="p3" project={projects[2]} />,
                ]}
              />
              <motion.p
                className="text-white/40 text-sm tracking-widest uppercase"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click to open
              </motion.p>
            </motion.div>
          ) : (
            /* Sweeping Cards */
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Controls */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setOpened(false)}
                  className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/50 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300 text-sm tracking-wide"
                >
                  Close folder
                </button>
                <div className="flex items-center gap-2 text-white/30" style={{ fontSize: "0.75rem" }}>
                  <span className="px-2 py-1 rounded bg-white/[0.08] border border-white/[0.1] text-white/50 font-mono text-xs">&larr;</span>
                  <span className="px-2 py-1 rounded bg-white/[0.08] border border-white/[0.1] text-white/50 font-mono text-xs">&rarr;</span>
                  <span className="ml-1">to browse</span>
                </div>
              </div>

              <div style={{ height: "650px", position: "relative", width: "100%" }}>
                <CardSwap
                  width={400}
                  height={540}
                  cardDistance={80}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                  skewAmount={4}
                  easing="elastic"
                  onCardClick={handleCardClick}
                >
                  {projects.map((project) => (
                    <Card key={project.id} customClass="project-swap-card">
                      <ProjectCardContent project={project} />
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
