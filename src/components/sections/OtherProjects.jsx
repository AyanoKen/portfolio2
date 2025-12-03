import { motion } from 'framer-motion'
import GlowCard from '../ui/GlowCard'
import SectionHeading from '../ui/SectionHeading'
import SectionShell from '../ui/SectionShell'
import MagneticButton from '../ui/MagneticButton'
import { otherProjects } from '../../data/content'
import { motionPresets } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'

export default function OtherProjects() {
  const { tokens } = useTheme()

  return (
    <SectionShell id="other-projects">
      <SectionHeading
        eyebrow="AI & Web"
        title="AI Projects | Web & Tools"
        description="Broader engineering work that powers research, backend, UX studies, and utility builds."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project) => (
          <GlowCard key={project.title}>
            <motion.div
              className="flex h-full flex-col gap-4"
              initial={motionPresets.fadeSlideUp.hidden}
              whileInView={motionPresets.fadeSlideUp.visible}
              viewport={{ once: true, margin: '-15%' }}
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em]" style={{ color: tokens.eyebrow }}>
                  {project.category ?? 'Project'}
                </p>
                <h3 className="text-xl font-semibold" style={{ color: tokens.textPrimary }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: tokens.textSecondary }}>
                  {project.description}
                </p>
              </div>
              {project.repo && (
                <div className="mt-auto">
                  <MagneticButton as="a" href={project.repo} target="_blank" rel="noreferrer" variant="secondary">
                    View Source
                  </MagneticButton>
                </div>
              )}
            </motion.div>
          </GlowCard>
        ))}
      </div>
    </SectionShell>
  )
}
