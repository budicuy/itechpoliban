import {
  MdSecurity,
  MdAnimation,
  MdCode,
  MdGamepad,
  MdMemory,
  MdBrush,
  MdBusinessCenter,
} from "react-icons/md";

export default function Divisi() {
  const divisions = [
    {
      id: 1,
      name: "Cyber Security",
      icon: MdSecurity,
      color: "from-red-500 to-orange-500",
      iconColor: "text-red-500",
      bg: "bg-red-500/10",
      border: "hover:border-red-500/30",
      description:
        "Wadah bagi mahasiswa Poliban untuk mempelajari kerentanan di dunia maya dan mengembangkan kemampuan menjadi ahli keamanan. Fokus pada kompetensi Capture The Flag (CTF) — kompetensi hacking untuk mengambil flag dengan berbagai metode teknis.",
    },
    {
      id: 2,
      name: "Animasi",
      icon: MdAnimation,
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/30",
      description:
        "Tempat bagi seniman visual untuk menciptakan dunia yang hidup. Terlibat dalam proses dari konsep hingga hasil akhir, fokus pada desain karakter, teknik animasi, dan visualisasi cerita yang menggabungkan imajinasi artistik dengan keahlian teknis.",
    },
    {
      id: 3,
      name: "Programming",
      icon: MdCode,
      color: "from-primary to-purple-500",
      iconColor: "text-primary",
      bg: "bg-primary/10",
      border: "hover:border-primary/30",
      description:
        "Wadah pengembangan perangkat lunak dari perancangan konsep hingga implementasi kode. Menguasai berbagai bahasa pemrograman dan teknologi terkini untuk membangun solusi perangkat lunak yang efisien, inovatif, dan berdampak nyata.",
    },
    {
      id: 5,
      name: "Game Development",
      icon: MdGamepad,
      color: "from-emerald-500 to-teal-500",
      iconColor: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/30",
      description:
        "Eksplorasi kreativitas dalam pembuatan permainan. Merancang, mengembangkan, dan menguji game dengan fokus pada pemrograman, desain grafis, dan animasi untuk menciptakan pengalaman bermain yang menghibur dan inovatif.",
    },
    {
      id: 6,
      name: "Internet Of Things",
      icon: MdMemory,
      color: "from-purple-500 to-indigo-500",
      iconColor: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/30",
      description:
        "Menggali potensi konektivitas objek fisik melalui jaringan digital. Merancang solusi teknologi dari perancangan sensor cerdas hingga pemantauan jarak jauh untuk menciptakan lingkungan pintar guna mewujudkan potensi Revolusi Industri 4.0.",
    },
    {
      id: 7,
      name: "UI/UX",
      icon: MdBrush,
      color: "from-orange-500 to-yellow-500",
      iconColor: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "hover:border-orange-500/30",
      description:
        "Fokus pada desain antarmuka dan pengalaman pengguna yang intuitif. Melalui riset, prototipe, dan usability testing untuk menciptakan pengalaman digital optimal yang meningkatkan kepuasan pengguna di berbagai platform.",
    },
    {
      id: 8,
      name: "Bisnis TIK",
      icon: MdBusinessCenter,
      color: "from-slate-400 to-slate-600",
      iconColor: "text-slate-400",
      bg: "bg-slate-400/10",
      border: "hover:border-slate-400/30",
      description:
        "Wadah pengembangan bisnis berbasis teknologi. Identifikasi peluang pasar, perancangan model bisnis inovatif, dan strategi pemasaran digital untuk mendorong kewirausahaan mahasiswa melalui pemahaman sinergi bisnis dan teknis.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background-dark relative overflow-hidden" id="divisi">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -ml-48"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -mr-48"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              Our Departments
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">
            Eksplorasi <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500">Potensimu</span> <br /> 
            di Berbagai Bidang
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">
            Pilih divisi yang sesuai dengan passion-mu dan mari berkembang bersama di ekosistem teknologi terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {divisions.map((div) => (
            <div
              key={div.id}
              className={`group glass-card p-8 rounded-[2.5rem] border-white/5 ${div.border} transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col items-start text-left`}
            >
              {/* Card Decorator */}
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity bg-linear-to-br ${div.color} rounded-full -mr-16 -mt-16 blur-2xl`}></div>
              
              <div className={`w-14 h-14 rounded-2xl ${div.bg} flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <div.icon className={`text-3xl ${div.iconColor}`} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {div.name}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                {div.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Join Division <span className="text-lg">→</span>
              </div>
            </div>
          ))}
          
          {/* Decorative Call to Action or Info Card if 7 items */}
          <div className="md:col-span-2 lg:col-span-1 p-8 rounded-[2.5rem] bg-linear-to-br from-primary to-purple-700 flex flex-col items-center justify-center text-center space-y-4 group cursor-pointer relative overflow-hidden min-h-[300px]">
            <div className="absolute inset-0 bg-dotted-grid-bg opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white">Ingin Tahu Lebih Lanjut?</h3>
              <p className="text-white/80 text-sm font-medium px-4">
                Bergabunglah dengan komunitas kami dan mulailah perjalanan teknologimu hari ini.
              </p>
              <button type="button" className="mt-6 px-8 py-3 bg-white text-primary rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

