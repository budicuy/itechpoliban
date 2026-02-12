import { MdCode, MdPalette, MdSmartphone, MdMemory } from "react-icons/md";

export default function Divisi() {
  const divisions = [
    {
      icon: MdCode,
      title: "Web Development",
      desc: "Fokus pada pembuatan aplikasi web modern menggunakan React, Vue, dan Backend Node.js.",
    },
    {
      icon: MdPalette,
      title: "UI/UX Design",
      desc: "Mempelajari desain antarmuka dan pengalaman pengguna yang estetis dan fungsional.",
    },
    {
      icon: MdSmartphone,
      title: "Mobile Apps",
      desc: "Pengembangan aplikasi mobile lintas platform dengan Flutter dan React Native.",
    },
    {
      icon: MdMemory,
      title: "IoT & Robotics",
      desc: "Eksplorasi integrasi perangkat keras dengan sistem cerdas dan otomatisasi.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-background-dark" id="divisi">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">
          Spesialisasi Kami
        </h2>
        <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">
          Divisi Keahlian
        </h3>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {divisions.map((div) => (
          <div
            key={div.title}
            className="division-card bg-slate-50 dark:bg-slate-900/40 p-8 rounded-2xl border border-transparent transition-all group cursor-pointer"
          >
            <div className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform block">
              <div.icon />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {div.title}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {div.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
