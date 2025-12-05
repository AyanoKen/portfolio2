import { motion } from 'framer-motion'
import { transitions } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'

const orbConfig = [
  { size: 'w-[34rem] h-[34rem]', left: '-8%', top: '-18%' },
]

const streamConfig = [
  { left: '20%', duration: 36, delay: 0 },
  { left: '60%', duration: 40, delay: 2.5 },
]

const circuitNodes = [
  { top: '30%', left: '22%' },
  { top: '68%', left: '55%' },
]

export default function AmbientBackground() {
  const { tokens } = useTheme()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* subtle animated base gradient */}
      <motion.div
        className="absolute inset-0"
        style={{ background: tokens.backgroundGradient }}
        animate={{ opacity: [0.95, 1, 0.95] }}
        transition={{ duration: 36, repeat: Infinity }}
      />

      {/* soft drifting orbs (reduced blur + slower) */}
      {orbConfig.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          className={`absolute ${orb.size} rounded-full`}
          style={{
            left: orb.left,
            right: orb.right,
            top: orb.top,
            bottom: orb.bottom,
            background: tokens.ambientPrimary,
            filter: 'blur(100px)', // milder blur
            opacity: 0.6,
          }}
          animate={{
            y: [-20, 12, -20],
            x: [0, index % 2 === 0 ? 18 : -18, 0],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{ duration: 40 + index * 8, repeat: Infinity }}
        />
      ))}

      {/* long, slow vertical streams (reduced count + slower) */}
      {streamConfig.map((stream, index) => (
        <motion.div
          key={`stream-${index}`}
          className="absolute h-[160%] w-[1px]"
          style={{
            left: stream.left,
            top: '-30%',
            background: `linear-gradient(180deg, transparent, ${tokens.ambientLine}, transparent)`,
            opacity: 0.5,
            transformOrigin: 'center',
          }}
          animate={{ y: ['-18%', '18%'] }}
          transition={{ duration: stream.duration, repeat: Infinity, delay: stream.delay }}
        />
      ))}

      {/* fewer, softer circuit nodes */}
      {circuitNodes.map((node, index) => (
        <motion.div
          key={`node-${index}`}
          className="absolute h-10 w-10 rounded-full"
          style={{
            top: node.top,
            left: node.left,
            background: tokens.accentGlow,
            filter: 'blur(10px)',
            opacity: 0.28,
          }}
          animate={{ opacity: [0.18, 0.6, 0.18], scale: [0.9, 1.08, 0.9] }}
          transition={{ duration: 20 + index * 6, repeat: Infinity }}
        />
      ))}

      {/* grid texture — larger spacing and lower opacity */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(transparent 92%, rgba(255,255,255,0.03) 92%), linear-gradient(90deg, transparent 92%, rgba(255,255,255,0.03) 92%)',
          backgroundSize: '140px 140px', // bigger spacing -> less busy
          mixBlendMode: 'screen',
          opacity: 0.12,
        }}
        animate={{ opacity: [0.12, 0.16, 0.12] }}
        transition={{ duration: 28, repeat: Infinity }}
      />

      {/* subtle bottom vignette */}
      <motion.div
        className="absolute inset-x-0 -bottom-32 h-64"
        style={{ background: `linear-gradient(0deg, ${tokens.background}, transparent)` }}
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 28, repeat: Infinity }}
      />

      {/* gentle overall vignette / color balance */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(3,5,12,0.92), rgba(1,2,6,0.98))',
          mixBlendMode: 'screen',
          opacity: 0.7,
        }}
      />
    </div>
  )

}
