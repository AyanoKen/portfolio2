import { motion } from 'framer-motion'
import SectionShell from '../ui/SectionShell'
import GlowCard from '../ui/GlowCard'
import SectionHeading from '../ui/SectionHeading'
import { contactDetails } from '../../data/content'
import { motionPresets } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'

export default function Contact() {
  const { tokens } = useTheme()

  return (
    <SectionShell id="contact" className="pb-32">
      <GlowCard>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Kireet Gannavarapu"
            title="Game Developer|Game Designer|Game AI Engineer|SDET"
            description="+1(765)4098813 | Kireet.gannavarapu@gmail.com | GitHub "
          />
          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial={motionPresets.fadeSlideUp.hidden}
            whileInView={motionPresets.fadeSlideUp.visible}
            viewport={{ once: true, margin: '-20%' }}
          >
            {contactDetails.map((detail) =>
              detail.href ? (
                <a
                  key={detail.text}
                  href={detail.href}
                  target="_blank"
                  className="rounded-2xl border p-4"
                  style={{ borderColor: tokens.cardBorder, color: tokens.textPrimary }}
                >
                  <p className="text-xl font-semibold">{detail.text}</p>
                </a>
              ) : (
                <div
                  key={detail.text}
                  className="rounded-2xl border p-4"
                  style={{ borderColor: tokens.cardBorder, color: tokens.textPrimary }}
                >
                  <p className="text-xl font-semibold">{detail.text}</p>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </GlowCard>
    </SectionShell>
  )
}
