import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[100] w-[500px] h-[500px] rounded-full opacity-[0.04]"
      animate={{ x: pos.x - 250, y: pos.y - 250 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      style={{
        background: "radial-gradient(circle, #818cf8 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  );
}
