import { useEffect, useRef } from "react";

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated aurora blobs */}
      <div
        className="absolute w-[800px] h-[800px] opacity-[0.035]"
        style={{
          top: "-10%",
          left: "20%",
          background: "radial-gradient(ellipse, #818cf8, transparent 60%)",
          filter: "blur(120px)",
          animation: "aurora1 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] opacity-[0.03]"
        style={{
          top: "40%",
          right: "-5%",
          background: "radial-gradient(ellipse, #a78bfa, transparent 60%)",
          filter: "blur(100px)",
          animation: "aurora2 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] opacity-[0.025]"
        style={{
          bottom: "10%",
          left: "-5%",
          background: "radial-gradient(ellipse, #6366f1, transparent 60%)",
          filter: "blur(100px)",
          animation: "aurora3 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] opacity-[0.02]"
        style={{
          top: "60%",
          left: "50%",
          background: "radial-gradient(ellipse, #ec4899, transparent 60%)",
          filter: "blur(80px)",
          animation: "aurora1 22s ease-in-out infinite reverse",
        }}
      />

      <style>{`
        @keyframes aurora1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, -40px) scale(1.1); }
          50% { transform: translate(-30px, 60px) scale(0.95); }
          75% { transform: translate(50px, 30px) scale(1.05); }
        }
        @keyframes aurora2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 50px) scale(1.08); }
          66% { transform: translate(40px, -30px) scale(0.92); }
        }
        @keyframes aurora3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(70px, -50px) scale(1.12); }
        }
      `}</style>
    </div>
  );
}
