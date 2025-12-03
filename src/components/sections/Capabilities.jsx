import GlowCard from '../ui/GlowCard'
import SectionHeading from '../ui/SectionHeading'
import SectionShell from '../ui/SectionShell'
import { featureHighlights } from '../../data/content'
import { useTheme } from '../../context/ThemeProvider'

export default function Capabilities() {
  const { tokens } = useTheme()

  return (
    <SectionShell id="capabilities">
      <SectionHeading eyebrow="What I Do" title="Capability Stack" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featureHighlights.map((item) => (
          <GlowCard key={item.title}>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em]" style={{ color: tokens.eyebrow }}>
                {item.title}
              </p>
              <p className="text-base leading-relaxed" style={{ color: tokens.textSecondary }}>
                {item.description}
              </p>
            </div>
          </GlowCard>
        ))}
      </div>
    </SectionShell>
  )
}
