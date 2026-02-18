import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
})

const courses = ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Structures & Algorithms', 'Artificial Intelligence', 'Database Systems', 'Software Engineering', 'Linear Algebra']

const achievements = [
  'Specialized in Artificial Intelligence and Machine Learning',
  'Completed capstone project on deep learning for healthcare diagnostics',
  'Published research work in medical AI during undergraduate studies',
  'Active member of university AI research laboratory',
  'Collaborated with international institutions on joint AI research',
  'Graduated with distinction in Computer Science',
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: '#0a0f1e' }}>

      <div className="absolute bottom-0 right-1/4 w-80 h-80 opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #34d399 0%, transparent 70%)' }} />

      <div className="max-w-4xl mx-auto relative">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-3 block">Academic Background</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4"><span className="text-gradient-cyan">Education</span></h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }} />
        </motion.div>

        <motion.div {...fadeUp(0.15)}
          className="p-8 rounded-2xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(15,26,46,0.95) 0%, rgba(13,21,41,0.95) 100%)',
            border: '1px solid rgba(34,211,238,0.15)',
          }}>

          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }} />
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #22d3ee, transparent)' }} />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)' }}>
                <svg className="w-8 h-8" fill="none" stroke="#22d3ee" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-gradient-cyan font-extrabold text-2xl leading-tight">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-white font-semibold mt-1">Islamia University of Bahawalpur</p>
                <p className="text-slate-400 text-sm mt-0.5">Bahawalpur, Pakistan</p>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
              <span className="text-sm font-medium px-4 py-2 rounded-full"
                style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.25)' }}>
                Aug 2022 – June 2026
              </span>
              {/* <span className="text-sm font-bold px-4 py-2 rounded-full text-[#0a0f1e]"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #0891b2)' }}>
                CGPA: 3.6 / 4.0
              </span> */}
            </div>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee' }}>✓</span>
                Key Achievements
              </h4>
              <div className="space-y-3">
                {achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#22d3ee', boxShadow: '0 0 6px #22d3ee' }} />
                    <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coursework */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee' }}>📚</span>
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {courses.map((c) => (
                  <span key={c}
                    className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
                    style={{ background: 'rgba(34,211,238,0.07)', color: '#67e8f9', border: '1px solid rgba(34,211,238,0.15)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(34,211,238,0.15)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(34,211,238,0.07)' }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
