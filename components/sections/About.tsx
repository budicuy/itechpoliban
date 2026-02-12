import Image from "next/image";
import { FaBrain, FaCode, FaReact } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="py-16 lg:py-32 bg-background-dark relative overflow-hidden"
      id="about"
    >

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual Element with Logo - Order 2 on mobile, 1 on desktop */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-[450px] mx-auto flex items-center justify-center">
              {/* Spinning Orbits */}
              <div className="absolute orbital-path w-[110%] h-[110%] border-primary/20 rotating-orbit"></div>
              <div
                className="absolute orbital-path w-[130%] h-[130%] border-accent/10 rotating-orbit"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "25s",
                }}
              ></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-accent/10 rounded-full blur-[60px] opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>

              {/* Main Logo */}
              <div className="relative z-10 w-full h-full p-8 sm:p-12 floating-icon">
                <Image
                  alt="iTech Poliban Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(102,15,189,0.3)] transition-all duration-700 group-hover:scale-105 group-hover:rotate-2"
                  src="/logo-itech.svg"
                  width={400}
                  height={400}
                  priority
                />
              </div>

              {/* Floating Stat Badges */}
              <div
                className="absolute -top-4 -left-4 glass-card p-4 rounded-2xl shadow-xl floating-icon z-20 border-white/20"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <span className="font-black">3+</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                      Years of
                    </p>
                    <p className="text-xs font-black dark:text-white">
                      Experience
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-1/2 -right-8 glass-card p-4 rounded-2xl shadow-xl floating-icon z-20 border-white/20"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <span className="font-black">100+</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                      Active
                    </p>
                    <p className="text-xs font-black dark:text-white">
                      Members
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 left-1/4 glass-card p-4 rounded-2xl shadow-xl floating-icon z-20 border-white/20"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-500">
                    <span className="font-black">50+</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                      Finished
                    </p>
                    <p className="text-xs font-black dark:text-white">
                      Projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Dots */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-accent rounded-full animate-ping opacity-20"></div>
              <div
                className="absolute bottom-20 left-0 w-3 h-3 bg-primary rounded-full animate-bounce opacity-40"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Content Side - Order 1 on mobile, 2 on desktop */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors cursor-default">
                <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  The Community
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
                Mencetak{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500">
                  Generasi Unggul{" "}
                </span>{" "}
                di Bidang Teknologi
              </h2>
            </div>

            <div className="glass-card p-8 rounded-3xl border-white/5 relative group hover:border-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium relative z-10 text-lg">
                iTech Poliban merupakan salah satu komunitas IT yang ada di
                Politeknik Negeri Banjarmasin. Didirikan pada tanggal 8 Oktober
                2021 dan diresmikan pada tanggal 25 Februari 2022.
                <br />
                <br />
                Kami adalah wadah bagi mahasiswa yang memiliki passion di dunia
                IT untuk belajar dan berkembang bersama, baik hardskill maupun
                softskill. Kami terbuka untuk semua prodi tanpa latar belakang
                IT sebelumnya.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                {
                  label: "Hardskill",
                  icon: <FaCode className="text-xl" />,
                  color: "bg-primary/20 text-primary",
                  desc: "Skill Intensif",
                },
                {
                  label: "Softskill",
                  icon: <FaBrain className="text-xl" />,
                  color: "bg-purple-500/20 text-purple-500",
                  desc: "Kolaborasi",
                },
                {
                  label: "Passion",
                  icon: (
                    <FaReact className="text-xl animate-[spin_8s_linear_infinite]" />
                  ),
                  color: "bg-accent/20 text-accent",
                  desc: "Jaringan IT",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group/card p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-transparent hover:border-primary/30 transition-all flex flex-col items-center text-center space-y-3 cursor-default"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black dark:text-white uppercase tracking-tighter">
                      {item.label}
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold leading-tight mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
