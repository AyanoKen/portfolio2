import { motion } from 'framer-motion'
import { transitions } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'

const orbConfig = [
  { size: 'w-[38rem] h-[38rem]', left: '-10%', top: '-20%' },
  { size: 'w-[30rem] h-[30rem]', right: '-12%', top: '8%' },
  { size: 'w-[35rem] h-[35rem]', left: '24%', bottom: '-18%' },
]

const streamConfig = [
  { left: '15%', duration: 18, delay: 0 },
  { left: '45%', duration: 16, delay: 2.5 },
  { left: '75%', duration: 20, delay: 1.2 },
]

const circuitNodes = [
  { top: '20%', left: '20%' },
  { top: '35%', left: '65%' },
  { top: '60%', left: '30%' },
  { top: '75%', left: '70%' },
]

export default function AmbientBackground() {
  const { tokens } = useTheme()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ background: tokens.backgroundGradient }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      {orbConfig.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          className={`absolute ${orb.size} rounded-full blur-[140px]`}
          style={{ left: orb.left, right: orb.right, top: orb.top, bottom: orb.bottom, background: tokens.ambientPrimary }}
          animate={{ y: [-30, 20, -30], x: [0, index % 2 === 0 ? 25 : -25, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 24 + index * 4, repeat: Infinity }}
        />
      ))}
      {streamConfig.map((stream, index) => (
        <motion.div
          key={`stream-${index}`}
          className="absolute h-[160%] w-px"
          style={{
            left: stream.left,
            top: '-30%',
            background: `linear-gradient(180deg, transparent, ${tokens.ambientLine}, transparent)`,
          }}
          animate={{ y: ['-20%', '20%'] }}
          transition={{ duration: stream.duration, repeat: Infinity, delay: stream.delay }}
        />
      ))}
      {circuitNodes.map((node, index) => (
        <motion.div
          key={`node-${index}`}
          className="absolute h-12 w-12 rounded-full blur-3xl"
          style={{ top: node.top, left: node.left, background: tokens.accentGlow }}
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 10 + index * 2, repeat: Infinity }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(transparent 92%, rgba(255,255,255,0.04) 92%), linear-gradient(90deg, transparent 92%, rgba(255,255,255,0.04) 92%)',
          backgroundSize: '60px 60px',
          mixBlendMode: 'screen',
        }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-x-0 -bottom-32 h-64"
        style={{ background: `linear-gradient(0deg, ${tokens.background}, transparent)` }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(3,5,12,0.92), rgba(1,2,6,0.98))',
          mixBlendMode: 'screen',
          opacity: 0.8,
        }}
      />
    </div>
  )
}
