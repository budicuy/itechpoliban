import Image from "next/image";
import { HiCheck } from "react-icons/hi2";

export default function About() {
  return (
    <section
      className="py-20 lg:py-32 bg-white dark:bg-background-dark relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Side */}
          <div className="relative">
            <div className="relative z-10 bg-slate-50 dark:bg-white/5 rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="relative aspect-square w-full max-w-[320px] mx-auto">
                <Image
                  alt="iTech Poliban Logo"
                  className="object-contain"
                  src="/logo-itech.svg"
                  fill
                  priority
                />
              </div>

              {/* Stats/Badges inside the box */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-3xl shadow-xl hidden sm:block">
                <p className="text-3xl font-black">2021</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">
                  Founded Year
                </p>
              </div>
            </div>

            {/* Decortive background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                  About the Community
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
                Accelerating <span className="text-primary">Digital</span>{" "}
                Innovation.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                iTech Poliban merupakan salah satu komunitas yang ada di
                Politeknik Negeri Banjarmasin. Didirikan pada tanggal{" "}
                <span className="text-slate-900 dark:text-white font-bold">
                  8 Oktober 2021
                </span>{" "}
                dan diresmikan pada{" "}
                <span className="text-slate-900 dark:text-white font-bold">
                  25 Februari 2022
                </span>
                .
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Kami adalah wadah bagi mahasiswa yang memiliki passion dengan
                dunia IT untuk belajar dan berkembang bersama. iTech Poliban
                terbuka untuk semua prodi dan latar belakang, asalkan memiliki
                niat dan kemauan untuk belajar.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Skill Development",
                  desc: "Hardskill & Softskill focus",
                },
                { title: "Inclusive", desc: "Open for all students" },
                { title: "Professional", desc: "Industry-standard skills" },
                { title: "Community", desc: "Collaborative environment" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <HiCheck className="text-primary text-xs" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
