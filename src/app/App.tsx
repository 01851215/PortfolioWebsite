import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { CaseStudies } from "./components/CaseStudies";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MouseGlow } from "./components/MouseGlow";
import { AuroraBackground } from "./components/AuroraBackground";
import { FloatingParticles } from "./components/FloatingParticles";
import { IntroScreen } from "./components/IntroScreen";
import SplashCursor from "./components/SplashCursor";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <IntroScreen onEnter={() => setEntered(true)} />}
      {entered && (
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          PRESSURE_ITERATIONS={20}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          SHADING={true}
          COLOR_UPDATE_SPEED={10}
          BACK_COLOR={{ r: 0, g: 0, b: 0 }}
          TRANSPARENT={true}
        />
      )}
      <div
        className="min-h-screen bg-[#09090b] text-white overflow-x-hidden relative"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
        }}
      >
        <AuroraBackground />
        <FloatingParticles />
        <MouseGlow />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Projects />
          <CaseStudies />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
