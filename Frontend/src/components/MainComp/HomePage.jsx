import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ak from "../../assets/Akupi.jpg";

export default function HomePage() {
  const navigate = useNavigate();

  const handleList = () => navigate("/list");

  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.warn("Particle engine init error suppressed:", error);
    }
  }, []);

  const theme = document.documentElement.getAttribute("data-theme");
  const isDark = theme === "dark";

  return (
    <div className="relative min-h-screen flex items-center justify-center  overflow-hidden px-4 sm:px-10 py-10">
      {/* Particles background */}
      <Particles
        id="pageParticles"
        init={particlesInit}
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 90, duration: 0.4 } },
          },
          particles: {
            color: { value: isDark ? "#a5b4fc" : "#6366f1" },
            links: {
              enable: true,
              color: isDark ? "#a5b4fc" : "#6366f1",
              distance: 120,
              opacity: 0.13,
            },
            move: { enable: true, speed: 0.7 },
            number: { value: 18 },
            opacity: { value: 0.15 },
            shape: { type: "circle" },
            size: { value: 4 },
          },
        }}
      />

      {/* Decorative blob */}
      <div className="absolute top-[12%] left-[2%] w-60 h-60 sm:w-96 sm:h-96 bg-gradient-to-tr from-primary to-secondary opacity-15 blur-3xl rounded-full animate-pulse z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-12 md:gap-0 md:flex-row items-center w-full max-w-8xl">
        {/* Left: Info, TypeAnimation, Button */}
        <div className="flex-1 flex flex-col justify-center items-start md:py-12 md:pl-14 pr-0 pl-0 sm:pl-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-primary drop-shadow-[0_3px_12px_rgba(80,140,255,0.08)] select-none pb-2">
            SHASHWAT MEDICAL AGENCY
          </h1>
          <div className="mb-7 md:mb-10">
            <TypeAnimation
              sequence={[
                "Delivering Care With Compassion.",
                1800,
                "Trusted by Families Since 2005.",
                1800,
                "Shashwat Medical Agency – Leading With Integrity.",
                2000,
                "Your Health, Our Commitment.",
                1800,
              ]}
              wrapper="span"
              className="block text-lg sm:text-2xl font-semibold text-secondary/90 py-2 sm:py-4 tracking-wide"
              speed={41}
              repeat={Infinity}
            />
          </div>
          <div className="space-y-2 sm:space-y-3 text-base sm:text-lg leading-relaxed sm:leading-loose font-medium pl-1 md:pl-0">
            <div>
              <span className="font-extrabold text-primary">Address:</span>{" "}
              <span className="tracking-wide text-base-content/90">123 Medical Street, Health City, Country</span>
            </div>
            <div>
              <span className="font-extrabold text-primary">Phone:</span>{" "}
              <span className="tracking-wide text-base-content/90">+91 9876543210</span>
            </div>
            <div>
              <span className="font-extrabold text-primary">Bank:</span>{" "}
              <span className="tracking-wide text-base-content/90">Account No: 1234567890, IFSC: ABCD0123456</span>
            </div>
            <div>
              <span className="font-extrabold text-primary">Agency:</span>{" "}
              <span className="tracking-wide text-base-content/90">Shashwat Medical Agency</span>
            </div>
            <div>
              <span className="font-extrabold text-primary">Tagline:</span>{" "}
              <span className="tracking-wide text-base-content/90">Your Health, Our Priority</span>
            </div>
          </div>
          <button
            onClick={handleList}
            className="btn btn-primary px-8 py-3 rounded-full font-bold text-lg mt-10 sm:mt-12 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            List
          </button>
        </div>

        {/* Right: Floating image, responsive */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-90 md:h-90  bg-white/40 backdrop-blur-md shadow-2xl border-4 border-primary/40 flex items-center justify-center transition-transform hover:scale-105 duration-300 cursor-pointer group">
            <img
              src={ak}
              alt="Medical Agency"
              className="w-full h-full rounded-full object-cover border-none shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-2 bg-primary/40 rounded-full blur" />
          </div>
        </div>
      </div>
    </div>
  );
}
