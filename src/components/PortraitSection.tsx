import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function PortraitSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[80vh] flex items-center justify-center bg-ink-black overflow-hidden"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="relative z-10 w-full max-w-4xl px-4 flex flex-col md:flex-row items-center gap-12"
      >
        {/* Portrait Image */}
        <div className="relative w-64 h-80 md:w-80 md:h-[500px] flex-shrink-0">
          <div className="absolute inset-0 border-2 border-imperial-red/30 translate-x-4 translate-y-4" />
          <div className="relative w-full h-full overflow-hidden border border-imperial-red/50">
            <img 
              src="nguyen-cong-tru-08.webp" 
              alt="Nguyễn Công Trứ Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 mosaic-mask opacity-20" />
          </div>
        </div>

        {/* Quote */}
        <div className="text-center md:text-left">
          <p className="font-calligraphy text-3xl md:text-5xl text-parchment italic leading-tight mb-8">
            "Được mất dương dương người thái thượng,<br/>
            Khen chê phơi phới ngọn đông phong."
          </p>
          <div className="w-24 h-px bg-imperial-red mx-auto md:mx-0 mb-4" />
          <p className="font-sans text-sm uppercase tracking-[0.4em] text-imperial-red font-bold">
            Nguyễn Công Trứ (1778 - 1858)
          </p>
        </div>
      </motion.div>

      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="font-serif text-[30vw] text-parchment leading-none">HI VĂN</span>
      </div>
    </section>
  );
}
