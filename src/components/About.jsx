import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '4+', label: 'AI Projects' },
  { value: '2',  label: 'Publications' },
  { value: '3',  label: 'Datasets' },
  // { value: '3.6',label: 'CGPA' },
  // {value: 'Remote', label: 'Location'}
]

const focuses = [
  {
    icon: '👁️',
    title: 'Computer Vision',
    desc: 'Real-time object detection, medical image analysis and semantic segmentation using YOLO architectures and OpenCV.',
  },
  {
    icon: '🤖',
    title: 'Deep Reinforcement Learning',
    desc: 'Autonomous agent training with DQN and PPO for robotics navigation and complex decision-making tasks.',
  },
  {
    icon: '⚙️',
    title: 'Robotics Simulation',
    desc: 'URDF-based modeling, PyBullet physics simulation, and Fusion 360 CAD design for robotic systems.',
  },
  {
    icon: '🏥',
    title: 'Healthcare AI',
    desc: 'Clinical diagnostic models with explainability (Grad-CAM) for conjunctivitis detection and autism screening.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1529 100%)' }}>

      {/* BG accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-3 block">Get to Know Me</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About <span className="text-gradient-cyan">Me</span></h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text column */}
          <div className="space-y-6">
            {[
              <>I'm a <span className="text-white font-semibold">Machine Learning Engineer and AI Researcher</span> specializing in developing <span className="text-[#22d3ee] font-semibold">lightweight, interpretable, and deployable AI systems</span> for real-world applications. My research bridges cutting-edge deep learning theory with practical implementation in resource-constrained environments.</>,
              <>My expertise spans <span className="text-white font-semibold">Computer Vision</span> with YOLO-based real-time object detection, <span className="text-white font-semibold">Deep Reinforcement Learning</span> (DQN, PPO) for autonomous systems, and <span className="text-white font-semibold">Healthcare AI</span> for clinical diagnostic support. I design end-to-end ML pipelines from dataset curation to model deployment.</>,
              <>Currently advancing <span className="text-white font-semibold">robotics simulation</span> through URDF modeling and PyBullet physics engines, alongside CAD-based robot design in Fusion 360. My work emphasizes explainability, model optimization, and creating AI frameworks validated through clinical and academic collaborations.</>,
            ].map((text, i) => (
              <motion.p key={i} {...fadeUp(0.15 + i * 0.1)} className="text-slate-400 text-base leading-relaxed">
                {text}
              </motion.p>
            ))}

            {/* Stats grid */}
            <motion.div {...fadeUp(0.45)} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl card-hover"
                  style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.12)' }}>
                  <div className="text-3xl font-extrabold text-gradient-cyan mb-1">{s.value}</div>
                  <div className="text-xs text-slate-400 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Focus areas */}
          <div className="grid sm:grid-cols-2 gap-4">
            {focuses.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(0.2 + i * 0.1)}
                className="p-5 rounded-2xl card-hover"
                style={{ background: 'linear-gradient(135deg, rgba(15,26,46,0.8) 0%, rgba(17,24,39,0.8) 100%)', border: '1px solid rgba(34,211,238,0.1)' }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h4 className="text-white font-semibold mb-2 text-sm">{f.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
