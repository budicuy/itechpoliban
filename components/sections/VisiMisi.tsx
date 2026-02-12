import { MdRocketLaunch, MdVisibility } from "react-icons/md";

export default function VisiMisi() {
  return (
    <section
      className="py-16 lg:py-24 bg-background-light dark:bg-slate-900/50"
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
            “Meningkatkan Insan kreatif, Komunikatif, dan Religius sehingga dapat berkompetensi dan berkompetisi nasional dan internasional dibidang IT"
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
                text: "Mewadahi kreatifitas mahasiswa di bidang IT.",
              },
              {
                num: "02.",
                text: "Mengkoordinir kegiatan kemahasiswaan yang bergerak di bidang IT.",
              },
              {
                num: "03.",
                text: "Mendorong mahasiswa untuk ikut berpartisipasi dalam kompetisi di bidang IT.",
              },
              {
                num: "04.",
                text: "Mendorong mahasiswa untuk mengembangkan teknologi dilingkungan kampus maupun masyarakat.",
              },
            ].map((misi) => (
              <li key={misi.num} className="flex gap-3 items-center">
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
