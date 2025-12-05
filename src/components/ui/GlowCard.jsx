import { motion } from 'framer-motion'
import { hoverEffects, transitions } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'

export default function GlowCard({ children, className = '', ...props }) {
  const { tokens } = useTheme()

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-3xl border p-px ${className}`}
      whileHover={{ ...hoverEffects.card, boxShadow: tokens.cardGlow }}
      transition={transitions.default}
      style={{ borderColor: tokens.cardBorder, background: tokens.cardBackground }}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(255,255,255,0.05), transparent 40%, rgba(255,255,255,0.05) 60%, transparent)',
          opacity: 0.35,
          mixBlendMode: 'screen',
        }}
      />
      <div
        className="pointer-events-none absolute inset-4 rounded-[26px] border border-white/5"
        style={{ boxShadow: `0 0 24px ${tokens.cardBorder}` }}
      />
      <div
        className="relative h-full rounded-3xl p-6 lg:p-8"
        style={{ backgroundImage: tokens.cardInner, color: tokens.textSecondary }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
          // style={{ background: `radial-gradient(circle, ${tokens.accentGlow}, transparent 60%)` }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </motion.article>
  )
}
