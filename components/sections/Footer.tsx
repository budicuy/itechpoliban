import Image from 'next/image'
import { FaEnvelope, FaInstagram, FaLocationDot, FaPhone, FaXTwitter } from 'react-icons/fa6'
import SectionDecoration from '@/components/ui/SectionDecoration'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className='bg-background-dark border-t border-white/5 pt-20 pb-10 relative overflow-hidden'
      id='kontak'>
      <SectionDecoration />
      {/* Background Decorative Element */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-primary/50 to-transparent' />
      <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl' />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16'>
          {/* Brand Column */}
          <div className='lg:col-span-5 space-y-8'>
            <div className='flex items-center gap-4'>
              <div className='relative w-12 h-12'>
                <Image src='/logo-itech.svg' alt='iTech Logo' fill className='object-contain' />
              </div>
              <div>
                <h2 className='text-xl font-black text-white tracking-tighter uppercase leading-none'>
                  iTech <span className='text-accent'>Poliban</span>
                </h2>
                <p className='text-[10px] text-primary font-bold uppercase tracking-[0.3em] mt-1'>
                  Technology Community
                </p>
              </div>
            </div>

            <p className='text-slate-400 text-lg font-medium leading-relaxed max-w-md'>
              Membangun ekosistem teknologi yang inklusif dan inovatif untuk melahirkan talenta
              digital terbaik dari Politeknik Negeri Banjarmasin.
            </p>

            <div className='flex items-center gap-4'>
              {[
                {
                  href: '#',
                  icon: FaXTwitter,
                  label: 'X'
                },
                {
                  href: '#',
                  icon: FaInstagram,
                  label: 'Instagram'
                }
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  className='w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300'
                  aria-label={social.label}>
                  <social.icon className='text-xl' />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className='lg:col-span-3 lg:pl-12'>
            <h4 className='text-white font-black uppercase tracking-widest text-xs mb-8'>
              Navigation
            </h4>
            <ul className='space-y-4'>
              {[
                {
                  href: '/#hero',
                  name: 'Beranda'
                },
                {
                  href: '/#about',
                  name: 'Profil'
                },
                {
                  href: '/#divisi',
                  name: 'Divisi'
                },
                {
                  href: '/#prestasi',
                  name: 'Prestasi'
                }
              ].map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-slate-400 font-medium hover:text-accent flex items-center group transition-colors'>
                    <span className='w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all' />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='lg:col-span-4'>
            <h4 className='text-white font-black uppercase tracking-widest text-xs mb-8'>
              Get in Touch
            </h4>
            <div className='space-y-6'>
              {[
                {
                  icon: FaEnvelope,
                  text: 'contact@itechpoliban.org'
                },
                {
                  icon: FaPhone,
                  text: '+62 812 3456 7890'
                },
                {
                  icon: FaLocationDot,
                  text: 'Gedung TI Lt. 2, Poliban, Banjarmasin, Kalimantan Selatan'
                }
              ].map(item => (
                <div key={item.text} className='flex items-start gap-4 group'>
                  <div className='w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0'>
                    <item.icon />
                  </div>
                  <p className='text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors'>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-slate-500 text-sm font-medium'>
            © {currentYear} <span className='text-white'>iTech Poliban</span>. All rights reserved.
          </p>
          <div className='flex items-center gap-8'>
            <a
              href='/privacy'
              className='text-sm font-medium text-slate-500 hover:text-white transition-colors'>
              Privacy Policy
            </a>
            <a
              href='/terms'
              className='text-sm font-medium text-slate-500 hover:text-white transition-colors'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
