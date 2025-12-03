import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionShell from '../ui/SectionShell'
import SectionHeading from '../ui/SectionHeading'
import GlowCard from '../ui/GlowCard'
import MagneticButton from '../ui/MagneticButton'
import { gameShowcases } from '../../data/content'
import { motionPresets } from '../../lib/motionPresets'
import { useTheme } from '../../context/ThemeProvider'
import ProgressiveImage from '../ui/ProgressiveImage'

export default function Projects() {
  const { tokens } = useTheme()
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [lightboxImages, setLightboxImages] = useState([])

  return (
    <SectionShell id="game-projects">
      <SectionHeading
        eyebrow="Game Development"
        title="Cinematic | VR | Systems-Driven Builds"
        description="Flagship projects across Unreal and Unity with a focus on narrative, systems design, and resilient engineering."
      />
      <div className="space-y-10">
        {gameShowcases.map((project) => (
          <GlowCard key={project.id}>
            <motion.div
              className="space-y-6"
              initial={motionPresets.fadeSlideUp.hidden}
              whileInView={motionPresets.fadeSlideUp.visible}
              viewport={{ once: true, margin: '-10%' }}
            >
              <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
                <div className="space-y-4">
                  <div
                    className="relative overflow-hidden rounded-2xl border shadow-xl"
                    style={{ borderColor: tokens.cardBorder, background: tokens.cardBackground }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage:
                          'linear-gradient(transparent 92%, rgba(255,255,255,0.06) 92%), linear-gradient(90deg, transparent 92%, rgba(255,255,255,0.06) 92%)',
                        backgroundSize: '48px 48px',
                        opacity: 0.25,
                        mixBlendMode: 'screen',
                      }}
                    />
                    <motion.div
                      className="pointer-events-none absolute inset-0"
                      style={{ background: `radial-gradient(circle at 20% 20%, ${tokens.accentSoft}, transparent)` }}
                      animate={{ opacity: [0.15, 0.3, 0.15] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />
                    <AutoPlayVideo src={project.video} title={project.title} />
                  </div>
                  {project.images?.length ? (
                    <ImageCarousel
                      images={project.images}
                      tokens={tokens}
                      onSelect={(src) => {
                        setLightboxImages(project.images)
                        setLightboxSrc(src)
                      }}
                    />
                  ) : null}
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Tag tokens={tokens}>{project.role}</Tag>
                    {Number(project.team) !== 1 && <Tag tokens={tokens}>Team Size {project.team}</Tag>}
                    <Tag tokens={tokens}>{project.duration}</Tag>
                  </div>
                  <h3 className="text-3xl font-semibold" style={{ color: tokens.textPrimary }}>
                    {project.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: tokens.textSecondary }}>
                    {project.summary}
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed" style={{ color: tokens.textSecondary }}>
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span style={{ color: tokens.accent }}>-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {project.repo && (
                    <div className="flex items-center gap-3 pt-1">
                      <MagneticButton as="a" href={project.repo} target="_blank" rel="noreferrer">
                        GitHub Repo
                      </MagneticButton>
                      <div
                        className="h-px flex-1"
                        style={{ background: `linear-gradient(90deg, ${tokens.cardBorder}, transparent)` }}
                      />
                    </div>
                  )}
                  <SkillsGrid project={project} tokens={tokens} />
                </div>
              </div>
            </motion.div>
          </GlowCard>
        ))}
      </div>
      <Lightbox
        src={lightboxSrc}
        images={lightboxImages}
        onClose={(opts) => {
          if (opts && opts.nextSrc) {
            setLightboxSrc(opts.nextSrc)
            return
          }
          setLightboxSrc(null)
          setLightboxImages([])
        }}
        tokens={tokens}
      />
    </SectionShell>
  )
}

function AutoPlayVideo({ src, title }) {
  const iframeSrc = useMemo(() => {
    try {
      const url = new URL(src)
      url.searchParams.set('rel', '0')
      url.searchParams.set('controls', '1')
      url.searchParams.set('playsinline', '1')
      url.searchParams.set('mute', '1')
      url.searchParams.delete('autoplay')
      return url.toString()
    } catch {
      return src
    }
  }, [src])

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl">
      <iframe
        src={iframeSrc}
        title={title}
        className="h-full w-full"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

function MetaPanel({ project, tokens }) {
  const meta = deriveMeta(project)
  if (!meta.length) return null

  return (
    <div
      className="mt-2 grid grid-cols-2 gap-3 rounded-2xl border p-4 text-xs uppercase tracking-[0.25em]"
      style={{ borderColor: tokens.cardBorder, background: tokens.cardBackground }}
    >
      {meta.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <span style={{ color: tokens.eyebrow }}>{item.label}</span>
          <span className="text-sm font-semibold" style={{ color: tokens.textPrimary }}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}

function Tag({ children, tokens }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] shadow-lg"
      style={{
        color: tokens.accentContrast,
        background: tokens.buttonGradient,
        border: `1px solid ${tokens.buttonBorder}`,
        boxShadow: tokens.buttonShadow,
      }}
    >
      {children}
    </span>
  )
}

function SkillsGrid({ project, tokens }) {
  const skills = resolveSkills(project)
  if (!skills.length) return null

  return (
    <div
      className="mt-3 flex flex-wrap gap-2 rounded-2xl border p-3 text-xs uppercase tracking-[0.2em]"
      style={{ borderColor: tokens.cardBorder, background: tokens.cardBackground }}
    >
      {skills.map((skill) => (
        <div
          key={skill}
          className="rounded-xl px-3 py-2"
          style={{
            color: tokens.textPrimary,
            background: tokens.buttonSecondaryBg,
            border: `1px solid ${tokens.cardBorder}`,
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  )
}

function resolveSkills(project) {
  if (project.skillTags?.length) return project.skillTags.slice(0, 8)

  const source = `${project.title || ''} ${project.summary || ''} ${project.highlights?.join(' ') || ''}`.toLowerCase()
  const skills = []
  const push = (label, predicate) => {
    if (skills.includes(label)) return
    if (predicate(source)) skills.push(label)
  }

  push('Unity', (s) => s.includes('unity'))
  push('Unreal Engine', (s) => s.includes('unreal'))
  push('VR (Oculus, SteamVR)', (s) => s.includes('vr'))
  push('C#', (s) => s.includes('unity'))
  push('C++', (s) => s.includes('unreal'))
  push('UE5 Blueprints', (s) => s.includes('unreal') || s.includes('blueprint'))
  push('React', (s) => s.includes('web') || s.includes('react'))
  push('Node.js', (s) => s.includes('node') || s.includes('server'))
  push('Express.js', (s) => s.includes('express'))
  push('MongoDB', (s) => s.includes('mongo'))

  return skills.slice(0, 6)
}

function Lightbox({ src, images = [], onClose, tokens }) {
  if (!src) return null
  const hasMultiple = images.length > 1
  const activeIndex = hasMultiple ? images.indexOf(src) : -1

  const go = (delta) => {
    if (!hasMultiple) return
    const nextIndex = (activeIndex + delta + images.length) % images.length
    onClose?.({ keepOpen: true, nextSrc: images[nextIndex] })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      onClick={onClose}
      role="presentation"
    >
      <div className="relative max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()} role="presentation">
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-3 -top-3 rounded-full bg-black/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-black"
          style={{ border: `1px solid ${tokens.cardBorder}` }}
        >
          Close
        </button>
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                go(-1)
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-black"
              style={{ border: `1px solid ${tokens.cardBorder}` }}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                go(1)
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-black"
              style={{ border: `1px solid ${tokens.cardBorder}` }}
            >
              Next
            </button>
          </>
        )}
        <img
          src={src}
          alt="Expanded project still"
          className="max-h-[90vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
          loading="lazy"
        />
      </div>
    </div>
  )
}

function ImageCarousel({ images, tokens, onSelect }) {
  const [index, setIndex] = useState(0)
  const total = images.length
  const current = images[index] ?? images[0]
  const intervalMs = 5200

  if (!total) return null

  const go = (delta) => setIndex((prev) => (prev + delta + total) % total)

  useEffect(() => {
    if (total <= 1) return undefined
    const id = setInterval(() => setIndex((prev) => (prev + 1) % total), intervalMs)
    return () => clearInterval(id)
  }, [total])

  return (
    <div className="space-y-3">
      <div
        className="group relative overflow-hidden rounded-2xl"
        style={{ background: tokens.cardBackground, perspective: '1200px' }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(transparent 94%, rgba(255,255,255,0.05) 94%), linear-gradient(90deg, transparent 94%, rgba(255,255,255,0.05) 94%)',
            backgroundSize: '52px 52px',
            mixBlendMode: 'screen',
          }}
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${tokens.accent}, transparent)` }}
          animate={{ x: ['-30%', '130%'] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, scale: 0.9, rotateX: -18, rotateY: 8, filter: 'blur(10px)', y: 12 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, scale: 1.08, rotateX: 14, rotateY: -6, filter: 'blur(14px)', y: 14 }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
          >
            <motion.div
              key={`sweep-${current}`}
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(120deg, transparent 40%, ${tokens.accentSoft}, transparent 60%)`,
                mixBlendMode: 'screen',
              }}
              initial={{ x: '-120%', opacity: 0 }}
              animate={{ x: '120%', opacity: [0, 0.5, 0] }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            />
            <ProgressiveImage
              src={current}
              alt="Project still"
              className="aspect-[16/9] w-full"
              overlayClass="opacity-10 mix-blend-screen"
              imageClassName="object-contain p-4"
              radiusClass="rounded-2xl"
              bordered={false}
              onClick={() => onSelect?.(current)}
            />
          </motion.div>
        </AnimatePresence>
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white opacity-0 transition duration-300 hover:bg-black/70 group-hover:opacity-100"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white opacity-0 transition duration-300 hover:bg-black/70 group-hover:opacity-100"
            >
              Next
            </button>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="h-2.5 w-2.5 rounded-full transition"
              style={{
                background: i === index ? tokens.accent : tokens.cardBorder,
                boxShadow: i === index ? `0 0 12px ${tokens.accentSoft}` : 'none',
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
