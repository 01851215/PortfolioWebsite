import { useState, useEffect, useRef, useCallback } from "react";

export function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const [zooming, setZooming] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const w = window as any;
    if (w.UnicornStudio?.init) {
      w.UnicornStudio.init();
    } else {
      w.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js";
      script.onload = () => {
        (window as any).UnicornStudio.init();
      };
      document.head.appendChild(script);
    }
  }, []);

  const handleClick = useCallback(() => {
    if (zooming) return;
    setZooming(true);
    setTimeout(() => {
      onEnter();
    }, 1200);
  }, [zooming, onEnter]);

  return (
    <div
      ref={containerRef}
      className="intro-screen"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        overflow: "hidden",
        transition: "opacity 0.4s ease",
        opacity: zooming ? 0 : 1,
      }}
    >
      {/* Unicorn Studio embed — fills viewport */}
      <div
        style={{ width: "100vw", height: "100vh" }}
        data-us-project="FGZbQFlezRv58uR0o1i7"
      />

      {/* Clickable UFO overlay — centered area */}
      <button
        onClick={handleClick}
        aria-label="Enter portfolio"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: zooming
            ? "translate(-50%, -50%) scale(15)"
            : "translate(-50%, -50%) scale(1)",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 10000,
          transition: "transform 1.2s cubic-bezier(0.4, 0, 0, 1)",
        }}
      />

      {/* Hint text */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.6)",
          fontSize: "14px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          fontFamily: "system-ui, sans-serif",
          pointerEvents: "none",
          opacity: zooming ? 0 : 1,
          transition: "opacity 0.4s ease",
          animation: "pulse-hint 2s ease-in-out infinite",
        }}
      >
        Click the star to enter
      </div>

      {/* Zoom white flash overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#09090b",
          opacity: zooming ? 1 : 0,
          transition: "opacity 0.8s ease 0.4s",
          pointerEvents: "none",
          zIndex: 10001,
        }}
      />

      <style>{`
        @keyframes pulse-hint {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
