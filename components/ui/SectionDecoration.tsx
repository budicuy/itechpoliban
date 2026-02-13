'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface PathData {
  id: string
  d: string
  color: string
  duration: number
  delay: number
}

const paths: PathData[] = [
  // Top Left Group
  {
    color: 'var(--color-primary)',
    d: 'M -20 100 L 100 100 L 100 200 L 200 200',
    delay: 0,
    duration: 3,
    id: 'tl-1'
  },
  {
    color: 'var(--color-accent)',
    d: 'M 50 -20 L 50 150 L 150 150 L 150 250',
    delay: 1,
    duration: 4,
    id: 'tl-2'
  },
  // Top Right Group
  {
    color: 'var(--color-primary)',
    d: 'M 800 -20 L 800 120 L 950 120 L 1020 200',
    delay: 0.5,
    duration: 5,
    id: 'tr-1'
  },
  {
    color: 'var(--color-accent)',
    d: 'M 900 -20 L 900 80 L 850 80 L 850 180',
    delay: 2,
    duration: 3.5,
    id: 'tr-2'
  },
  // Bottom Left Group
  {
    color: 'var(--color-accent)',
    d: 'M -20 800 L 120 800 L 120 950 L 200 1020',
    delay: 1.5,
    duration: 4.5,
    id: 'bl-1'
  },
  {
    color: 'var(--color-primary)',
    d: 'M 80 1020 L 80 850 L 180 850 L 180 750',
    delay: 0.2,
    duration: 3.8,
    id: 'bl-2'
  },
  // Bottom Right Group
  {
    color: 'var(--color-primary)',
    d: 'M 1020 850 L 850 850 L 850 750 L 750 750',
    delay: 0.8,
    duration: 4,
    id: 'br-1'
  },
  {
    color: 'var(--color-accent)',
    d: 'M 920 1020 L 920 900 L 800 900 L 800 800',
    delay: 2.5,
    duration: 5.5,
    id: 'br-2'
  },
  // Center Flow
  {
    color: 'var(--color-primary)',
    d: 'M 400 -20 L 400 100 L 600 100 L 600 200',
    delay: 0,
    duration: 6,
    id: 'cf-1'
  },
  {
    color: 'var(--color-accent)',
    d: 'M 600 1020 L 600 900 L 400 900 L 400 800',
    delay: 1,
    duration: 6,
    id: 'cf-2'
  }
]

export default function SectionDecoration() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-30'>
      <svg
        className='w-full h-full'
        viewBox='0 0 1000 1000'
        preserveAspectRatio='xMidYMid slice'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'>
        <title>Section Decoration</title>
        <defs>
          <filter id='neon-glow' x='-50%' y='-50%' width='200%' height='200%'>
            <feGaussianBlur stdDeviation='3' result='blur' />
            <feComposite in='SourceGraphic' in2='blur' operator='over' />
          </filter>
        </defs>

        {paths.map(path => (
          <g key={path.id}>
            {/* Background static path */}
            <path d={path.d} stroke={path.color} strokeWidth='1' fill='none' strokeOpacity='0.1' />

            {/* Animated drawing path */}
            <motion.path
              d={path.d}
              stroke={path.color}
              strokeWidth='2'
              fill='none'
              filter='url(#neon-glow)'
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                pathLength: [0, 1, 1, 1]
              }}
              transition={{
                delay: path.delay,
                duration: path.duration,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1
              }}
            />

            {/* Data particle moving along path */}
            <motion.circle
              r='3'
              fill={path.color}
              filter='url(#neon-glow)'
              initial={{ offsetDistance: '0%', opacity: 0 }}
              animate={{
                offsetDistance: ['0%', '100%'],
                opacity: [0, 1, 1, 0]
              }}
              style={{
                offsetPath: `path("${path.d}")`,
                offsetRotate: 'auto'
              }}
              transition={{
                delay: path.delay,
                duration: path.duration,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1
              }}
            />

            {/* Processor Nodes (rectangles at joints) */}
            {path.d
              .split(/[LM]/)
              .filter(Boolean)
              .map((point, idx) => {
                const [x, y] = point.trim().split(' ').map(Number)
                if (Number.isNaN(x) || Number.isNaN(y)) return null
                return (
                  <motion.rect
                    key={`${path.id}-node-${idx}`}
                    x={x - 4}
                    y={y - 4}
                    width='8'
                    height='8'
                    rx='2'
                    fill='none'
                    stroke={path.color}
                    strokeWidth='1'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ delay: idx * 0.2 + path.delay }}
                  />
                )
              })}
          </g>
        ))}

        {/* Extra Decorative Components */}
        <motion.rect
          x='480'
          y='480'
          width='40'
          height='40'
          rx='4'
          stroke='var(--color-primary)'
          strokeWidth='1'
          fill='none'
          animate={{
            opacity: [0.1, 0.3, 0.1],
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Number.POSITIVE_INFINITY
          }}
        />
        <motion.rect
          x='490'
          y='490'
          width='20'
          height='20'
          rx='2'
          stroke='var(--color-accent)'
          strokeWidth='1'
          fill='none'
          animate={{
            opacity: [0.1, 0.4, 0.1],
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            ease: 'linear',
            repeat: Number.POSITIVE_INFINITY
          }}
        />
      </svg>
    </div>
  )
}
