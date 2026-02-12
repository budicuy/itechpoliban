import { FaFigma } from "react-icons/fa";
import {
  MdArrowForward,
  MdMemory,
  MdSettingsInputComponent,
  MdSync,
} from "react-icons/md";
import { SiAdobe, SiCanva, SiGoogle, SiGooglegemini } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative lg:min-h-screen flex items-center pt-24 pb-20 lg:pt-20 lg:pb-0 hero-gradient overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dotted-grid-bg"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              The Digital Frontier
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] lg:leading-[0.95] tracking-tighter">
            Empowering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-accent">
              Future Tech
            </span>
            <br className="hidden sm:block" /> Leaders
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Wadah pengembangan kreativitas dan inovasi mahasiswa Politeknik
            Negeri Banjarmasin dalam bidang teknologi informasi untuk masa depan
            digital yang gemilang.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-4">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl flex items-center justify-center group transition-all shadow-xl shadow-primary/20"
            >
              Jelajahi Sekarang
              <MdArrowForward className="ml-3 text-xl group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-slate-300 dark:border-primary/30 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-primary/5 transition-all"
            >
              Visi & Misi
            </button>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3.5] lg:aspect-square max-w-[500px] lg:max-w-[600px] mx-auto lg:mx-0 flex items-center justify-center mt-2 lg:mt-0">
          <div className="orbital-path rotating-orbit w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]"></div>
          <div
            className="orbital-path rotating-orbit w-[380px] h-[380px] sm:w-[480px] sm:h-[480px]"
            style={{ animationDirection: "reverse", animationDuration: "30s" }}
          ></div>

          {/* Floating Icons */}
          <div
            className="absolute floating-icon top-[15%] left-[5%] sm:left-[10%] z-20 scale-75 sm:scale-100"
            style={{ animationDelay: "0s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <SiGooglegemini className="text-3xl text-[#8E75FF]" />
            </div>
          </div>
          <div
            className="absolute floating-icon bottom-[20%] left-[0%] sm:left-[5%] z-20 scale-75 sm:scale-100"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <FaFigma className="text-3xl text-[#F24E1E]" />
            </div>
          </div>
          <div
            className="absolute floating-icon top-[5%] right-[10%] sm:right-[15%] z-20 scale-75 sm:scale-100"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <SiAdobe className="text-3xl text-[#FF0000]" />
            </div>
          </div>
          <div
            className="absolute floating-icon bottom-[10%] right-[5%] sm:right-[10%] z-20 scale-75 sm:scale-100"
            style={{ animationDelay: "2.2s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <SiGoogle className="text-3xl text-[#4285F4]" />
            </div>
          </div>
          <div
            className="absolute floating-icon top-[45%] -right-[5%] sm:right-[0%] z-20 scale-75 sm:scale-100"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="p-3 bg-background-dark/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex items-center justify-center">
              <SiCanva className="text-3xl text-[#00C4CC]" />
            </div>
          </div>

          <div className="cube-wrapper scale-50 sm:scale-75 md:scale-90 lg:scale-100">
            <div className="animated-cube">
              <div className="cube-face face-front">
                <SiGoogle className="text-[#4285F4]/50 text-6xl" />
                <div className="neon-corner top-0 left-0 border-t-2 border-l-2 border-primary text-primary dynamic-glow"></div>
                <div
                  className="neon-corner bottom-0 right-0 border-b-2 border-r-2 border-accent text-accent dynamic-glow"
                  style={{ animationDelay: "-2s" }}
                ></div>
              </div>
              <div className="cube-face face-back">
                <SiGooglegemini className="text-[#8E75FF]/50 text-6xl" />
              </div>
              <div className="cube-face face-right">
                <SiAdobe className="text-[#FF0000]/50 text-6xl" />
                <div
                  className="neon-corner top-0 right-0 border-t-2 border-r-2 border-primary text-primary dynamic-glow"
                  style={{ animationDelay: "-1s" }}
                ></div>
              </div>
              <div className="cube-face face-left">
                <FaFigma className="text-[#F24E1E]/50 text-6xl" />
                <div
                  className="neon-corner bottom-0 left-0 border-b-2 border-l-2 border-accent text-accent dynamic-glow"
                  style={{ animationDelay: "-3s" }}
                ></div>
              </div>
              <div className="cube-face face-top">
                <div className="w-full h-full bg-linear-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <SiCanva className="text-[#00C4CC]/30 text-5xl" />
                </div>
              </div>
              <div className="cube-face face-bottom">
                <div className="w-full h-full bg-linear-to-tr from-accent/20 to-primary/10"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Status Cards - Hidden on very small screens or scaled down */}
          <div className="status-card-sequential card-1 absolute -top-10 sm:-top-5 left-0 glass-card p-3 sm:p-4 rounded-2xl w-[160px] sm:w-[200px] z-30 border border-white/10 shadow-2xl scale-90 sm:scale-100">
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

          <div className="status-card-sequential card-2 absolute top-10 sm:top-20 -right-4 glass-card p-4 sm:p-5 rounded-3xl w-[180px] sm:w-[240px] z-30 border border-white/10 shadow-2xl scale-90 sm:scale-100">
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

          <div className="status-card-sequential card-3 absolute -bottom-12 sm:-bottom-10 right-4 glass-card p-3 sm:p-4 rounded-2xl w-[180px] sm:w-[220px] z-30 border border-white/10 shadow-2xl scale-90 sm:scale-100">
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
