'use client'

import { motion, type Variants } from 'motion/react'
import Image from 'next/image'
import { FaBrain, FaCode, FaReact } from 'react-icons/fa'
import SectionDecoration from '@/components/ui/SectionDecoration'

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
      y: 0
    }
  }

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        damping: 15,
        delay: 0.3,
        stiffness: 100,
        type: 'spring'
      }
    }
  }

  const headingText = 'Mencetak Generasi Unggul di Bidang Teknologi'
  const words = headingText.split(' ')

  return (
    <section className='py-16 lg:py-32 bg-background-dark relative overflow-hidden' id='about'>
      <SectionDecoration />
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ margin: '-100px', once: true }}
          variants={containerVariants}
          className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
          {/* Visual Element with Logo - Order 2 on mobile, 1 on desktop */}
          <motion.div variants={itemVariants} className='relative group order-2 lg:order-1'>
            <div className='relative w-full aspect-square max-w-[450px] mx-auto flex items-center justify-center'>
              {/* Spinning Orbits */}
              <div className='absolute orbital-path w-[110%] h-[110%] border-primary/20 rotating-orbit' />
              <div
                className='absolute orbital-path w-[130%] h-[130%] border-accent/10 rotating-orbit'
                style={{
                  animationDirection: 'reverse',
                  animationDuration: '25s'
                }}
              />

              {/* Glow Effect */}
              <div className='absolute inset-0 bg-linear-to-tr from-primary/30 to-accent/10 rounded-full blur-[60px] opacity-50 group-hover:opacity-80 transition-opacity duration-1000' />

              {/* Main Logo */}
              <motion.div
                variants={logoVariants}
                whileHover={{ rotate: 2, scale: 1.05 }}
                className='relative z-10 w-full h-full p-8 sm:p-12 floating-icon'>
                <Image
                  alt='iTech Poliban Logo'
                  className='w-full h-full object-contain drop-shadow-[0_0_30px_rgba(102,15,189,0.3)]'
                  src='/logo-itech.svg'
                  width={400}
                  height={400}
                />
              </motion.div>

              {/* Floating Stat Badges */}
              {[
                {
                  desc: 'Years of',
                  iconColor: 'bg-primary/20 text-primary',
                  label: 'Experience',
                  pos: '-top-4 -left-2 sm:-left-4',
                  value: '3+'
                },
                {
                  desc: 'Active',
                  iconColor: 'bg-accent/20 text-accent',
                  label: 'Members',
                  pos: 'top-1/2 -right-4 sm:-right-8',
                  value: '100+'
                },
                {
                  desc: 'Finished',
                  iconColor: 'bg-purple-500/20 text-purple-500',
                  label: 'Projects',
                  pos: '-bottom-4 left-1/4',
                  value: '50+'
                }
              ].map((badge, idx) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.5, x: idx === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.2, type: 'spring' }}
                  whileHover={{ transition: { duration: 0.3 }, y: -10 }}
                  className={`absolute ${badge.pos} glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl z-20 border-white/20 scale-90 sm:scale-100 cursor-default`}>
                  <div className='flex items-center gap-2 sm:gap-3'>
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${badge.iconColor} flex items-center justify-center`}>
                      <span className='text-xs sm:text-base font-black'>{badge.value}</span>
                    </div>
                    <div>
                      <p className='text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-tighter'>
                        {badge.desc}
                      </p>
                      <p className='text-[10px] sm:text-xs font-black text-white'>{badge.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Decorative Floating Dots */}
              <div className='absolute top-10 right-10 w-4 h-4 bg-accent rounded-full animate-ping opacity-20' />
              <div
                className='absolute bottom-20 left-0 w-3 h-3 bg-primary rounded-full animate-bounce opacity-40'
                style={{
                  animationDelay: '1s'
                }}
              />
            </div>
          </motion.div>

          {/* Content Side - Order 1 on mobile, 2 on desktop */}
          <div className='space-y-8 order-1 lg:order-2'>
            <motion.div variants={itemVariants} className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors cursor-default'>
                <span className='w-2 h-2 rounded-full bg-accent mr-2 animate-pulse' />
                <span className='text-[10px] font-black uppercase tracking-[0.2em]'>
                  The Community
                </span>
              </motion.div>
              <div className='relative'>
                <motion.div
                  aria-hidden='true'
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
                  className='absolute inset-0 text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter blur-2xl opacity-70 pointer-events-none select-none'>
                  <span className='text-white'>Mencetak </span>
                  <span className='text-primary'>Generasi Unggul</span>
                  <span className='text-white'> di Bidang Teknologi</span>
                </motion.div>
                <h2 className='relative text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter flex flex-wrap gap-x-3'>
                  {words.map((word, i) => (
                    <motion.span
                      key={word}
                      variants={wordVariants}
                      custom={i}
                      className={
                        word === 'Generasi' || word === 'Unggul'
                          ? 'text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500'
                          : 'text-white'
                      }>
                      {word}
                    </motion.span>
                  ))}
                </h2>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className='glass-card p-8 rounded-3xl border-white/5 relative group hover:border-primary/30 transition-all duration-500 overflow-hidden bg-linear-to-br from-white/5 via-transparent to-primary/5'>
              {/* Background Glows */}
              <div className='absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-primary/20 transition-all duration-700' />
              <div className='absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -ml-16 -mb-16 group-hover:bg-accent/10 transition-all duration-700' />

              <div className='relative z-10'>
                <motion.p
                  variants={itemVariants}
                  className='text-slate-400 leading-relaxed font-medium text-lg'>
                  <span className='text-primary font-bold'>iTech Poliban</span> merupakan salah satu{' '}
                  <span className='text-white font-bold bg-white/5 px-2 py-0.5 rounded-lg border border-white/10'>
                    komunitas IT
                  </span>{' '}
                  yang ada di Politeknik Negeri Banjarmasin. Didirikan pada tanggal{' '}
                  <span className='text-accent font-bold decoration-accent/30 underline decoration-2 underline-offset-4'>
                    8 Oktober 2021
                  </span>{' '}
                  dan diresmikan pada tanggal{' '}
                  <span className='text-accent font-bold decoration-accent/30 underline decoration-2 underline-offset-4'>
                    25 Februari 2022
                  </span>
                  .
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className='my-6 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent origin-left'
                />

                <motion.p
                  variants={itemVariants}
                  className='text-slate-400 leading-relaxed font-medium text-lg'>
                  Kami adalah wadah bagi mahasiswa yang memiliki{' '}
                  <span className='text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500 font-extrabold italic'>
                    Passion di dunia IT
                  </span>{' '}
                  untuk belajar dan berkembang bersama, baik{' '}
                  <span className='text-primary font-bold'>Hardskill</span> maupun{' '}
                  <span className='text-purple-500 font-bold'>Softskill</span>. Kami terbuka untuk{' '}
                  <span className='text-white font-bold'>Semua Program Studi di Poliban</span> tanpa
                  latar belakang IT sebelumnya.
                </motion.p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className='grid grid-cols-3 gap-3 pt-4'>
              {[
                {
                  color: 'bg-primary/20 text-primary',
                  desc: 'Skill Intensif',
                  icon: <FaCode className='text-xl' />,
                  label: 'Hardskill'
                },
                {
                  color: 'bg-purple-500/20 text-purple-500',
                  desc: 'Kolaborasi',
                  icon: <FaBrain className='text-xl' />,
                  label: 'Softskill'
                },
                {
                  color: 'bg-accent/20 text-accent',
                  desc: 'Jaringan IT',
                  icon: <FaReact className='text-xl animate-[spin_8s_linear_infinite]' />,
                  label: 'Passion'
                }
              ].map(item => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className='group/card p-3 sm:p-4 rounded-2xl bg-white/5 border border-transparent hover:border-primary/30 transition-all flex flex-col items-center text-center space-y-2 sm:space-y-3 cursor-default'>
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.color} flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className='text-[10px] sm:text-xs font-black text-white uppercase tracking-tighter'>
                      {item.label}
                    </h4>
                    <p className='hidden sm:block text-[10px] text-slate-400 font-bold leading-tight mt-1'>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
