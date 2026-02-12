import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Struktur() {
  const leaders = [
    {
      id: 1,
      name: "BUDIANNOR",
      role: "Ketua Umum",
      period: "2024 - 2025",
      image: "/placeholder-user.webp", // I'll use placeholders or just a div if image not found
      socials: { instagram: "#", linkedin: "#", github: "#" },
      color: "from-primary to-purple-600",
    },
    {
      id: 2,
      name: "M. Azhar Sadhikin",
      role: "Ketua Umum",
      period: "2023 - 2024",
      image: "/placeholder-user.webp",
      socials: { instagram: "#", linkedin: "#" },
      color: "from-accent to-yellow-500",
    },
    {
      id: 3,
      name: "Muhammad Iqbal",
      role: "Ketua Umum",
      period: "2022 - 2023",
      image: "/placeholder-user.webp",
      socials: { instagram: "#", github: "#" },
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      name: "Harry H.",
      role: "Ketua Umum",
      period: "2021 - 2022",
      image: "/placeholder-user.webp",
      socials: { instagram: "#", github: "#" },
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 lg:py-40 bg-background-dark relative overflow-hidden" id="struktur">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Our Core Team</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Struktur <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-accent">Organisasi</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm font-medium text-lg border-l-2 border-primary/30 pl-6">
            Dibalik inovasi iTech Poliban, ada tim yang berdedikasi tinggi untuk memajukan teknologi di kampus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((leader) => (
            <div 
              key={leader.id}
              className="group relative"
            >
              {/* Card Decoration */}
              <div className={`absolute inset-0 bg-linear-to-br ${leader.color} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
              
              <div className="relative glass-card rounded-[3rem] p-8 md:p-10 border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Image Wrapper */}
                <div className="relative w-full aspect-square rounded-4xl overflow-hidden mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                  <div className={`absolute inset-0 bg-linear-to-br ${leader.color} opacity-20`}></div>
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                    <span className="text-white/20 font-black text-4xl uppercase tracking-tighter">Photo</span>
                  </div>
                  {/* Using a placeholder div since images might not exist */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-slate-950 to-transparent"></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">{leader.period}</div>
                    <h3 className="text-2xl font-black text-white group-hover:text-accent transition-colors">{leader.name}</h3>
                    <p className="text-slate-400 font-bold leading-none mt-1">{leader.role}</p>
                  </div>

                  <div className="h-px w-full bg-white/5"></div>

                  <div className="flex items-center gap-4">
                    {leader.socials.instagram && (
                      <a href={leader.socials.instagram} className="text-slate-500 hover:text-white transition-colors">
                        <FaInstagram className="text-xl" />
                      </a>
                    )}
                    {leader.socials.linkedin && (
                      <a href={leader.socials.linkedin} className="text-slate-500 hover:text-white transition-colors">
                        <FaLinkedin className="text-xl" />
                      </a>
                    )}
                    {leader.socials.github && (
                      <a href={leader.socials.github} className="text-slate-500 hover:text-white transition-colors">
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Internal Members */}
        <div className="mt-24 p-1 rounded-[3rem] bg-linear-to-r from-primary/20 via-white/5 to-accent/20">
          <div className="bg-slate-900/60 backdrop-blur-2xl rounded-[2.9rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-black text-white">Ingin Menjadi Bagian dari Kami?</h3>
              <p className="text-slate-400 font-medium max-w-xl">
                Kami selalu membuka kesempatan bagi mahasiswa Poliban yang ingin berkontribusi dan berkembang bersama di iTech.
              </p>
            </div>
            <button type="button" className="px-10 py-5 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-primary/20 shrink-0">
              Lihat Program Kerja
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
