import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const questions = [
  {
    id: 1,
    color: "#B22222", // Red
    question: "Ngất ngưởng là gì?",
    answer: "Nghĩa đen là tư thế không vững, chông chênh. Nghĩa bóng là phong thái sống vượt lên trên những khuôn sáo, định kiến, tự tại giữa dòng đời."
  },
  {
    id: 2,
    color: "#0A0A0A", // Black
    question: "Hành trình ngất ngưởng?",
    answer: "Từ vị thế Thủ khoa, Đại tướng lừng lẫy đến lúc làm Lính trơn, rồi về hưu cưỡi bò vàng đi chùa. Ở đâu cũng giữ trọn cái tôi ngông nghênh, bản lĩnh."
  },
  {
    id: 3,
    color: "#004D40", // Emerald
    question: "Nghệ thuật tự xưng?",
    answer: "Cách xưng 'Ông' đầy kiêu hãnh, khẳng định vị thế cá nhân đối lập với cái 'Tay' tầm thường của thế gian."
  },
  {
    id: 4,
    color: "#DAA520", // Gold
    question: "Bốn phương diện sống?",
    answer: "Kiếm (Tài năng) - Bò vàng (Tiêu dao) - Chén rượu (Hưởng lạc) - Ngọn gió (Tự do). Tất cả hòa quyện tạo nên một Hi Văn bất tử."
  },
  {
    id: 5,
    color: "#4B0082", // Indigo
    question: "Lời nhắn hậu thế?",
    answer: "Hãy trung thực với bản ngã của chính mình. Đừng để dòng thế sự cuốn trôi đi cái chất riêng, cái 'ngất ngưởng' vốn có trong mỗi tâm hồn."
  }
];

export default function Decoding() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-32 bg-ink-black text-parchment overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl mb-4 text-imperial-red">Giải Mã "Ngất Ngưởng"</h2>
          <p className="font-calligraphy text-xl italic opacity-60">Năm câu hỏi - Một bản ngã</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {questions.map((q) => (
            <motion.div
              key={q.id}
              layoutId={`q-${q.id}`}
              onClick={() => setSelected(selected === q.id ? null : q.id)}
              className="cursor-pointer flex flex-col items-center group"
              whileHover={{ y: -5 }}
            >
              <div 
                className={`w-full py-8 border-b-2 transition-all duration-500 flex flex-col items-center ${
                  selected === q.id ? 'border-imperial-red bg-white/5' : 'border-parchment/10 hover:border-parchment/30'
                }`}
              >
                <span className="font-mono text-xs opacity-40 mb-2">0{q.id}</span>
                <p className={`font-serif text-xl text-center transition-colors ${
                  selected === q.id ? 'text-imperial-red' : 'group-hover:text-parchment'
                }`}>
                  {q.question}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="max-w-2xl text-center p-8 border border-imperial-red/30 bg-white/5 backdrop-blur-sm rounded-lg"
              >
                <h4 className="font-serif text-2xl mb-4 text-imperial-red">
                  {questions.find(q => q.id === selected)?.question}
                </h4>
                <p className="font-sans text-xl leading-relaxed opacity-90">
                  {questions.find(q => q.id === selected)?.answer}
                </p>
                
                <div className="mt-6 flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-imperial-red" />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="font-calligraphy text-2xl italic"
              >
                Chạm vào một câu hỏi để khai mở tri thức...
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
