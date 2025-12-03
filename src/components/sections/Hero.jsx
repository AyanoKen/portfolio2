import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionShell from '../ui/SectionShell'
import MagneticButton from '../ui/MagneticButton'
import GlowCard from '../ui/GlowCard'
import ProgressiveImage from '../ui/ProgressiveImage'
import StaggeredText from '../motion/StaggeredText'
import { heroContent, heroStats, educationList } from '../../data/content'
import { staggerConfig, transitions } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'

const buttonContainer = {
  hidden: {},
  visible: { transition: { ...staggerConfig } },
}

const buttonItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitions.default },
}

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -160])
  const midgroundY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const { tokens } = useTheme()

  return (
    <SectionShell id="hero" className="relative min-h-screen pt-32">
      <div ref={heroRef} className="relative flex flex-col gap-16 lg:flex-row">
        <div className="relative z-10 flex-1 space-y-10">
          <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: tokens.textMuted }}>
            {heroContent.titles.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <div className="space-y-8">
            <StaggeredText
              lines={[heroContent.name]}
              as="h1"
              className="text-5xl font-semibold uppercase leading-[1.1] sm:text-6xl lg:text-7xl"
              style={{ color: tokens.textPrimary }}
            />
            <p className="text-sm font-semibold uppercase tracking-[0.5em]" style={{ color: tokens.textMuted }}>
              {heroContent.titles.join(' | ')}
            </p>
            <div className="max-w-2xl space-y-4 text-lg lg:text-xl" style={{ color: tokens.textSecondary }}>
              {heroContent.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <motion.div className="flex flex-wrap gap-4" variants={buttonContainer} initial="hidden" animate="visible">
            {heroContent.actions.map((action) => (
              <motion.div key={action.label} variants={buttonItem}>
                <MagneticButton as="a" href={action.href} variant={action.variant ?? 'primary'}>
                  {action.label}
                </MagneticButton>
              </motion.div>
            ))}
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <GlowCard key={stat.label}>
                <p className="text-xs uppercase tracking-[0.4em]" style={{ color: tokens.eyebrow }}>
                  {stat.label}
                </p>
                <p className="mt-4 text-4xl font-bold" style={{ color: tokens.textPrimary }}>
                  {stat.value}
                </p>
                <p className="mt-3 text-sm" style={{ color: tokens.textMuted }}>
                  {stat.detail}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
        <div className="relative flex-1">
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[40px] border"
            style={{ y: backgroundY, borderColor: tokens.cardBorder }}
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ ...transitions.long, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              y: backgroundY,
              backgroundImage: `linear-gradient(transparent 92%, ${tokens.accentSoft} 92%), linear-gradient(90deg, transparent 92%, ${tokens.accentSoft} 92%)`,
              backgroundSize: '48px 48px',
              opacity: 0.35,
            }}
          />
          <motion.div
            className="pointer-events-none absolute -inset-10 rounded-[40px] blur-3xl"
            style={{ y: midgroundY, background: `linear-gradient(135deg, ${tokens.accentSoft}, transparent)` }}
          />
          <motion.div
            className="pointer-events-none absolute left-10 top-6 h-32 w-32 rounded-full blur-2xl"
            style={{ y: backgroundY, background: tokens.accentGlow }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ ...transitions.long, repeat: Infinity }}
          />
          <ProgressiveImage
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80&sat=-100"
            alt={heroContent.name}
            className="h-[28rem]"
          />
          <motion.div
            className="absolute inset-x-8 bottom-8 rounded-2xl border p-6 text-sm backdrop-blur-2xl"
            style={{
              y: midgroundY,
              borderColor: tokens.cardBorder,
              background: tokens.cardBackground,
              color: tokens.textPrimary,
            }}
          >
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: tokens.eyebrow }}>
              Education and Qualifications
            </p>
            <ul className="mt-4 space-y-4" style={{ color: tokens.textSecondary }}>
              {educationList.map((education) => (
                <li key={education.school}>
                  <p className="text-sm font-semibold" style={{ color: tokens.textPrimary }}>
                    {education.school}
                  </p>
                  <p>{education.credential}</p>
                  <p className="text-xs uppercase tracking-[0.3em]" style={{ color: tokens.textMuted }}>
                    {education.dates}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  )
}

