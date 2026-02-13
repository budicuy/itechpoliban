import type { Metadata } from 'next'
import Link from 'next/link'
import { MdArrowBack, MdMilitaryTech, MdOutlineLocationOn } from 'react-icons/md'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  description: 'Galeri prestasi iTech Poliban dari tahun ke tahun di berbagai kompetisi IT.',
  title: 'Galeri Prestasi - iTech Poliban'
}

const allAchievements = [
  {
    items: [
      {
        color: 'from-yellow-400 to-amber-600',
        competition: 'Lomba Kreativitas Pemuda Provinsi Kalimantan Selatan',
        description: 'Dalam rangka memeriahkan Hari Jadi Ke-75 Provinsi Kalimantan Selatan.',
        rank: 'Gold Medal',
        title: 'Juara I Kategori Software'
      },
      {
        color: 'from-slate-300 to-slate-500',
        competition: 'Lomba Kreativitas Pemuda Provinsi Kalimantan Selatan',
        description: 'Dalam rangka memeriahkan Hari Jadi Ke-75 Provinsi Kalimantan Selatan.',
        rank: 'Silver Medal',
        title: 'Juara II Kategori Hardware'
      },
      {
        color: 'from-orange-400 to-red-600',
        competition: 'Lomba Kreativitas Pemuda Provinsi Kalimantan Selatan',
        description: 'Dalam rangka memeriahkan Hari Jadi Ke-75 Provinsi Kalimantan Selatan.',
        rank: 'Bronze Medal',
        title: 'Juara III Kategori Desain Grafis'
      }
    ],
    year: '2025'
  },
  {
    items: [
      {
        color: 'from-blue-400 to-indigo-600',
        competition: 'Tingkat Provinsi Kalimantan Selatan',
        description: 'Penghargaan atas dedikasi dalam kepeloporan bidang teknologi.',
        rank: 'Gold Medal',
        title: 'Juara I Pemuda Pelopor'
      },
      {
        color: 'from-emerald-400 to-teal-600',
        competition: 'Bank Kalsel Tahun 2024',
        description: 'Kompetisi pengembangan solusi perbankan digital.',
        rank: 'Winner',
        title: 'Juara I Web Coding Competition'
      },
      {
        color: 'from-purple-400 to-fuchsia-600',
        competition: 'Competition 2024',
        description: 'Kemenangan di bidang administrasi bisnis internasional.',
        rank: 'International Winner',
        title: 'Juara I International Business Administration'
      },
      {
        color: 'from-red-400 to-rose-600',
        competition: 'Category Capture The Flag 2024',
        description: 'Kompetisi keamanan siber berskala nasional.',
        rank: 'Top Security Team',
        title: 'Juara I Healthkathon BPJS Kesehatan'
      },
      {
        color: 'from-yellow-400 to-orange-600',
        competition: 'Banjarmasin 2024',
        description: 'Inovasi untuk kemajuan tata kelola perkotaan.',
        rank: 'Innovation Award',
        title: 'Juara II KOMVAS (Kompetisi Inovasi Kota)'
      },
      {
        color: 'from-cyan-400 to-blue-600',
        competition: 'Politeknik Negeri Jakarta 2024',
        description: 'Ajang bergengsi mahasiswa informatika politeknik se-Indonesia.',
        rank: 'National Gold',
        title: 'Juara I Poster Animasi KMIPN VI'
      }
    ],
    year: '2024'
  },
  {
    items: [
      {
        color: 'from-teal-400 to-emerald-600',
        competition: 'KMIPN IV Politeknik Negeri Batam 2022',
        description: 'Pengembangan solusi aplikatif dalam waktu terbatas.',
        rank: 'National Bronze',
        title: 'Juara III Bidang Hackathon'
      },
      {
        color: 'from-indigo-400 to-violet-600',
        competition: 'KMIPN IV Politeknik Negeri Batam 2022',
        description: 'Kompetisi teknis keamanan siber tingkat nasional.',
        rank: 'National Bronze',
        title: 'Juara III Bidang Keamanan Cyber'
      }
    ],
    year: '2022'
  }
]

export default function PrestasiPage() {
  return (
    <main className='min-h-screen bg-background-dark'>
      <Navbar />

      {/* Header Section */}
      <section className='pt-32 pb-20 relative overflow-hidden'>
        <div className='absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent' />
        <div className='absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]' />

        <div className='max-w-7xl mx-auto px-6 relative z-10 text-center'>
          <Link
            href='/#prestasi'
            className='inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 group'>
            <MdArrowBack className='group-hover:-translate-x-1 transition-transform' />
            <span className='text-xs font-bold uppercase tracking-widest'>Kembali ke Beranda</span>
          </Link>
          <h1 className='text-5xl md:text-7xl font-black text-white tracking-tighter mb-6'>
            Galeri{' '}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-accent'>
              Prestasi
            </span>
          </h1>
          <p className='text-slate-400 max-w-2xl mx-auto text-lg font-medium italic'>
            "Satu visi, sejuta aksi, mengukir prestasi."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className='pb-32 relative'>
        <div className='max-w-7xl mx-auto px-6 space-y-32'>
          {allAchievements.map(group => (
            <div key={group.year} className='relative'>
              {/* Year Label */}
              <div className='sticky top-24 z-30 mb-12'>
                <div className='inline-block px-8 py-3 bg-primary rounded-2xl shadow-xl shadow-primary/20'>
                  <span className='text-2xl font-black text-white italic tracking-widest'>
                    {group.year}
                  </span>
                </div>
                <div className='absolute top-1/2 left-0 right-0 h-px bg-white/5 -z-10' />
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {group.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className='group relative glass-card p-1 rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 h-full'>
                    <div className='relative h-full bg-slate-900/40 backdrop-blur-xl rounded-[2.4rem] p-8 overflow-hidden flex flex-col'>
                      <div
                        className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-25 transition-opacity`}
                      />

                      <div className='relative z-10 space-y-6 flex-1'>
                        <div className='flex items-center justify-between'>
                          <div
                            className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center text-slate-900 shadow-lg`}>
                            <MdMilitaryTech className='text-2xl' />
                          </div>
                          <div className='px-3 py-1 rounded-full bg-white/5 border border-white/10'>
                            <span className='text-[10px] font-black text-white/60 uppercase tracking-widest'>
                              {item.rank}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h3 className='text-xl font-black text-white leading-tight mb-2 group-hover:text-accent transition-colors'>
                            {item.title}
                          </h3>
                          <div className='flex items-start gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider leading-relaxed'>
                            <MdOutlineLocationOn className='mt-0.5 shrink-0' />
                            <span>{item.competition}</span>
                          </div>
                        </div>

                        <p className='text-slate-400 text-sm leading-relaxed font-medium'>
                          {item.description}
                        </p>
                      </div>

                      <div className='mt-8 pt-6 border-t border-white/5 relative z-10'>
                        <div className='flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em]'>
                          <span className='text-primary'>Achievement Verified</span>
                          <span className='text-white/20'>
                            #{group.year}
                            {idx + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
