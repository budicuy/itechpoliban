'use client'

import { AnimatePresence, motion, type Variants } from 'motion/react'
import { useEffect, useState } from 'react'
import { MdChevronRight, MdRocketLaunch, MdVisibility } from 'react-icons/md'

const misiData = [
  {
    num: '01.',
    text: 'Mewadahi kreatifitas mahasiswa di bidang IT.',
    title: 'Wadah Kreativitas'
  },
  {
    num: '02.',
    text: 'Mengkoordinir kegiatan kemahasiswaan yang bergerak di bidang IT.',
    title: 'Koordinasi Kegiatan'
  },
  {
    num: '03.',
    text: 'Mendorong mahasiswa untuk ikut berpartisipasi dalam kompetisi di bidang IT.',
    title: 'Partisipasi Kompetisi'
  },
  {
    num: '04.',
    text: 'Mendorong mahasiswa untuk mengembangkan teknologi dilingkungan kampus maupun masyarakat.',
    title: 'Pengembangan Teknologi'
  }
]

export default function VisiMisi() {
  const [activeMisi, setActiveMisi] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMisi(prev => (prev + 1) % misiData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = {
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

  const headingText = 'Visi & Misi Komunitas'
  const words = headingText.split(' ')

  return (
    <section className='py-20 lg:py-32 bg-background-dark relative overflow-hidden' id='visi-misi'>
      {/* Decorative Blobs */}
      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
        className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64'
      />
      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 12, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
        className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-64 -mb-64'
      />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='text-center mb-20 space-y-4'>
          <motion.div
            variants={wordVariants}
            className='inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent'>
            <span className='w-2 h-2 rounded-full bg-primary mr-2 animate-ping' />
            <span className='text-[10px] font-black uppercase tracking-[0.2em]'>
              Goal & Objectives
            </span>
          </motion.div>
          <div className='relative'>
            <motion.div
              aria-hidden='true'
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className='absolute inset-0 text-4xl md:text-5xl font-black blur-2xl opacity-70 pointer-events-none select-none'>
              {headingText}
            </motion.div>
            <h2 className='relative text-4xl md:text-5xl font-black text-white px-2 flex justify-center flex-wrap gap-x-4'>
              {words.map(word => (
                <motion.span
                  key={`word-${word}`}
                  variants={wordVariants}
                  className={
                    word === 'Misi'
                      ? 'text-transparent bg-clip-text bg-linear-to-r from-accent to-yellow-200'
                      : 'text-white'
                  }>
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ margin: '-100px', once: true }}
          className='grid lg:grid-cols-5 gap-8 items-stretch'>
          {/* Visi Section - 2 columns */}
          <motion.div variants={itemVariants} className='lg:col-span-2 group relative'>
            <div className='absolute inset-0 bg-linear-to-br from-primary/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
            <div className='relative h-full glass-card p-10 lg:p-12 rounded-[2.5rem] border-white/5 flex flex-col justify-between overflow-hidden'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16' />

              <div>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                  className='w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/30'>
                  <MdVisibility className='text-4xl' />
                </motion.div>
                <h3 className='text-3xl font-black text-white mb-6'>Visi</h3>
                <p className='text-xl lg:text-2xl text-slate-300 leading-relaxed font-medium italic'>
                  “Meningkatkan Insan{' '}
                  <span className='text-primary not-italic font-black'>kreatif</span>,{' '}
                  <span className='text-primary not-italic font-black'>Komunikatif</span>, dan{' '}
                  <span className='text-primary not-italic font-black'>Religius</span> sehingga
                  dapat berkompetensi dan berkompetisi nasional dan internasional dibidang IT"
                </p>
              </div>

              <div className='mt-12 flex items-center gap-4'>
                <div className='h-px flex-1 bg-linear-to-r from-primary to-transparent' />
                <span className='text-[10px] font-black text-primary/60 uppercase tracking-widest leading-none'>
                  Our Vision
                </span>
              </div>
            </div>
          </motion.div>

          {/* Misi Slider - 3 columns */}
          <motion.div variants={itemVariants} className='lg:col-span-3 flex flex-col gap-6'>
            <div className='flex-1 glass-card p-10 lg:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden flex flex-col justify-center text-reveal-container'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32' />

              <div className='space-y-8 relative z-10'>
                <div className='flex items-center justify-between'>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className='w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent border border-accent/30'>
                    <MdRocketLaunch className='text-4xl' />
                  </motion.div>
                  <span className='text-5xl font-black text-white/5 select-none'>
                    {misiData[activeMisi].num}
                  </span>
                </div>

                <div className='min-h-[140px] relative overflow-hidden'>
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={activeMisi}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}>
                      <h4 className='text-2xl md:text-3xl font-black text-white mb-4'>
                        {misiData[activeMisi].title}
                      </h4>
                      <p className='text-lg md:text-xl text-slate-400 font-medium leading-relaxed'>
                        {misiData[activeMisi].text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slider Indicators */}
                <div className='flex gap-2 pt-4'>
                  {misiData.map((misi, idx) => (
                    <button
                      key={misi.num}
                      type='button'
                      onClick={() => setActiveMisi(idx)}
                      className='group relative h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/20'>
                      {activeMisi === idx && (
                        <motion.div
                          layoutId='activeIndicator'
                          className='absolute inset-0 bg-accent h-full'
                        />
                      )}
                      {activeMisi > idx && <div className='absolute inset-0 bg-accent/40 w-full' />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub-Misi Grid (Tiny Previews) */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {misiData.map((misi, idx) => (
                <button
                  key={misi.num}
                  type='button'
                  onClick={() => setActiveMisi(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-500 text-left ${
                    activeMisi === idx
                      ? 'bg-accent/10 border-accent/50 scale-[1.02]'
                      : 'bg-white/5 border-white/5 hover:border-white/20'
                  }`}>
                  <p
                    className={`text-[10px] font-black mb-1 ${activeMisi === idx ? 'text-accent' : 'text-slate-500'}`}>
                    MISI {misi.num}
                  </p>
                  <MdChevronRight
                    className={`text-xl transition-transform ${activeMisi === idx ? 'translate-x-1 text-accent' : 'text-white/20'}`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
