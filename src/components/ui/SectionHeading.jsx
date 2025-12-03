import StaggeredText from '../motion/StaggeredText'
import { useTheme } from '../../context/ThemeProvider'

export default function SectionHeading({ eyebrow, title, description }) {
  const { tokens } = useTheme()

  return (
    <div className="mb-12 space-y-5">
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase tracking-[0.6em]"
          style={{ color: tokens.eyebrow }}
        >
          {eyebrow}
        </p>
      )}
      <StaggeredText
        lines={title.split('|').map((line) => line.trim())}
        as="h2"
        className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
        style={{ color: tokens.textPrimary }}
      />
      {description && (
        <p className="text-lg lg:max-w-2xl" style={{ color: tokens.textSecondary }}>
          {description}
        </p>
      )}
    </div>
  )
}
