import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import { motionPresets, transitions } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'

export default function ProgressiveImage({
  src,
  alt,
  className = '',
  overlayClass = '',
  imageClassName = '',
  radiusClass = 'rounded-[32px]',
  bordered = true,
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const controls = useAnimation()
  const { tokens } = useTheme()

  useEffect(() => {
    if (loaded) {
      controls.start('visible')
    }
  }, [controls, loaded])

  return (
    <motion.div
      className={`group relative overflow-hidden ${radiusClass} ${bordered ? 'border' : ''} ${className}`}
      style={{ borderColor: bordered ? tokens.cardBorder : undefined, background: tokens.cardBackground }}
      initial="hidden"
      animate={controls}
      variants={motionPresets.imageReveal}
    >
      <motion.img
        {...props}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover object-center ${imageClassName}`}
        onLoad={() => setLoaded(true)}
        transition={transitions.default}
      />
      <div
        className={`pointer-events-none absolute inset-0 blur-3xl ${overlayClass}`}
        style={{
          background: `linear-gradient(140deg, ${tokens.accentGlow}, transparent)`,
          opacity: 0.2,
          mixBlendMode: 'screen',
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-60"
        style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.35), transparent)` }}
      />
    </motion.div>
  )
}
