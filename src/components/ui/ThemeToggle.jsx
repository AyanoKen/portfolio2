import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeProvider'
import { transitions } from '../../lib/motionPresets'

const themes = [
  { label: 'Tron Legacy', value: 'legacy' },
  { label: 'Tron Ares', value: 'ares' },
]

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, tokens } = useTheme()
  const activeIndex = theme === 'legacy' ? 0 : 1

  return (
    <div className={`pointer-events-auto ${className}`}>
      <motion.button
        type="button"
        onClick={toggleTheme}
        className="relative flex w-[300px] items-center justify-between rounded-full px-2 py-2 text-xs font-semibold uppercase tracking-[0.35em] backdrop-blur-2xl"
        style={{
          border: `1px solid ${tokens.buttonBorder}`,
          background: 'rgba(0,0,0,0.45)',
          color: tokens.textPrimary,
          boxShadow: tokens.buttonShadow,
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={transitions.short}
      >
        <motion.div
          className="absolute inset-y-1 rounded-full"
          style={{
            width: 'calc(50% - 0.65rem)',
            left: '0.4rem',
            boxShadow: tokens.buttonShadow,
          }}
          initial={{ x: `${activeIndex * 100}%` }}
          animate={{
            x: `${activeIndex * 100}%`,
            background: tokens.buttonGradient,
          }}
          transition={transitions.default}
        />
        <div className="relative z-10 flex w-full gap-3 px-1">
          {themes.map((option) => (
            <motion.span
              key={option.value}
              className="flex-1 text-center"
              animate={{
                color: option.value === theme ? tokens.accentContrast : tokens.textSecondary,
              }}
              transition={transitions.short}
            >
              {option.label}
            </motion.span>
          ))}
        </div>
      </motion.button>
    </div>
  )
}
