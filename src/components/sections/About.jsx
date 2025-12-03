import SectionShell from '../ui/SectionShell'
import SectionHeading from '../ui/SectionHeading'
import GlowCard from '../ui/GlowCard'
import { heroContent, workExperience, educationList } from '../../data/content'
import { useTheme } from '../../context/ThemeProvider'

export default function About() {
  const { tokens } = useTheme()
  const [summaryTitle, ...summaryRest] = heroContent.summary

  return (
    <SectionShell id="about" className="relative">
      <div
        className="absolute inset-x-10 -top-24 h-64 rounded-full blur-3xl"
        style={{ background: `linear-gradient(180deg, ${tokens.accentSoft}, transparent)` }}
      />
      <div className="relative grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Professional Summary"
            title={summaryTitle}
            description={summaryRest.join(' ')}
          />
          <GlowCard>
            <p className="text-sm uppercase tracking-[0.4em]" style={{ color: tokens.eyebrow }}>
              Work experience
            </p>
            <p className="mt-4 text-2xl font-semibold" style={{ color: tokens.textPrimary }}>
              {workExperience.organization}
            </p>
            <p className="text-lg" style={{ color: tokens.textSecondary }}>
              {workExperience.role}
            </p>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: tokens.textMuted }}>
              {workExperience.dates}
            </p>
            <ul className="mt-6 space-y-2">
              {workExperience.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlowCard>
        </div>
        <div className="space-y-8 lg:pl-8">
          <GlowCard>
            <p className="text-xs uppercase tracking-[0.4em]" style={{ color: tokens.eyebrow }}>
              Education and Qualifications
            </p>
            <ul className="mt-4 space-y-4">
              {educationList.map((education) => (
                <li key={education.school}>
                  <p className="text-lg font-semibold" style={{ color: tokens.textPrimary }}>
                    {education.school}
                  </p>
                  <p>{education.credential}</p>
                  <p className="text-xs uppercase tracking-[0.3em]" style={{ color: tokens.textMuted }}>
                    {education.dates}
                  </p>
                </li>
              ))}
            </ul>
          </GlowCard>
        </div>
      </div>
    </SectionShell>
  )
}
