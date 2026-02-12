import Image from "next/image";
import { HiCheck } from "react-icons/hi2";

export default function About() {
  return (
    <section
      className="py-16 lg:py-24 bg-white dark:bg-background-dark relative"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square max-w-[400px] mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <Image
              alt="iTech Poliban Logo"
              className="relative z-10 drop-shadow-2xl drop-shadow-accent/20"
              src="/logo-itech.svg"
              fill
              priority
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-xs">
                Tentang iTechPoliban
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Mencetak Generasi Unggul di Bidang Teknologi
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              iTechPoliban adalah organisasi kemahasiswaan di Politeknik Negeri
              Banjarmasin yang berfokus pada pengembangan skill IT. Kami menjadi
              jembatan antara kurikulum akademik dengan kebutuhan industri
              teknologi saat ini.
            </p>
            <div className="space-y-4">
              {[
                "Pengembangan Skill Intensif",
                "Komunitas Kolaboratif & Inovatif",
                "Akses ke Jaringan Profesional IT",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full shrink-0">
                    <HiCheck className="text-primary text-sm" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
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
