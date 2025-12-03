import { motion } from 'framer-motion'
import useMagnetic from '../../hooks/useMagnetic'
import { hoverEffects, transitions } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'

const motionElements = {
  button: motion.button,
  a: motion.a,
  div: motion.div,
}

export default function MagneticButton({
  children,
  className = '',
  variant = 'primary',
  as = 'button',
  style,
  ...props
}) {
  const magnetic = useMagnetic(0.15)
  const { tokens } = useTheme()

  const baseStyles =
    'relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm uppercase tracking-[0.3em] transition-colors duration-500 focus:outline-none focus-visible:ring-2'

  const variantStyles = {
    primary: {
      backgroundImage: tokens.buttonGradient,
      color: tokens.accentContrast,
      borderColor: tokens.buttonBorder,
      boxShadow: tokens.buttonShadow,
    },
    secondary: {
      borderColor: tokens.buttonBorder,
      color: tokens.textPrimary,
      background: tokens.buttonSecondaryBg,
      boxShadow: 'none',
    },
    ghost: {
      color: tokens.textPrimary,
      borderColor: 'transparent',
      background: 'transparent',
      boxShadow: 'none',
    },
  }

  const classes = [baseStyles, className].filter(Boolean).join(' ')
  const MotionComponent = motionElements[as] ?? motion.button

  const combinedStyle = { x: magnetic.x, y: magnetic.y, ...variantStyles[variant], ...style }

  return (
    <MotionComponent
      {...props}
      className={classes}
      style={combinedStyle}
      whileHover={{ ...hoverEffects.button, boxShadow: tokens.buttonShadow }}
      whileTap={{ scale: 0.96 }}
      onMouseMove={magnetic.handleMouseMove}
      onMouseLeave={magnetic.handleMouseLeave}
      transition={transitions.short}
    >
      <span className="relative z-10 font-semibold">{children}</span>
      <span
        className="pointer-events-none absolute inset-0 rounded-full blur-2xl"
        style={{
          background: `linear-gradient(120deg, ${tokens.accentSoft}, transparent)`,
          opacity: variant === 'ghost' ? 0.2 : 0.5,
        }}
      />
    </MotionComponent>
  )
}
