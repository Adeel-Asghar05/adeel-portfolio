// import React from 'react'
// import { motion } from 'framer-motion'

// const categories = [
//   {
//     title: 'Programming Languages',
//     icon: '💻',
//     color: '#22d3ee',
//     skills: ['Python', 'JavaScript', 'React.js'],
//   },
//   {
//     title: 'AI / ML Frameworks',
//     icon: '🧠',
//     color: '#818cf8',
//     skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', "Matplotlib"],
//   },
//   {
//     title: 'Computer Vision',
//     icon: '👁️',
//     color: '#34d399',
//     skills: ['YOLO', 'OpenCV', 'Object Detection', 'Semantic Segmentation', 'Grad-CAM'],
//   },
//   {
//     title: 'Deep RL',
//     icon: '🤖',
//     color: '#f472b6',
//     skills: ['DQN', 'PPO', 'Policy Gradient', 'Q-Learning', 'OpenAI Gym'],
//   },
//   {
//     title: 'Robotics & Simulation',
//     icon: '⚙️',
//     color: '#fb923c',
//     skills: ['PyBullet', 'URDF Modeling', 'Physics Simulation', 'Fusion 360', 'CAD Design'],
//   },
//   {
//     title: 'Deployment & MLOps',
//     icon: '🚀',
//     color: '#22d3ee',
//     skills: ['Linux', 'Git/GitHub', 'Docker', 'FastAPI', 'AWS (EC2, S3)', 'Jenkins'],
//   },
//   {
//     title: 'Tools & Platforms',
//     icon: '🛠️',
//     color: '#a78bfa',
//     skills: ['Roboflow', 'Kaggle', 'Google Colab', 'Jupyter', 'VS Code'],
//   },
//   {
//     title: 'Core Expertise',
//     icon: '⭐',
//     color: '#fbbf24',
//     skills: ['Model Training', 'Dataset Curation', 'Research Methodology', 'Technical Writing', 'Explainable AI'],
//   },
// ]

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
// })

// export default function Skills() {
//   return (
//     <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative"
//       style={{ background: '#0a0f1e' }}>

//       {/* Subtle grid overlay */}
//       <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative">
//         {/* Header */}
//         <motion.div {...fadeUp(0)} className="text-center mb-16">
//           <span className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-3 block">What I Work With</span>
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Technical <span className="text-gradient-cyan">Skills</span></h2>
//           <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }} />
//           <p className="text-slate-400 max-w-xl mx-auto">Comprehensive toolkit for building production-ready AI systems</p>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {categories.map((cat, i) => (
//             <motion.div
//               key={cat.title}
//               {...fadeUp(i * 0.07)}
//               className="group p-5 rounded-2xl card-hover relative overflow-hidden"
//               style={{
//                 background: 'linear-gradient(135deg, rgba(15,26,46,0.9) 0%, rgba(13,21,41,0.9) 100%)',
//                 border: '1px solid rgba(34,211,238,0.1)',
//               }}
//             >
//               {/* Color accent top bar */}
//               <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }} />

//               {/* Icon */}
//               <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
//                 style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}25` }}>
//                 {cat.icon}
//               </div>

//               <h3 className="text-white font-semibold text-sm mb-3">{cat.title}</h3>

//               <div className="flex flex-wrap gap-1.5">
//                 {cat.skills.map((skill) => (
//                   <span key={skill}
//                     className="px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 group-hover:border-[rgba(34,211,238,0.2)]"
//                     style={{
//                       background: 'rgba(255,255,255,0.04)',
//                       border: '1px solid rgba(255,255,255,0.07)',
//                       color: '#94a3b8',
//                     }}>
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom capabilities strip */}
//         <motion.div {...fadeUp(0.5)} className="mt-12 p-8 rounded-2xl"
//           style={{ background: 'linear-gradient(135deg, rgba(15,26,46,0.8) 0%, rgba(13,21,41,0.8) 100%)', border: '1px solid rgba(34,211,238,0.1)' }}>
//           <h3 className="text-white font-bold text-lg text-center mb-6">Research & Development Capabilities</h3>
//           <div className="grid sm:grid-cols-3 gap-6">
//             {[
//               { icon: '📊', title: 'Dataset Engineering', desc: 'Expert in curating, annotating, and preprocessing large-scale datasets for CV and healthcare AI' },
//               { icon: '🔬', title: 'Model Optimization', desc: 'Lightweight architectures, quantization, pruning, and edge deployment optimization' },
//               { icon: '📝', title: 'Academic Writing', desc: 'Research manuscript preparation, technical documentation, and scientific communication' },
//             ].map((cap) => (
//               <div key={cap.title} className="text-center p-5 rounded-xl"
//                 style={{ background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.08)' }}>
//                 <div className="text-3xl mb-3">{cap.icon}</div>
//                 <h4 className="text-white font-semibold text-sm mb-2">{cap.title}</h4>
//                 <p className="text-slate-400 text-xs leading-relaxed">{cap.desc}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Core ML & DL',
    icon: '🧠',
    color: '#22d3ee',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'NumPy', level: 95 },
      { name: 'Pandas', level: 90 },
    ],
  },
  {
    // title: 'Computer Vision',
    // icon: '👁️',
    // color: '#34d399',
    // skills: [
    //   { name: 'YOLO (v5-v8)', level: 95 },
      { name: 'OpenCV', level: 90 },
      { name: 'Object Detection', level: 90 },
      { name: 'Semantic Segmentation', level: 85 },
      { name: 'Grad-CAM', level: 85 },
    ],
  },
  {
    title: 'Deep RL',
    icon: '🤖',
    color: '#f472b6',
    skills: [
      { name: 'DQN', level: 90 },
      { name: 'PPO', level: 85 },
      { name: 'Policy Gradient', level: 85 },
      { name: 'Q-Learning', level: 85 },
      { name: 'OpenAI Gym', level: 90 },
    ],
  },
  {
    title: 'Robotics & Simulation',
    icon: '⚙️',
    color: '#fb923c',
    skills: [
      { name: 'PyBullet', level: 85 },
      { name: 'URDF Modeling', level: 85 },
      { name: 'Physics Simulation', level: 85 },
      { name: 'Fusion 360 CAD', level: 90 },
    ],
  },
  {
    title: 'MLOps & Deployment',
    icon: '🚀',
    color: '#818cf8',
    skills: [
      { name: 'Docker', level: 70 },
      { name: 'FastAPI', level: 75 },
      { name: 'Git/GitHub', level: 95 },
      { name: 'AWS (EC2, S3)', level: 75 },
      { name: 'Linux', level: 90 },
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    color: '#22d3ee',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 80 },
      { name: 'React.js', level: 75 },
    ],
  },
]



const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export default function Skills() {
  return (
    <section className="py-24 px-6" style={{ background: '#0a0f1e' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              {...fadeUp(i * 0.1)}
              className="p-6 rounded-xl"
              style={{ background: '#111827' }}
            >
              <h3 className="text-white text-lg mb-4">
                {cat.icon} {cat.title}
              </h3>

              {cat.skills.map((skill) => (
                <div key={skill.name} className="mb-3">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="h-2 bg-gray-700 rounded">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-2 rounded"
                      style={{ background: cat.color }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* ✅ Research & Development Capabilities */}
        <motion.div {...fadeUp(0.5)} className="mt-16">
          <h3 className="text-white text-2xl font-bold text-center mb-10">
            Research & Development Capabilities
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📊',
                title: 'Dataset Engineering',
                desc: 'Expert in curating, annotating, and preprocessing large-scale datasets for CV and healthcare AI',
              },
              {
                icon: '🔬',
                title: 'Model Optimization',
                desc: 'Lightweight architectures, quantization, pruning, and edge deployment optimization',
              },
              {
                icon: '📝',
                title: 'Academic Writing',
                desc: 'Research manuscript preparation, technical documentation, and scientific communication',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl text-center"
                style={{ background: '#111827' }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
