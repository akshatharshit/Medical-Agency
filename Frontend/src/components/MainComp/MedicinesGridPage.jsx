import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
// import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import useMedicineStore from "../../store/medicineStore.js";
import Particles from "../Ui/Particles.jsx";

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.44,
      delay: i * 0.07,
      type: "spring",
      stiffness: 110,
      damping: 18,
    },
  }),
};

export default function MedicinesGridPage() {
  const navigate = useNavigate();
  const { medicines, getAllMedicines } = useMedicineStore();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });

  // Particles init
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.warn("Particle engine init error suppressed:", error);
    }
  }, []);

  useEffect(() => {
    if (!medicines || medicines.length === 0) getAllMedicines();
    // eslint-disable-next-line
  }, []);

  const theme = document.documentElement.getAttribute("data-theme");
  const isDark = theme === "dark";

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center py-10 px-4 space-y-16  overflow-x-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#60a5fa", "#3b82f6"]}
          particleCount={800}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* -- TOP TEXT GOES HERE -- */}
      <div className="relative z-10 max-w-2xl w-full text-center space-y-2">
        <h1 className="text-3xl font-bold leading-tight text-primary">
          Medicines Catalog
        </h1>
        <p className="text-base text-base-content/70">
          Browse our selection of medicines. Click any card to see more details.
        </p>
      </div>

      {/* Cards grid */}
      <div
        ref={ref}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full mx-auto"
      >
        <AnimatePresence>
          {medicines?.map((med, i) => (
            <motion.div
              key={med._id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              exit="hidden"
              whileHover={{
                scale: 1.025,
                boxShadow:
                  "0 6px 28px 0 rgba(26,149,178,0.20), 0 0 10px 0 var(--fallback-bc, rgba(80,180,252,0.19))",
                zIndex: 15,
                borderColor: "var(--fallback-accent, #52c0ff)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
                group relative cursor-pointer rounded-xl bg-base-100 border border-base-300
                shadow-md p-4 flex flex-col w-full min-h-[345px]
                transition-all duration-150 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent overflow-hidden
              "
              onClick={() => navigate(`/medicine/${med._id}`)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") navigate(`/medicine/${med._id}`);
              }}
              aria-label={`Open details for medicine ${med.title}`}
            >
              {/* Medicine Image */}
              <div className="h-32 w-full rounded-lg overflow-hidden bg-base-300 mb-3 border border-base-200 shadow group-hover:scale-[1.03] transition-transform duration-200 relative flex items-center justify-center">
                <img
                  src={med.image?.url}
                  alt={med.title}
                  className="object-contain w-full h-full select-none pointer-events-none"
                  draggable={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 truncate text-primary group-hover:text-accent transition-colors duration-200">
                {med.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm text-base-content/70 line-clamp-3 leading-relaxed transition-colors duration-200 group-hover:text-base-content min-h-[2.5em]">
                {med.description.length > 90
                  ? `${med.description.slice(0, 90)}…`
                  : med.description}
              </p>

              {/* Badges for Brand/Company/Status */}
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="badge badge-xs badge-primary px-2 font-medium text-xs">
                  Brand: {med.brand}
                </span>
                <span className="badge badge-xs badge-info px-2 font-medium text-xs">
                  {med.companyName}
                </span>
                <span className={`badge badge-xs ${med.isAvailable ? "badge-success" : "badge-error"} px-2 font-medium text-xs`}>
                  {med.isAvailable ? "In Stock" : "Out of Stock"}
                </span>
                <span className="badge badge-xs badge-outline px-2 font-medium text-xs">
                  Qty: {med.inStockNumber}
                </span>
              </div>

              {/* Footer: Package size, MRP, Actions */}
              <div className="mt-auto flex flex-col gap-3">
                <div className="flex justify-between text-sm font-medium text-base-content/70 mb-1">
                  <span>Pack: <span className="font-semibold text-primary">{med.packageSize}</span></span>
                  <span>MRP: <span className="font-semibold text-primary">₹{med.mrp}</span></span>
                </div>
                <button
                  className="btn btn-sm btn-outline btn-primary font-semibold w-full"
                  onClick={e => {
                    e.stopPropagation();
                    navigate(`/medicine/${med._id}`);
                  }}
                >
                  Details
                </button>
              </div>

              {/* Glow Border */}
              <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent transition-colors duration-200 z-0" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
