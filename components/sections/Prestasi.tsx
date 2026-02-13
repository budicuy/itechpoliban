'use client'

import { motion, type Variants } from 'motion/react'
import Link from 'next/link'
import { MdEmojiEvents, MdMilitaryTech, MdOutlineLocationOn } from 'react-icons/md'
import SectionDecoration from '@/components/ui/SectionDecoration'

const achievements = [
  {
    category: 'Software',
    color: 'from-yellow-400 to-amber-600',
    description:
      'Berhasil meraih Juara I kategori Software dalam rangka memeriahkan Hari Jadi Ke-75 Provinsi Kalimantan Selatan.',
    id: 1,
    location: 'Kalimantan Selatan',
    rank: 'Gold Medal',
    title: 'Juara I Lomba Kreativitas Pemuda',
    year: '2025'
  },
  {
    category: 'Hardware',
    color: 'from-slate-300 to-slate-500',
    description:
      'Meraih Juara II kategori Hardware pada ajang Lomba Kreativitas Pemuda tingkat Provinsi.',
    id: 2,
    location: 'Kalimantan Selatan',
    rank: 'Silver Medal',
    title: 'Juara II Lomba Kreativitas Pemuda',
    year: '2025'
  },
  {
    category: 'Desain Grafis',
    color: 'from-orange-400 to-red-600',
    description:
      'Menempati posisi Juara III untuk bidang Desain Grafis dalam kompetisi tingkat Provinsi.',
    id: 3,
    location: 'Kalimantan Selatan',
    rank: 'Bronze Medal',
    title: 'Juara III Lomba Kreativitas Pemuda',
    year: '2025'
  }
]

export default function Prestasi() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const headingText = 'Prestasi Terbaru'
  const words = headingText.split(' ')

  return (
    <section className='py-24 lg:py-40 bg-background-dark relative overflow-hidden' id='prestasi'>
      <SectionDecoration />
      {/* Decorative Elements */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
        className='absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -ml-40'
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
        className='absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -mr-40'
      />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='text-center mb-20 space-y-6'>
          <motion.div
            variants={wordVariants}
            className='inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary'>
            <MdEmojiEvents className='mr-2 text-xl' />
            <span className='text-[10px] font-black uppercase tracking-[0.2em]'>
              Latest Achievements
            </span>
          </motion.div>
          <div className='relative'>
            <motion.div
              aria-hidden='true'
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className='absolute inset-0 text-4xl md:text-6xl font-black tracking-tighter blur-2xl opacity-70 pointer-events-none select-none'>
              {headingText}
            </motion.div>
            <h2 className='relative text-4xl md:text-6xl font-black text-white tracking-tighter flex justify-center gap-x-4'>
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  className={
                    i === 1
                      ? 'text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-accent'
                      : 'text-white'
                  }>
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
          <motion.p
            variants={wordVariants}
            className='text-slate-400 max-w-2xl mx-auto text-lg font-medium lg:px-0 px-4'>
            Dedikasi berkelanjutan iTech Poliban dalam berinovasi dan berkompetisi di tingkat
            provinsi maupun nasional.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ margin: '-50px', once: true }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {achievements.map(item => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className='group relative glass-card p-1 rounded-[2.5rem] border-white/5 hover:border-white/20 transition-all duration-500'>
              <div className='relative h-full bg-slate-900/40 backdrop-blur-xl rounded-[2.4rem] p-8 md:p-10 overflow-hidden'>
                {/* Background Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}
                />

                <div className='relative z-10 space-y-6'>
                  <div className='flex items-center justify-between'>
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-slate-900 shadow-lg`}>
                      <MdMilitaryTech className='text-3xl' />
                    </motion.div>
                    <div className='text-right'>
                      <div className='text-[10px] font-black text-accent uppercase tracking-widest'>
                        {item.year}
                      </div>
                      <div className='text-xs font-bold text-white/40'>{item.category}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-2xl font-black text-white leading-tight mb-2 group-hover:text-accent transition-colors'>
                      {item.title}
                    </h3>
                    <div className='flex items-center gap-2 text-slate-500 text-sm font-medium'>
                      <MdOutlineLocationOn />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className='text-slate-400 text-sm leading-relaxed font-medium'>
                    {item.description}
                  </p>

                  <div className='pt-4 flex items-center gap-4'>
                    <div className='h-px flex-1 bg-white/10' />
                    <div className='px-4 py-1.5 rounded-full bg-white/5 border border-white/10'>
                      <span className='text-[10px] font-black text-white uppercase tracking-widest'>
                        {item.rank}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className='mt-20 text-center'>
          <Link
            href='/prestasi'
            className='inline-flex items-center justify-center gap-3 mx-auto px-10 py-5 bg-white/5 border border-white/10 hover:border-primary/50 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl transition-all hover:bg-primary/10 group'>
            Lihat Semua Prestasi
            <MdEmojiEvents className='text-xl group-hover:rotate-12 transition-transform' />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
