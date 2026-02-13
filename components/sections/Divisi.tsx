'use client'

import { motion, type Variants } from 'motion/react'
import {
  MdAnimation,
  MdBrush,
  MdBusinessCenter,
  MdChevronRight,
  MdCode,
  MdGamepad,
  MdMemory,
  MdRocketLaunch,
  MdSecurity
} from 'react-icons/md'

const divisions = [
  {
    bg: 'bg-red-500/10',
    border: 'hover:border-red-500/50',
    color: 'from-red-500 to-orange-500',
    description:
      'Wadah bagi mahasiswa Poliban untuk mempelajari kerentanan di dunia maya dan mengembangkan kemampuan menjadi ahli keamanan. Fokus pada kompetensi Capture The Flag (CTF) — kompetensi hacking profesional.',
    icon: MdSecurity,
    iconColor: 'text-red-500',
    id: 1,
    name: 'Cyber Security',
    tag: 'Security'
  },
  {
    bg: 'bg-blue-500/10',
    border: 'hover:border-blue-500/50',
    color: 'from-blue-500 to-cyan-500',
    description:
      'Tempat bagi seniman visual untuk menciptakan dunia yang hidup. Fokus pada desain karakter, teknik animasi, dan visualisasi cerita yang menggabungkan imajinasi artistik dengan keahlian teknis tingkat tinggi.',
    icon: MdAnimation,
    iconColor: 'text-blue-500',
    id: 2,
    name: 'Animasi',
    tag: 'Creative'
  },
  {
    bg: 'bg-primary/10',
    border: 'hover:border-primary/50',
    color: 'from-primary to-purple-500',
    description:
      'Pengembangan perangkat lunak dari konsep hingga kode. Menguasai bahasa pemrograman dan teknologi terkini untuk membangun solusi perangkat lunak yang efisien, inovatif, dan berdampak nyata bagi industri.',
    icon: MdCode,
    iconColor: 'text-primary',
    id: 3,
    name: 'Programming',
    tag: 'Software'
  },
  {
    bg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/50',
    color: 'from-emerald-500 to-teal-500',
    description:
      'Eksplorasi kreativitas dalam pembuatan permainan digital. Merancang, mengembangkan, dan menguji game dengan fokus pada grafis, dan animasi untuk menciptakan pengalaman bermain yang luar biasa.',
    icon: MdGamepad,
    iconColor: 'text-emerald-500',
    id: 5,
    name: 'Game Development',
    tag: 'Gaming'
  },
  {
    bg: 'bg-purple-500/10',
    border: 'hover:border-purple-500/50',
    color: 'from-purple-500 to-indigo-500',
    description:
      'Menggali konektivitas objek fisik melalui jaringan digital. Solusi teknologi dari sensor cerdas hingga pemantauan jarak jauh untuk menciptakan lingkungan pintar guna mewujudkan Revolusi Industri 4.0.',
    icon: MdMemory,
    iconColor: 'text-purple-500',
    id: 6,
    name: 'Internet Of Things',
    tag: 'Hardware'
  },
  {
    bg: 'bg-orange-500/10',
    border: 'hover:border-orange-500/50',
    color: 'from-orange-500 to-yellow-500',
    description:
      'Fokus pada desain antarmuka dan pengalaman pengguna yang intuitif. Melalui riset, prototipe, dan usability testing untuk menciptakan pengalaman digital optimal yang meningkatkan kepuasan pengguna.',
    icon: MdBrush,
    iconColor: 'text-orange-500',
    id: 7,
    name: 'UI/UX',
    tag: 'Design'
  },
  {
    bg: 'bg-slate-400/10',
    border: 'hover:border-slate-400/50',
    color: 'from-slate-400 to-slate-600',
    description:
      'Wadah pengembangan bisnis berbasis teknologi. Identifikasi peluang pasar, model bisnis inovatif, dan strategi pemasaran digital untuk mendorong kewirausahaan mahasiswa melalui sinergi bisnis dan teknis.',
    icon: MdBusinessCenter,
    iconColor: 'text-slate-400',
    id: 8,
    name: 'Bisnis TIK',
    tag: 'Business'
  }
]

export default function Divisi() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      y: 0
    }
  }

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
      y: 0
    }
  }

  const headingLines = ['Kuasai Ilmu,', 'Wujudkan Masa Depan']

  return (
    <section className='py-20 lg:py-32 bg-background-dark relative overflow-hidden' id='divisi'>
      {/* Dynamic Background */}
      <div className='absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent' />
      <motion.div
        animate={{ opacity: [0.03, 0.07, 0.03], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        className='absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -ml-[300px]'
      />
      <motion.div
        animate={{ opacity: [0.03, 0.05, 0.03], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        className='absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -mr-[300px]'
      />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8'>
          <div className='space-y-4 max-w-2xl text-reveal-container'>
            <motion.div
              variants={wordVariants}
              className='inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary'>
              <span className='w-1.5 h-1.5 rounded-full bg-accent mr-2' />
              <span className='text-[10px] font-black uppercase tracking-[0.2em]'>
                Our Specializations
              </span>
            </motion.div>
            <div className='relative'>
              <motion.div
                aria-hidden='true'
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className='absolute inset-0 text-4xl md:text-6xl font-black leading-tight tracking-tight blur-2xl opacity-70 pointer-events-none select-none'>
                {headingLines.map((line, i) => (
                  <div key={`glow-${line}-${i}`}>{line}</div>
                ))}
              </motion.div>
              <h2 className='relative text-4xl md:text-6xl font-black text-white leading-tight tracking-tight'>
                {headingLines.map((line, i) => (
                  <div key={`line-${line}-${i}`} className='overflow-hidden'>
                    <motion.span
                      variants={wordVariants}
                      className={
                        i === 1
                          ? 'text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-accent block'
                          : 'block'
                      }>
                      {line}
                    </motion.span>
                  </div>
                ))}
              </h2>
            </div>
          </div>
          <motion.p
            variants={wordVariants}
            className='text-slate-400 max-w-sm font-medium text-lg leading-relaxed border-l-2 border-primary/30 pl-6 hidden md:block'>
            Pilih jalur spesialisasimu dan kembangkan talenta di lingkungan yang tepat.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ margin: '-50px', once: true }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {divisions.map(div => (
            <motion.div
              key={div.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`group relative glass-card p-10 rounded-[3rem] border-white/10 md:border-white/5 ${div.border} transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default overflow-hidden`}>
              {/* Animated Corner Highlight */}
              <div
                className={`absolute top-0 right-0 w-[3px] h-20 md:h-0 bg-linear-to-b ${div.color} group-hover:md:h-32 transition-all duration-700 z-30 rounded-full`}
              />
              <div
                className={`absolute top-0 right-0 w-20 md:w-0 h-[3px] bg-linear-to-l ${div.color} group-hover:md:w-32 transition-all duration-700 z-30 rounded-full`}
              />

              {/* Background Number */}
              <span className='absolute -bottom-4 -right-2 text-9xl font-black text-white/5 md:text-white/3 select-none group-hover:md:text-white/5 transition-colors duration-700'>
                0{div.id}
              </span>

              <div className='relative z-10'>
                <div className='flex items-center justify-between mb-8'>
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.1 }}
                    className={`w-16 h-16 rounded-3xl ${div.bg} flex items-center justify-center border border-white/20 md:border-white/5 group-hover:md:border-white/10 scale-110 md:scale-100 transition-all duration-500 shadow-inner`}>
                    <div.icon
                      className={`text-3xl ${div.iconColor} drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                    />
                  </motion.div>
                  <span className='px-3 py-1 rounded-full bg-white/10 md:bg-white/5 border border-white/20 md:border-white/10 text-[8px] font-black uppercase tracking-widest text-white md:text-slate-400 group-hover:md:text-white transition-colors'>
                    {div.tag}
                  </span>
                </div>

                <h3 className='text-2xl font-black text-accent md:text-white mb-4 tracking-tight group-hover:md:text-accent transition-colors duration-500'>
                  {div.name}
                </h3>

                <p className='text-slate-300 md:text-slate-400 text-sm leading-relaxed font-medium group-hover:md:text-slate-200 transition-colors duration-500 pr-4'>
                  {div.description}
                </p>

                <div className='mt-10 flex items-center gap-3 overflow-hidden'>
                  <div
                    className={`h-px w-16 md:w-8 bg-linear-to-r ${div.color} group-hover:md:w-16 transition-all duration-500`}
                  />
                  <span className='text-[10px] font-black uppercase tracking-widest text-white md:text-primary md:opacity-0 md:translate-x-[-10px] group-hover:md:opacity-100 group-hover:md:translate-x-0 transition-all duration-500'>
                    Learn More
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={cardVariants}
            className='md:col-span-2 lg:col-span-1 group perspective-1000'>
            <div className='relative h-full overflow-hidden rounded-[3rem] p-1 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]'>
              {/* Moving Gradient Background */}
              <div className='absolute inset-0 bg-linear-to-br from-primary via-purple-600 to-accent animate-[gradient_8s_ease_infinite] bg-size-[400%_400%]' />

              <div className='relative h-full bg-slate-950/90 backdrop-blur-xl rounded-[2.9rem] p-10 flex flex-col items-center justify-center text-center space-y-6 overflow-hidden'>
                <div className='absolute inset-0 bg-dotted-grid-bg opacity-20 group-hover:opacity-40 transition-opacity' />

                <div className='relative z-10 space-y-6'>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    className='w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/20'>
                    <MdRocketLaunch className='text-4xl text-white' />
                  </motion.div>
                  <div>
                    <h3 className='text-3xl font-black text-white leading-tight'>
                      Siap Untuk <br />
                      Bergabung?
                    </h3>
                    <p className='text-white/60 text-sm font-medium mt-3 px-4'>
                      Jadilah bagian dari generasi teknologi berikutnya bersama Poliban.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type='button'
                    className='group/btn relative px-8 py-4 bg-white text-slate-900 rounded-full font-black text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.2)] flex items-center gap-2 mx-auto'>
                    Daftar Sekarang
                    <MdChevronRight className='text-xl group-hover/btn:translate-x-1 transition-transform' />
                  </motion.button>
                </div>

                {/* Decorative floating dots */}
                <div className='absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-pulse' />
                <div className='absolute bottom-10 right-10 w-3 h-3 bg-primary rounded-full animate-ping shadow-[0_0_15px_rgba(102,15,189,0.5)]' />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
