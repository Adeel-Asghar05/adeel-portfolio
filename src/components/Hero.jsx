import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/Pic.jpg'

const ROLES = [
  'Machine Learning Engineer',
  'AI Researcher',
  'Computer Vision Expert',
  'Deep RL Specialist',
]

function useTypingEffect(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((w) => (w + 1) % words.length)
    }

    setDisplay(current.substring(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/adeel-asghar1',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Adeel-Asghar05',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0006-6835-4181',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.784 4.078-3.722 0-2.025-1.722-3.722-4.078-3.722h-2.297z" />
      </svg>
    ),
  },
]

const tags = ['Computer Vision', 'Deep RL', 'Healthcare AI', 'Robotics']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function Hero() {
  const role = useTypingEffect(ROLES)

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* ── Background orbs ─────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── Left: Text ──────────────────── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Greeting badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}>
                <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-[1.05]">
              <span className="text-white">Adeel</span>{' '}
              <span className="text-gradient-cyan">Asghar</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div {...fadeUp(0.35)} className="h-10 mb-6 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl font-semibold text-slate-300">
                {role}
                <span className="text-[#22d3ee] animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p {...fadeUp(0.5)} className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Specialized in developing <span className="text-slate-200 font-medium">production-ready AI systems</span> that deliver measurable business impact. Expert in building end-to-end ML pipelines with <span className="text-[#22d3ee] font-medium">94%+ accuracy </span> for computer vision, deep RL, and robotics applications.
            </motion.p>

            {/* Tags */}
            <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
              {tags.map((tag) => (
                <span key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full"
                  style={{ background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.15)', color: '#67e8f9' }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                View Projects
              </button>
              {/* <a href="/Adeel-Asghar-CV.pdf" download className="btn-outline">
                Download CV
              </a> */}
                <button onClick={() => scrollTo('contact')}
                className="px-8 py-3 rounded-lg font-semibold border-2 border-[#22d3ee]/30 text-[#22d3ee] hover:bg-[#22d3ee]/10 hover:border-[#22d3ee] transition-all duration-300">
                Let's Talk
              </button>
              <button onClick={() => scrollTo('contact')}
                className="px-8 py-3 rounded-lg font-semibold text-slate-400 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                {"< > let's collaborate"}
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.85)} className="flex gap-3 justify-center lg:justify-start">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#22d3ee] transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34,211,238,0.35)'
                    e.currentTarget.style.background = 'rgba(34,211,238,0.08)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(34,211,238,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile Image ─────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex-shrink-0 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full animate-glow"
                style={{
                  background: 'transparent',
                  boxShadow: '0 0 0 1px rgba(34,211,238,0.2), 0 0 60px rgba(34,211,238,0.15), 0 0 100px rgba(34,211,238,0.07)',
                  borderRadius: '50%',
                  transform: 'scale(1.08)',
                }} />

              {/* Rotating border gradient */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  padding: '3px',
                  background: 'linear-gradient(135deg, #22d3ee 0%, transparent 40%, transparent 60%, #0891b2 100%)',
                  borderRadius: '50%',
                  animation: 'spin 8s linear infinite',
                }} />

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden"
                style={{ border: '3px solid rgba(34,211,238,0.3)' }}>
                <img
                  src={profilePic}
                  alt="Adeel Asghar"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `
                      <div style="width:100%;height:100%;background:linear-gradient(135deg,#0f1a2e,#1a2744);display:flex;align-items:center;justify-content:center;">
                        <svg width="96" height="96" fill="none" viewBox="0 0 24 24" stroke="rgba(34,211,238,0.4)" stroke-width="1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    `
                  }}
                />
                {/* Overlay shimmer */}
                <div className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, transparent 50%, rgba(8,145,178,0.05) 100%)' }} />
              </div>

              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-semibold"
                style={{ background: 'rgba(13,21,41,0.95)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee', backdropFilter: 'blur(10px)' }}>
                🧠 AI/ML Engineer
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-semibold"
                style={{ background: 'rgba(13,21,41,0.95)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee', backdropFilter: 'blur(10px)' }}>
                🔬 4+ Projects
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 rounded-full"
          style={{ background: 'linear-gradient(to bottom, rgba(34,211,238,0.5), transparent)' }}
        />
      </motion.div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
