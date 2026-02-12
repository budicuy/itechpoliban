"use client";

import { useEffect, useState } from "react";
import { MdRocketLaunch, MdVisibility, MdChevronRight } from "react-icons/md";

export default function VisiMisi() {
  const [activeMisi, setActiveMisi] = useState(0);

  const misiData = [
    {
      num: "01.",
      title: "Wadah Kreativitas",
      text: "Mewadahi kreatifitas mahasiswa di bidang IT.",
    },
    {
      num: "02.",
      title: "Koordinasi Kegiatan",
      text: "Mengkoordinir kegiatan kemahasiswaan yang bergerak di bidang IT.",
    },
    {
      num: "03.",
      title: "Partisipasi Kompetisi",
      text: "Mendorong mahasiswa untuk ikut berpartisipasi dalam kompetisi di bidang IT.",
    },
    {
      num: "04.",
      title: "Pengembangan Teknologi",
      text: "Mendorong mahasiswa untuk mengembangkan teknologi dilingkungan kampus maupun masyarakat.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMisi((prev) => (prev + 1) % misiData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-20 lg:py-32 bg-background-dark relative overflow-hidden"
      id="visi-misi"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-ping"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              Goal & Objectives
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white px-2">
            Visi & <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-yellow-200">Misi</span> Komunitas
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Visi Section - 2 columns */}
          <div className="lg:col-span-2 group relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative h-full glass-card p-10 lg:p-12 rounded-[2.5rem] border-white/5 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div>
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/30">
                  <MdVisibility className="text-4xl" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6">Visi</h3>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-medium italic">
                  “Meningkatkan Insan <span className="text-primary not-italic font-black">kreatif</span>, <span className="text-primary not-italic font-black">Komunikatif</span>, dan <span className="text-primary not-italic font-black">Religius</span> sehingga dapat berkompetensi dan berkompetisi nasional dan internasional dibidang IT"
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="h-px flex-1 bg-linear-to-r from-primary to-transparent"></div>
                <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest leading-none">Our Vision</span>
              </div>
            </div>
          </div>

          {/* Misi Slider - 3 columns */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex-1 glass-card p-10 lg:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent border border-accent/30">
                    <MdRocketLaunch className="text-4xl" />
                  </div>
                  <span className="text-5xl font-black text-white/5 select-none">{misiData[activeMisi].num}</span>
                </div>

                <div 
                  key={activeMisi}
                  className="min-h-[140px] transition-all duration-700 transform translate-x-0 animate-in fade-in slide-in-from-right-4"
                >
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-4">
                    {misiData[activeMisi].title}
                  </h4>
                  <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                    {misiData[activeMisi].text}
                  </p>
                </div>

                {/* Slider Indicators */}
                <div className="flex gap-2 pt-4">
                  {misiData.map((misi, idx) => (
                    <button
                      key={misi.num}
                      type="button"
                      onClick={() => setActiveMisi(idx)}
                      className="group relative h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/20"
                    >
                      {activeMisi === idx && (
                        <div 
                          className="absolute inset-0 bg-accent transition-all duration-[5000ms] linear h-full"
                          style={{ width: '100%' }}
                        ></div>
                      )}
                      {activeMisi > idx && <div className="absolute inset-0 bg-accent/40 w-full"></div>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub-Misi Grid (Tiny Previews) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {misiData.map((misi, idx) => (
                <button
                  key={misi.num}
                  type="button"
                  onClick={() => setActiveMisi(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-500 text-left ${
                    activeMisi === idx 
                    ? "bg-accent/10 border-accent/50 scale-[1.02]" 
                    : "bg-white/5 border-white/5 hover:border-white/20"
                  }`}
                >
                  <p className={`text-[10px] font-black mb-1 ${activeMisi === idx ? "text-accent" : "text-slate-500"}`}>
                    MISI {misi.num}
                  </p>
                  <MdChevronRight className={`text-xl transition-transform ${activeMisi === idx ? "translate-x-1 text-accent" : "text-white/20"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

