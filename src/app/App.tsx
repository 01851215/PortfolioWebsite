import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { CaseStudies } from "./components/CaseStudies";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { IntroScreen } from "./components/IntroScreen";
import SplashCursor from "../components/SplashCursor";
import Particles from "../components/Particles";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <IntroScreen onEnter={() => setEntered(true)} />}
      {entered && (
        <SplashCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1440}
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
        />
      )}
      <div
        className="min-h-screen bg-[#09090b] text-white overflow-x-hidden relative"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
        }}
      >
        {/* Particles Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
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
