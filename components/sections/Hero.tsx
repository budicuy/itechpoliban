import Image from "next/image";
import {
  MdArrowForward,
  MdCode,
  MdDeveloperMode,
  MdOutlineSettingsEthernet,
  MdShield,
  MdMemory,
  MdTerminal,
  MdStorage,
  MdSettingsInputComponent,
  MdSync,
} from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dotted-grid-bg"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              The Digital Frontier
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter">
            Empowering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
              Future Tech
            </span>
            <br /> Leaders
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
            Wadah pengembangan kreativitas dan inovasi mahasiswa Politeknik
            Negeri Banjarmasin dalam bidang teknologi informasi untuk masa depan
            digital yang gemilang.
          </p>
          <div className="flex flex-wrap gap-5 pt-4">
            <button
              type="button"
              className="px-10 py-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl flex items-center group transition-all shadow-xl shadow-primary/20"
            >
              Jelajahi Sekarang
              <MdArrowForward className="ml-3 text-xl group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              type="button"
              className="px-10 py-5 border-2 border-slate-300 dark:border-primary/30 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-primary/5 transition-all"
            >
              Visi & Misi
            </button>
          </div>
          <div className="flex items-center gap-6 pt-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Core Expertise:
            </span>
            <div className="flex gap-4">
              <MdCode className="text-2xl" />
              <MdDeveloperMode className="text-2xl" />
              <MdOutlineSettingsEthernet className="text-2xl" />
              <MdShield className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="relative w-full aspect-square max-w-[600px] mx-auto lg:mx-0 flex items-center justify-center">
          <div className="orbital-path rotating-orbit w-[350px] h-[350px]"></div>
          <div
            className="orbital-path rotating-orbit w-[480px] h-[480px]"
            style={{ animationDirection: "reverse", animationDuration: "30s" }}
          ></div>

          {/* Floating Icons */}
          <div
            className="absolute floating-icon top-[15%] left-[10%] z-20"
            style={{ animationDelay: "0s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <Image
                alt="HTML"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlq2SR_Zy016Dk-Z9p7O6Vft5tX1A-mte41spSRBiP1jtnUAZg_pr5r1-_BUzcpsIJu0KFuo6qPgx6KbBAI0vsTZTHox4036Pbob78fkbkNh74vQ01n8vCHi5N448vVqs8XFi09WN6qnRa2Z4P2QWq5wTpcDX7o4zI5tiLZ_x4hpPE1sr0ZGqmsfECHD3eLGWw5ThJL_oMeLobnKAArlsrSy56QP0iRstCO9_9GhQk43GzNEkX6d0s7iB5oruOjWnuITC1eJDBy5RL"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div
            className="absolute floating-icon bottom-[20%] left-[5%] z-20"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <Image
                alt="CSS"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0cDfhks1cheV3zaJFTW-KW538s2RrVj5sDl5rRwsYjiHhFVhzF1n76MZRWoMB4DGtj97DuWjJrhj3lJY41J1d54OKS-aHMjPJ60UWZz6QtXH2ACaw6XuRzqaXYSeeLfGIn0aORi0nEGNLa_Dw1Dd_jVf7QOBEqD-E1CA130O2dkRBwwcuNbbbmjyElscMYY-sI8-GqoFMnG10Z9w6Xd9JtUS-AwlOGYj9XyXY3k-pW6QRx18Kd53WrNFZ5Iubcm9KCu2_zO9JaGQV"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div
            className="absolute floating-icon top-[5%] right-[15%] z-20"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <Image
                alt="JS"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfhkIfUagZQjmjmgaNVfs-a8hNYT7RAsdk80LuezDQ2OhZhFUE0y4g6-iTi640SWezPcqntidqQzmYmn5ID7CqujIr6Dou4SXSpBiShYneQ752cxp8xJILeu1VOfTSGN4MRXBJEJJ6TNbLyWuGQHGCw2HDl_-2b085y6XeFQCf7vU8cTsGnw1Yevs8FFtdYbK3lWCnCXnRDefp8zRJj5vh-zEnAMz_IA9d6gEWRuIjpZTwH17C7bpVugVRvoglbdxUU1qYzBmct4Ix"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div
            className="absolute floating-icon bottom-[10%] right-[10%] z-20"
            style={{ animationDelay: "2.2s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <Image
                alt="React"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBruADSrh2fRczdHsSQkcnhmB9XhWh_gEqtmtmZD-cODrXXTWXeyXK6tXxLmeNeWUTb5wc6KtEjPARjZvvOXt3sGFMAFB4sKLkOdmJDNNXxDKCqQ-ElsnQ9foENujoN0zq9aZR01gz_leS4Y8nX_Ix9MmBQbpc3FsK6J4aqB4TGrJqUuG7ZtBO0IwZPv2eTiiVnuJuiX76DyjyMj0zpPUZoGbGVIwJvrqvYfxehz_KG0Frj6NbnpSYa6fv0Pe4S1Ihch3pC9J9QGqqN"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div
            className="absolute floating-icon top-[45%] right-[0%] z-20"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <Image
                alt="Python"
                className="w-8 h-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWtdmqvZfa1oWZMc7xzkYBmIv0EO03kM-W1QLO6LJaR4eeEKAy29lwx-rDmmn8V9i7PTgFdLAYU14-m__WE243uzai8mcxmLw_5236cprnVXg-tsECZXXQQBUS1NKYtW0YpPkoD385htCz5bJuRm6dmYiJ6vCl0VU_GcMgvx2fT98vGs3PsUXdAH5DGaFDonrIkjNNsNXmqbeE5krWtFaGc7IYF3hSbW8bt4qvkdQBlORVCtXTwhSZYt6Juqy4H_0CVFjJWFPagYlX"
                width={32}
                height={32}
              />
            </div>
          </div>

          <div className="cube-wrapper scale-75 md:scale-90 lg:scale-100">
            <div className="animated-cube">
              <div className="cube-face face-front">
                <MdCode className="text-accent/50 text-6xl" />
                <div className="neon-corner top-0 left-0 border-t-2 border-l-2 border-primary text-primary dynamic-glow"></div>
                <div
                  className="neon-corner bottom-0 right-0 border-b-2 border-r-2 border-accent text-accent dynamic-glow"
                  style={{ animationDelay: "-2s" }}
                ></div>
              </div>
              <div className="cube-face face-back">
                <MdMemory className="text-primary/50 text-6xl" />
              </div>
              <div className="cube-face face-right">
                <MdTerminal className="text-accent/50 text-6xl" />
                <div
                  className="neon-corner top-0 right-0 border-t-2 border-r-2 border-primary text-primary dynamic-glow"
                  style={{ animationDelay: "-1s" }}
                ></div>
              </div>
              <div className="cube-face face-left">
                <MdStorage className="text-primary/50 text-6xl" />
                <div
                  className="neon-corner bottom-0 left-0 border-b-2 border-l-2 border-accent text-accent dynamic-glow"
                  style={{ animationDelay: "-3s" }}
                ></div>
              </div>
              <div className="cube-face face-top">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10"></div>
              </div>
              <div className="cube-face face-bottom">
                <div className="w-full h-full bg-gradient-to-tr from-accent/20 to-primary/10"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Status Cards */}
          <div className="status-card-sequential card-1 absolute -top-5 left-0 glass-card p-4 rounded-2xl w-[200px] z-30 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <MdSettingsInputComponent className="text-xl" />
              </div>
              <div>
                <p className="text-[8px] text-accent font-black uppercase tracking-widest">
                  System Monitor
                </p>
                <p className="text-[10px] font-bold text-white">
                  System Active
                </p>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent/60 progress-bar-sequential"></div>
              </div>
              <p className="text-[8px] text-slate-400 font-medium">
                Uptime: 99.9%
              </p>
            </div>
          </div>

          <div className="status-card-sequential card-2 absolute top-20 -right-4 glass-card p-5 rounded-3xl w-[240px] z-30 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(250,204,21,0.5)]">
                <MdMemory className="text-xl" />
              </div>
              <div>
                <p className="text-[9px] text-accent font-black uppercase tracking-widest">
                  Neural Core
                </p>
                <p className="text-xs font-bold text-white">
                  Status: <span className="text-accent">Optimized</span>
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent progress-bar-sequential"></div>
              </div>
              <p className="text-[9px] text-slate-400 font-medium italic">
                Processing Data Stream...
              </p>
            </div>
          </div>

          <div className="status-card-sequential card-3 absolute -bottom-10 right-4 glass-card p-4 rounded-2xl w-[220px] z-30 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/40 flex items-center justify-center text-accent">
                <MdSync className="text-xl" />
              </div>
              <div>
                <p className="text-[8px] text-accent font-black uppercase tracking-widest">
                  Network
                </p>
                <p className="text-[10px] font-bold text-white">
                  Data Synchronized
                </p>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent/80 progress-bar-sequential"></div>
              </div>
              <div className="flex justify-between">
                <p className="text-[8px] text-slate-400 font-medium">
                  Latency: 2ms
                </p>
                <p className="text-[8px] text-accent font-bold">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
