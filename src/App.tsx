/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import PortraitSection from "./components/PortraitSection";
import Decoding from "./components/Decoding";
import Footer from "./components/Footer";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      setIsClicking(true);
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrails((prev) => [...prev, newTrail]);
      setTimeout(() => setIsClicking(false), 150);
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const [isStarted, setIsStarted] = useState(false);

  if (!isStarted) {
    return (
      <div className="fixed inset-0 z-[20000] bg-parchment flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-serif text-6xl md:text-8xl text-imperial-red mb-4">HI VĂN</h1>
          <p className="font-calligraphy text-xl italic mb-12 opacity-60">Tiếng ca ngất ngưởng giữa dòng thế sự</p>
          
          <button 
            onClick={() => setIsStarted(true)}
            className="group relative px-12 py-4 overflow-hidden"
          >
            <div className="absolute inset-0 border border-imperial-red transition-transform group-hover:scale-105" />
            <span className="relative z-10 font-sans uppercase tracking-[0.5em] text-sm">Khai Màn</span>
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-imperial-red/5"
            />
          </button>
          
          <p className="mt-8 text-[10px] uppercase tracking-widest opacity-40">Trải nghiệm tốt nhất với âm thanh</p>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative bg-parchment selection:bg-imperial-red selection:text-white">
      {/* Custom Cursor Trail */}
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            className="fixed pointer-events-none z-[9999] w-12 h-12 border-2 border-imperial-red rounded-full flex items-center justify-center"
            style={{ left: trail.x - 24, top: trail.y - 24 }}
          >
            <span className="text-[8px] font-serif text-imperial-red font-bold">HI VĂN</span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Cursor Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-imperial-red rounded-full pointer-events-none z-[10000] flex items-center justify-center overflow-hidden"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-imperial-red rounded-full" />
      </motion.div>

      {/* Sections */}
      <Hero />
      <PortraitSection />
      <Biography />
      <Decoding />
      <Footer />
    </main>
  );
}

