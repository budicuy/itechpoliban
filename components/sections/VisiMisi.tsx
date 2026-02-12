import { MdRocketLaunch, MdVisibility } from "react-icons/md";

export default function VisiMisi() {
  return (
    <section
      className="py-24 bg-background-light dark:bg-slate-900/50"
      id="visi-misi"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Visi & Misi
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-background-dark p-10 rounded-2xl border border-primary/10 shadow-xl">
          <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
            <MdVisibility className="text-3xl" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Visi Kami
          </h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
            "Menjadi pusat unggulan inovasi teknologi informasi bagi mahasiswa
            Poliban yang kompetitif secara global dan berintegritas tinggi."
          </p>
        </div>
        <div className="bg-white dark:bg-background-dark p-10 rounded-2xl border border-primary/10 shadow-xl">
          <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center text-slate-900 mb-6 shadow-lg shadow-accent/20">
            <MdRocketLaunch className="text-3xl" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Misi Kami
          </h4>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400">
            {[
              {
                num: "01.",
                text: "Menyelenggarakan pelatihan IT yang relevan dengan tren industri.",
              },
              {
                num: "02.",
                text: "Mendorong partisipasi aktif dalam kompetisi teknologi nasional.",
              },
              {
                num: "03.",
                text: "Menciptakan ekosistem riset dan pengembangan software yang solutif.",
              },
            ].map((misi) => (
              <li key={misi.num} className="flex items-start gap-3">
                <span className="text-accent font-bold">{misi.num}</span>{" "}
                {misi.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
