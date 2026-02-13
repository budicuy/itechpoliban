'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuLinks = [
    {
      href: '#about',
      name: 'About'
    },
    {
      href: '#visi-misi',
      name: 'Visi Misi'
    },
    {
      href: '#divisi',
      name: 'Divisi'
    },
    {
      href: '#prestasi',
      name: 'Prestasi'
    },
    {
      href: '#history-leaders',
      name: 'History'
    }
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'glass-nav py-2' : 'py-4'
      }`}>
      <div className='max-w-7xl mx-auto px-6 h-13 flex items-center justify-between'>
        <Link
          href='/'
          className='flex items-center space-x-3 group'
          onClick={() => setIsOpen(false)}>
          <div className='relative w-10 h-10 transition-transform group-hover:scale-110'>
            <Image
              alt='iTech Poliban Logo'
              className='object-contain'
              src='/logo-itech.svg'
              fill
              priority
            />
          </div>
          <span className='text-xl font-extrabold tracking-tighter text-slate-900 dark:text-white uppercase'>
            iTech <span className='text-accent'>Poliban</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center space-x-8'>
          {menuLinks.map(link => (
            <a
              key={link.name}
              className='text-sm font-medium hover:text-accent transition-colors'
              href={link.href}>
              {link.name}
            </a>
          ))}
          <Link
            className='px-5 py-2 bg-primary hover:bg-primary/80 text-white rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20'
            href='#kontak'>
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type='button'
          className='md:hidden text-white p-2'
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiXMark className='text-3xl' /> : <HiBars3 className='text-3xl' />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] border-b border-white/10' : 'max-h-0'
        }`}>
        <div className='glass-nav backdrop-blur-2xl p-6 flex flex-col space-y-4'>
          {menuLinks.map(link => (
            <a
              key={link.name}
              className='text-lg font-bold text-white/70 hover:text-accent transition-colors py-2 border-b border-white/5'
              href={link.href}
              onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <Link
            className='w-full py-4 bg-primary text-center text-white rounded-xl text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20 mt-4 outline-none'
            href='#kontak'
            onClick={() => setIsOpen(false)}>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  )
}
