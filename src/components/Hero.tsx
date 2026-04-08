import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const words = "TIẾNG CA NGẤT NGƯỞNG".split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-parchment"
    >
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* Floating Mosaic Shards (Decorative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              rotate: Math.random() * 360,
              scale: 0.5 + Math.random()
            }}
            animate={{
              y: [null, "-=20", "+=20"],
              rotate: [null, "+=10", "-=10"]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-8 h-8 bg-imperial-red/20 mosaic-mask"
          />
        ))}
      </div>

      {/* Author Portrait - Artistic Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
        <div className="relative w-[80%] h-[80%] md:w-[40%] md:h-[60%] overflow-hidden">
          <img 
            src="https://picsum.photos/seed/portrait/800/1000" 
            alt="Nguyễn Công Trứ Portrait"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain opacity-10 grayscale"
          />
          <div className="absolute inset-0 mosaic-mask opacity-20" />
        </div>
      </motion.div>

      {/* Title Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative"
        >
          <h1 className="font-serif text-7xl md:text-9xl lg:text-[12rem] text-imperial-red font-black tracking-tighter uppercase relative z-10">
            HI VĂN
          </h1>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-x-4 mt-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 1 + i * 0.2,
                type: "spring",
                stiffness: 200
              }}
              className="font-calligraphy text-2xl md:text-4xl text-ink-black italic"
            >
              {word}
            </motion.span>
          ))}
        </div>
        
        <motion.p 
          style={{ opacity }}
          className="mt-8 font-sans text-sm tracking-[0.5em] uppercase text-ink-black/60"
        >
          Tiếng ca ngất ngưởng giữa dòng thế sự
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Cuộn để khai màn</span>
        <div className="w-px h-8 bg-imperial-red/50" />
      </motion.div>
    </section>
  );
}
