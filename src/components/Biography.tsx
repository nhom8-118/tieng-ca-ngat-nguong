import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

const milestones = [
  {
    year: "1819",
    title: "Thủ khoa",
    description: "Khởi đầu rực rỡ trên con đường quan lộ.",
    type: "gold"
  },
  {
    year: "1820-1847",
    title: "Đại tướng, Tổng đốc",
    description: "Kinh qua trăm trận, trấn giữ biên thùy, kinh bang tế thế.",
    type: "normal"
  },
  {
    year: "1841",
    title: "Lính trơn",
    description: "Thăng trầm thế sự, từ đỉnh cao rơi xuống đáy sâu, vẫn thản nhiên.",
    type: "dark"
  },
  {
    year: "1848",
    title: "Cưỡi bò vàng",
    description: "Cáo quan về hưu, cưỡi bò vàng, đeo đạc ngựa, ngất ngưởng tiêu dao.",
    type: "normal"
  },
  {
    year: "Di sản",
    title: "Tiếng ca ngất ngưởng",
    description: "Để lại cho đời một bản lĩnh sống tự tại, không màng danh lợi.",
    type: "normal"
  }
];

export default function Biography() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeType, setActiveType] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className={`relative py-32 px-4 transition-colors duration-700 ${
        activeType === 'dark' ? 'bg-zinc-900 text-parchment' : 
        activeType === 'gold' ? 'bg-amber-50 text-ink-black' : 
        'bg-parchment text-ink-black'
      }`}
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl md:text-7xl mb-4 text-imperial-red">Dòng Thế Sự</h2>
          <p className="font-calligraphy text-xl italic opacity-70">Chân dung & Di sản của một bậc tài hoa</p>
        </div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-48 bottom-0 w-px bg-imperial-red/20 -translate-x-1/2 hidden md:block" />
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-48 w-px bg-imperial-red -translate-x-1/2 hidden md:block origin-top"
        />

        <div className="space-y-24 relative z-10">
          {milestones.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setActiveType(m.type)}
              onMouseLeave={() => setActiveType(null)}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 text-center md:text-left">
                <div className={`inline-block px-4 py-1 mb-2 border border-imperial-red font-mono text-xs tracking-widest ${
                  activeType === 'dark' && m.type === 'dark' ? 'bg-parchment text-ink-black' : ''
                }`}>
                  {m.year}
                </div>
                <h3 className={`font-serif text-3xl md:text-4xl mb-4 ${
                  m.type === 'gold' ? 'text-amber-600' : ''
                }`}>
                  {m.title}
                </h3>
                <p className="font-sans text-lg opacity-80 max-w-sm mx-auto md:mx-0">
                  {m.description}
                </p>
              </div>

              {/* Timeline Node */}
              <div className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute inset-0 border border-imperial-red/30 rounded-full" />
                <motion.div 
                  whileHover={{ scale: 1.5 }}
                  className={`w-4 h-4 rounded-full border-2 border-imperial-red z-20 ${
                    m.type === 'gold' ? 'bg-amber-400' : 
                    m.type === 'dark' ? 'bg-ink-black' : 
                    'bg-parchment'
                  }`}
                />
                <motion.div 
                  animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-imperial-red/20 rounded-full"
                />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
