import { motion } from 'framer-motion'
import SectionShell from '../ui/SectionShell'
import SectionHeading from '../ui/SectionHeading'
import GlowCard from '../ui/GlowCard'
import { skillClusters } from '../../data/content'
import { motionPresets } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'

export default function Skills() {
  const { tokens } = useTheme()

  return (
    <SectionShell id="skills">
      <SectionHeading eyebrow="Technical Skills" title="Technical Skills" />
      <div className="grid gap-8 md:grid-cols-2">
        {skillClusters.map((cluster) => (
          <GlowCard key={cluster.title}>
            <motion.div
              className="flex h-full flex-col"
              initial={motionPresets.fadeSlideUp.hidden}
              whileInView={motionPresets.fadeSlideUp.visible}
              viewport={{ once: true, margin: '-10%' }}
            >
              <p className="text-sm uppercase tracking-[0.4em]" style={{ color: tokens.eyebrow }}>
                {cluster.title}
              </p>
              <p className="mt-4 text-xl font-semibold" style={{ color: tokens.textPrimary }}>
                {cluster.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {cluster.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em]"
                    style={{
                      border: `1px solid ${tokens.chipBorder}`,
                      color: tokens.textSecondary,
                      background: tokens.chipBackground,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </GlowCard>
        ))}
      </div>
    </SectionShell>
  )
}
