import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home',         id: 'home' },
  { label: 'About',        id: 'about' },
  // { label: 'Skills',       id: 'skills' },
  { label: 'Experience',   id: 'experience' },
  // { label: 'Projects',     id: 'projects' },
  // { label: 'Publications', id: 'publications' },
  // { label: 'Contact',      id: 'contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [active,      setActive]      = useState('home')
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRefs = useRef({})
  const navBarRef = useRef(null)

  /* ── scroll spy ─────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const scrollY = window.scrollY + 120
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id)
        if (el && el.offsetTop <= scrollY) {
          setActive(navItems[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── move indicator under active item ── */
  useEffect(() => {
    const el = navRefs.current[active]
    const bar = navBarRef.current
    if (el && bar) {
      const elRect  = el.getBoundingClientRect()
      const barRect = bar.getBoundingClientRect()
      setIndicatorStyle({
        left:  elRect.left - barRect.left,
        width: elRect.width,
      })
    }
  }, [active])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="text-xl font-bold text-gradient-cyan tracking-tight flex-shrink-0"
        >
          Adeel<span className="text-white"></span>
        </button>

        {/* Desktop links */}
        <div ref={navBarRef} className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item) => (
            <button
              key={item.id}
              ref={(el) => (navRefs.current[item.id] = el)}
              onClick={() => scrollTo(item.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                active === item.id
                  ? 'text-[#22d3ee]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Animated underline indicator */}
          <motion.div
            className="absolute bottom-0 h-[2px] rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }}
            animate={indicatorStyle}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <motion.span
              className="block h-0.5 bg-current rounded-full"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 bg-current rounded-full"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 bg-current rounded-full"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0d1529]/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === item.id
                      ? 'text-[#22d3ee] bg-[#22d3ee]/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
