import Image from "next/image";
import { HiCheck } from "react-icons/hi2";

export default function About() {
  return (
    <section
      className="py-16 lg:py-32 bg-background-light dark:bg-background-dark relative overflow-hidden"
      id="about"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full dotted-grid-bg opacity-30"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual Element with Logo */}
          <div className="relative group">
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

              {/* Decorative Floating Dots */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-accent rounded-full animate-ping opacity-20"></div>
              <div
                className="absolute bottom-20 left-0 w-3 h-3 bg-primary rounded-full animate-bounce opacity-40"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
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
                  Generasi Unggul
                </span>{" "}
                <br />
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

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Hardskill", color: "bg-primary" },
                { label: "Softskill", color: "bg-purple-500" },
                { label: "Passion", color: "bg-accent" },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className="px-6 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-transparent hover:border-primary/30 transition-all text-center"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${tag.color} mx-auto mb-2`}
                  ></div>
                  <span className="text-sm font-bold dark:text-slate-300">
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              {[
                "Pengembangan Skill Intensif",
                "Komunitas Kolaboratif & Inovatif",
                "Akses ke Jaringan Profesional IT",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300 cursor-default"
                >
                  <div className="bg-primary/20 p-2 rounded-xl group-hover/item:bg-primary/30 group-hover/item:scale-110 transition-all duration-300">
                    <HiCheck className="text-primary text-sm shadow-sm" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-bold tracking-tight group-hover/item:text-primary transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
