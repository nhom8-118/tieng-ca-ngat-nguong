import { motion } from "motion/react";

export default function Footer() {
  const poemLines = [
    "Vũ trụ nội mạc phi phận sự",
    "Ông Hi Văn tài bộ đã vào lồng",
    "Khi Thủ khoa, khi Tham tán, khi Tổng đốc Đông",
    "Gồm thao lược đã nên tay ngất ngưởng",
    "Lúc bình Tây cờ đại tướng",
    "Có khi về Phủ doãn Thừa Thiên",
    "Đô môn giải tổ chi niên",
    "Đạc ngựa bò vàng đeo ngất ngưởng",
    "Kìa núi nọ phao phao mây trắng",
    "Tay kiếm cung mà nên dạng từ bi",
    "Gót tiên theo đủng đỉnh một đôi dì",
    "Bụt cũng nực cười ông ngất ngưởng",
    "Được mất dương dương người thái thượng",
    "Khen chê phơi phới ngọn đông phong",
    "Khi ca, khi tửu, khi cắc, khi tùng",
    "Không Phật, không Tiên, không vướng tục",
    "Chẳng Trái, chẳng Nhạc cũng vào phường Hàn, Phú",
    "Nghĩa vua tôi cho vẹn đạo sơ chung",
    "Trong triều ai ngất ngưởng như ông!"
  ];

  return (
    <footer className="bg-ink-black text-parchment pt-32 pb-12 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <div className="absolute inset-0 blur-3xl bg-imperial-red/20 rounded-full" />
          <h2 className="relative z-10 font-serif text-4xl md:text-6xl mb-8">
            Bạn có dám ngất ngưởng giữa dòng thế sự của riêng mình?
          </h2>
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <button href="https://github.com/nhom8-118/tieng-ca-ngat-nguong" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-parchment/30 hover:bg-parchment hover:text-ink-black transition-all font-sans uppercase tracking-widest text-sm text-center">
            Khám phá thêm
          </button>
        </div>
      </div>

      {/* Marquee Poem */}
      <div className="relative border-y border-parchment/10 py-8 bg-white/5">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {poemLines.map((line, j) => (
                  <span key={j} className="font-calligraphy text-2xl italic opacity-40 hover:opacity-100 transition-opacity cursor-default">
                    {line}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-xs uppercase tracking-[0.3em]">
        <p>© 2026 NHÓM 8 - 11/8 - NGUYỄN CÔNG TRỨ</p>
        <div className="flex gap-8">
          <a href="https://www.facebook.com/nguyen.howie.2024" target="_blank" className="hover:text-imperial-red transition-colors">Facebook</a>
          <a href="https://www.instagram.com/hwienguyn?igsh=cXhsdmowaG9waTUx" target="_blank" className="hover:text-imperial-red transition-colors">Instagram</a>
          <a href="https://youtu.be/dQw4w9WgXcQ?si=KzVwFd9WwoSh3w83" target="_blank" className="hover:text-imperial-red transition-colors">Youtube</a>
        </div>
        <p>THIẾT KẾ BỞI AI - Host bởi Hồng Ân</p>
      </div>
    </footer>
  );
}
