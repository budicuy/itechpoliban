'use client'

import { motion } from 'motion/react'

export function AboutDecoration() {
  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden opacity-20'>
      <svg
        className='w-full h-full'
        viewBox='0 0 800 800'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <title>About Background Decoration</title>
        <motion.path
          d='M100 100L200 100V200L300 200V100H400V300H200V400H500V200'
          stroke='currentColor'
          className='text-primary'
          strokeWidth='2'
          strokeDasharray='10 5'
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.path
          d='M700 700L600 700V600L500 600V700H400V500H600V400H300V600'
          stroke='currentColor'
          className='text-accent'
          strokeWidth='2'
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
        />
        <circle cx='100' cy='100' r='5' className='fill-primary animate-pulse' />
        <circle cx='500' cy='200' r='5' className='fill-primary' />
        <circle cx='300' cy='600' r='5' className='fill-accent animate-pulse' />
      </svg>
    </div>
  )
}

export function VisiMisiDecoration() {
  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden opacity-10'>
      <svg className='w-full h-full' viewBox='0 0 1000 1000' fill='none'>
        <title>Visi Misi Background Decoration</title>
        <motion.path
          d='M500 50L550 450L950 500L550 550L500 950L450 550L500 500L450 450Z'
          stroke='currentColor'
          className='text-accent'
          strokeWidth='1'
          initial={{ pathLength: 0, scale: 0.8, rotate: -15 }}
          whileInView={{ pathLength: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 3, ease: 'linear' }}
        />
        <motion.circle
          cx='500'
          cy='500'
          r='300'
          stroke='currentColor'
          className='text-primary'
          strokeWidth='0.5'
          strokeDasharray='20 10'
          initial={{ pathLength: 0, rotate: 0 }}
          whileInView={{ pathLength: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        />
      </svg>
    </div>
  )
}

export function DivisiDecoration() {
  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden opacity-15'>
      <svg className='w-full h-full' viewBox='0 0 1200 800' fill='none'>
        <title>Divisi Background Decoration</title>
        {[1, 2, 3, 4, 5].map(i => (
          <motion.path
            key={`grid-line-${i}`}
            d={`M${200 * i} 0V800M0 ${160 * i}H1200`}
            stroke='currentColor'
            className='text-primary'
            strokeWidth='0.5'
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          />
        ))}
        <motion.path
          d='M100 100L1100 700M1100 100L100 700'
          stroke='currentColor'
          className='text-accent'
          strokeWidth='1'
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

export function PrestasiDecoration() {
  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden opacity-20'>
      <svg className='w-full h-full' viewBox='0 0 800 800' fill='none'>
        <title>Prestasi Background Decoration</title>
        <motion.path
          d='M400 100L450 300L650 300L500 450L550 650L400 500L250 650L300 450L150 300L350 300Z'
          stroke='currentColor'
          className='text-yellow-500'
          strokeWidth='2'
          initial={{ pathLength: 0, rotate: -45, scale: 0.5 }}
          whileInView={{ pathLength: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 2, ease: 'backOut' }}
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={`ray-${i}`}
            x1='400'
            y1='400'
            x2={400 + Math.cos((i * Math.PI) / 4) * 400}
            y2={400 + Math.sin((i * Math.PI) / 4) * 400}
            stroke='currentColor'
            className='text-primary'
            strokeWidth='1'
            strokeDasharray='5 5'
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  )
}

export function HistoryDecoration() {
  return (
    <div className='absolute inset-0 pointer-events-none overflow-hidden opacity-10'>
      <svg className='w-full h-full' viewBox='0 0 1000 1000' fill='none'>
        <title>History Background Decoration</title>
        <motion.path
          d='M50 500H950M50 490V510M275 490V510M500 490V510M725 490V510M950 490V510'
          stroke='currentColor'
          className='text-white'
          strokeWidth='2'
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.circle
          cx='500'
          cy='500'
          r='400'
          stroke='currentColor'
          className='text-accent'
          strokeWidth='1'
          strokeDasharray='10 10'
          initial={{ pathLength: 0, rotate: 0 }}
          whileInView={{ pathLength: 1, rotate: -360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
        />
      </svg>
    </div>
  )
}
