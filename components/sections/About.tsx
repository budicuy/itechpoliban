import Image from "next/image";

export default function About() {
  return (
    <section
      className="py-24 bg-white dark:bg-background-dark relative"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 mt-8">
                <Image
                  alt="About Team"
                  className="rounded-xl shadow-lg object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOPqZhEJ9fsAp1PGfo3f-i0J94Twvprz2WjWMU_om0YkM3Ap1eQhmAMKGIaJfF--OLE8XcuH78M4LVECzDEyzwfIuBX3hL2V56eKgFfTXdzO3bmguSMtzAb4zydxIS4gjnNJ3zA9ZDfhHaBxY_2hZkhzeSDi0wdLlZTYUNYeTxlv4XK1A6Dgk1r_jlf_zQex66Oizy7fs4hFcaYnsmclQ-42Bjnp1BTQVxZSQog6Vs5EL6mrv24Z1d2eKBRM83VeH70HLjYmRO1moq"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-64">
                <Image
                  alt="Coding"
                  className="rounded-xl shadow-lg object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAheWsQWbtsiaF-pDex1ekWh_mBcK34-UnGRVmI6jEXyp2ktK725twiADIwSF7HvVC-aJD0dOX4PqiUKlPQg4728xPA_hdCWQuBGFn3H6_SNQWAXBij4bHcRk4Z0pwkvTpHiUe4voI1W0A85APlVDgCAkt7xdTlUmpBxY-Y1FG58UP8DZRT6qi9EpO4kzIyvt0Kp-_AgN3H5cdO7hdhQLaoYOF299UgWiqgjVTJgmoXXEN2esmd9HXMzWaFAupcsfrH8Ah1_BCzph_C"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Tentang iTechPoliban
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Mencetak Generasi Unggul di Bidang Teknologi
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              iTechPoliban adalah organisasi kemahasiswaan di Politeknik Negeri
              Banjarmasin yang berfokus pada pengembangan skill IT. Kami menjadi
              jembatan antara kurikulum akademik dengan kebutuhan industri
              teknologi saat ini.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Pengembangan Skill Intensif",
                "Komunitas Kolaboratif & Inovatif",
                "Akses ke Jaringan Profesional IT",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full">
                    <span className="material-icons text-primary text-sm">
                      check
                    </span>
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
