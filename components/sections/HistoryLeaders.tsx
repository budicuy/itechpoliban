'use client'

import { motion, type Variants } from 'motion/react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import SectionDecoration from '@/components/ui/SectionDecoration'

interface Social {
  github?: string
  instagram?: string
  linkedin?: string
}

interface Leader {
  color: string
  id: number
  name: string
  period: string
  role: string
  socials: Social
}

const leaders: Leader[] = [
  {
    color: 'from-primary to-purple-600',
    id: 1,
    name: 'BUDIANNOR',
    period: '2024 - sekarang',
    role: 'Ketua Umum',
    socials: {
      github: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    color: 'from-accent to-yellow-500',
    id: 2,
    name: 'M. Azhar Sadhikin',
    period: '2023 - 2024',
    role: 'Ketua Umum',
    socials: {
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    color: 'from-emerald-500 to-teal-500',
    id: 3,
    name: 'Muhammad Iqbal',
    period: '2022 - 2023',
    role: 'Ketua Umum',
    socials: {
      github: '#',
      instagram: '#'
    }
  },
  {
    color: 'from-emerald-500 to-teal-500',
    id: 4,
    name: 'Harry H.',
    period: '2021 - 2022',
    role: 'Ketua Umum',
    socials: {
      github: '#',
      instagram: '#'
    }
  }
]

export default function HistoryLeaders() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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

  const headingLines = ['Jejak', 'Kepemimpinan']

  return (
    <section
      className='py-24 lg:py-40 bg-background-dark relative overflow-hidden'
      id='history-leaders'>
      <SectionDecoration />
      {/* Background Ornaments */}
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
        className='absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64'
      />
      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
        className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-64 -mb-64'
      />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-reveal-container'>
          <div className='space-y-4'>
            <motion.div
              variants={wordVariants}
              className='inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary'>
              <span className='w-1.5 h-1.5 rounded-full bg-accent mr-2' />
              <span className='text-[10px] font-black uppercase tracking-[0.2em]'>
                Hall of Leaders
              </span>
            </motion.div>
            <div className='relative'>
              <motion.div
                aria-hidden='true'
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className='absolute inset-0 text-4xl md:text-6xl font-black leading-tight blur-2xl opacity-70 pointer-events-none select-none'>
                {headingLines.map(line => (
                  <div key={`glow-${line}`}>{line}</div>
                ))}
              </motion.div>
              <h2 className='relative text-4xl md:text-6xl font-black text-white leading-tight'>
                {headingLines.map((line, i) => (
                  <div key={`line-${line}`} className='overflow-hidden'>
                    <motion.span
                      variants={wordVariants}
                      className={
                        i === 1
                          ? 'text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-accent block'
                          : 'text-white block'
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
            className='text-slate-400 max-w-sm font-medium text-lg border-l-2 border-primary/30 pl-6'>
            Para pemimpin yang telah membimbing iTech Poliban bertumbuh dan berinovasi dari masa ke
            masa.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ margin: '-50px', once: true }}
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {leaders.map(leader => (
            <motion.div
              key={leader.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className='group relative'>
              {/* Decorative Glow */}
              <div
                className={`absolute -inset-2 bg-linear-to-br ${leader.color} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-700`}
              />

              <div className='relative h-full glass-card rounded-[2.5rem] border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden bg-slate-900/20'>
                {/* Elite Badge */}
                <div className='absolute top-4 right-4 z-20'>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: 'backOut' }}
                    className={`w-8 h-8 rounded-full bg-linear-to-br ${leader.color} flex items-center justify-center p-0.5 shadow-lg shadow-black/50`}>
                    <div className='w-full h-full rounded-full bg-slate-900 flex items-center justify-center'>
                      <span className='text-[8px] font-black text-white italic'>iT</span>
                    </div>
                  </motion.div>
                </div>

                {/* Photo Perspective Frame */}
                <div className='relative p-4 pb-0'>
                  <div className='relative aspect-4/5 rounded-[1.8rem] overflow-hidden group-hover:scale-[1.02] transition-transform duration-700'>
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${leader.color} opacity-20`}
                    />
                    <div className='absolute inset-0 bg-slate-950/60 flex flex-col items-center justify-center'>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className='w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-2'>
                        <span className='text-[10px] text-white/20 font-black'>LEGACY</span>
                      </motion.div>
                    </div>
                    {/* Shadow Overlay */}
                    <div className='absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent' />

                    {/* Period Floating Plate */}
                    <div className='absolute bottom-4 left-4 right-4 z-10'>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className='px-3 py-1.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center'>
                        <p className='text-[8px] font-black text-primary uppercase tracking-[0.2em]'>
                          Periode
                        </p>
                        <p className='text-[10px] font-bold text-white tracking-widest leading-none mt-1'>
                          {leader.period}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className='p-6 pt-4 space-y-4'>
                  <div className='text-center'>
                    <h3 className='text-lg font-black text-white group-hover:text-accent transition-colors tracking-tight leading-tight'>
                      {leader.name}
                    </h3>
                    <div className='inline-flex items-center gap-2 mt-2'>
                      <motion.div
                        initial={{ width: 12 }}
                        whileHover={{ width: 20 }}
                        className={`h-px bg-linear-to-r ${leader.color}`}
                      />
                      <p className='text-[10px] text-slate-500 font-bold uppercase tracking-widest'>
                        {leader.role}
                      </p>
                      <motion.div
                        initial={{ width: 12 }}
                        whileHover={{ width: 20 }}
                        className={`h-px bg-linear-to-l ${leader.color}`}
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-center gap-4 pt-2'>
                    {leader.socials.instagram && (
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={leader.socials.instagram}
                        className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all border border-white/5'>
                        <FaInstagram className='text-sm' />
                      </motion.a>
                    )}
                    {leader.socials.linkedin && (
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={leader.socials.linkedin}
                        className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all border border-white/5'>
                        <FaLinkedin className='text-sm' />
                      </motion.a>
                    )}
                    {leader.socials.github && (
                      <motion.a
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={leader.socials.github}
                        className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all border border-white/5'>
                        <FaGithub className='text-sm' />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Legacy Texture / Number */}
                <span className='absolute -bottom-6 -right-2 text-7xl font-black text-white/2 select-none italic group-hover:text-white/5 transition-colors'>
                  #{leader.id}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action for Internal Members */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='mt-24 p-1 rounded-[3rem] bg-linear-to-r from-primary/20 via-white/5 to-accent/20'>
          <div className='bg-slate-900/60 backdrop-blur-2xl rounded-[2.9rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10'>
            <div className='space-y-4 text-center md:text-left'>
              <h3 className='text-3xl font-black text-white'>Ingin Menjadi Bagian dari Kami?</h3>
              <p className='text-slate-400 font-medium max-w-xl'>
                Kami selalu membuka kesempatan bagi mahasiswa Poliban yang ingin berkontribusi dan
                berkembang bersama di iTech.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type='button'
              className='px-10 py-5 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-primary/20 shrink-0'>
              Hubungi Kami
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
