import { MdEmojiEvents, MdOutlineLocationOn, MdMilitaryTech } from "react-icons/md";

export default function Prestasi() {
  const achievements = [
    {
      id: 1,
      title: "Juara 1 KMIPN VI 2024",
      category: "Cyber Security",
      location: "Politeknik Negeri Jakarta",
      year: "2024",
      rank: "Gold Medal",
      description: "Berhasil meraih medali emas dalam kompetisi keamanan siber tingkat nasional antar Politeknik se-Indonesia.",
      color: "from-yellow-400 to-amber-600",
    },
    {
      id: 2,
      title: "Finalis Gemastik XVI 2023",
      category: "Game Development",
      location: "Universitas Brawijaya",
      year: "2023",
      rank: "Top 10 National",
      description: "Menjadi finalis dalam ajang bergengsi Gemastik bidang pengembangan permainan dengan inovasi game edukasi.",
      color: "from-blue-400 to-indigo-600",
    },
    {
      id: 3,
      title: "Juara 2 Hackathon Maritim 2024",
      category: "IoT & Web",
      location: "Banjarmasin",
      year: "2024",
      rank: "Silver Medal",
      description: "Inovasi sistem monitoring kapal nelayan berbasis IoT dan dashboard real-time untuk efisiensi bahan bakar.",
      color: "from-emerald-400 to-teal-600",
    },
  ];

  return (
    <section className="py-24 lg:py-40 bg-background-dark relative overflow-hidden" id="prestasi">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -ml-40"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -mr-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <MdEmojiEvents className="mr-2 text-xl" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Our Hall of Fame</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Jejak <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-accent">Prestasi</span> Kami
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium lg:px-0 px-4">
            Dedikasi dan kerja keras anggota iTech Poliban dalam berbagai ajang kompetisi teknologi tingkat regional maupun nasional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div 
              key={item.id}
              className="group relative glass-card p-1 rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-full bg-slate-900/40 backdrop-blur-xl rounded-[2.4rem] p-8 md:p-10 overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}></div>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-slate-900 shadow-lg`}>
                      <MdMilitaryTech className="text-3xl" />
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-black text-accent uppercase tracking-widest">{item.year}</div>
                      <div className="text-xs font-bold text-white/40">{item.category}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white leading-tight mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <MdOutlineLocationOn />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>

                  <div className="pt-4 flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10"></div>
                    <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.rank}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (Dummy) */}
        <div className="mt-20 text-center">
          <button
            type="button"
            className="flex items-center justify-center gap-3 mx-auto px-10 py-5 bg-white/5 border border-white/10 hover:border-primary/50 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all hover:bg-primary/10 group"
          >
            Lihat Semua Prestasi
            <MdEmojiEvents className="text-xl group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
