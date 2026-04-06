import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    image: string;
    tags: string[];
    link: string | null;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -8);
    setRotateY((x - 0.5) * 8);
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const resetMouse = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      style={{
        borderRadius: "20px",
        transformStyle: "preserve-3d",
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="group relative bg-white/[0.02] border border-white/[0.06] overflow-hidden cursor-pointer transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-2xl hover:shadow-purple-500/[0.06]"
    >
      {/* Mouse-tracking glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(129,140,248,0.08), transparent 50%)`,
        }}
      />

      {/* Animated border shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          borderRadius: "20px",
          background: `conic-gradient(from ${Date.now() % 360}deg, transparent, rgba(129,140,248,0.1), transparent, rgba(139,92,246,0.1), transparent)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {/* Image */}
      <div className="relative overflow-hidden" style={{ borderRadius: "20px 20px 0 0" }}>
        <div className="aspect-[16/10] overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {project.link && (
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/30" style={{ fontSize: "0.8125rem" }}>
            {project.category}
          </span>
          <span className="text-white/20" style={{ fontSize: "0.8125rem" }}>
            {project.year}
          </span>
        </div>
        <h3
          className="text-white mb-2 tracking-[-0.02em]"
          style={{ fontSize: "1.25rem", fontWeight: 600 }}
        >
          {project.title}
        </h3>
        <p className="text-white/35 mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40"
              style={{ fontSize: "0.75rem" }}
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <>
            <div className="flex items-center gap-2 text-white/40 group-hover:text-white/80 transition-colors duration-300" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
              <span>View Live</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
            <span className="mt-1 block text-white/20 group-hover:text-white/40 transition-colors duration-300 truncate" style={{ fontSize: "0.75rem" }}>
              {new URL(project.link).hostname}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );

  const wrapper = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );

  return wrapper;
}
