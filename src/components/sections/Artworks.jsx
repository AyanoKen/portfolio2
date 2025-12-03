import GlowCard from '../ui/GlowCard'
import SectionHeading from '../ui/SectionHeading'
import SectionShell from '../ui/SectionShell'
import ProgressiveImage from '../ui/ProgressiveImage'
import { artworks } from '../../data/content'
import { useTheme } from '../../context/ThemeProvider'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Artworks() {
  const { tokens } = useTheme()
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <SectionShell id="artworks">
        <SectionHeading
          eyebrow="3D Artwork"
          title="3D Artwork | Visual Studies"
          description="Selected renders and sculpts from personal explorations in lighting, form, and atmosphere."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((piece) => (
            <GlowCard key={piece.title}>
              <div className="space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={piece.image}
                    className="relative"
                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                    initial={{ opacity: 0, scale: 0.9, rotateX: -16, rotateY: 6, filter: 'blur(10px)', y: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, filter: 'blur(0px)', y: 0 }}
                    exit={{ opacity: 0, scale: 1.08, rotateX: 12, rotateY: -6, filter: 'blur(14px)', y: 10 }}
                    transition={{ duration: 0.65, ease: [0.77, 0, 0.18, 1] }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage:
                          'linear-gradient(transparent 94%, rgba(255,255,255,0.05) 94%), linear-gradient(90deg, transparent 94%, rgba(255,255,255,0.05) 94%)',
                        backgroundSize: '52px 52px',
                        mixBlendMode: 'screen',
                        borderRadius: '16px',
                      }}
                    />
                    <motion.div
                      key={`art-sweep-${piece.image}`}
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: 'linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.3), transparent 65%)',
                        mixBlendMode: 'screen',
                        borderRadius: '16px',
                      }}
                      initial={{ x: '-120%', opacity: 0 }}
                      animate={{ x: '120%', opacity: [0, 0.45, 0] }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                    <ProgressiveImage
                      src={piece.image}
                      alt={piece.title}
                      className="h-56 w-full rounded-2xl border"
                      overlayClass="opacity-20 mix-blend-screen"
                      onClick={() =>
                        setLightbox({
                          src: piece.image,
                          title: piece.title,
                          media: piece.media,
                        })
                      }
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="space-y-1 px-1">
                  <p className="text-xs uppercase tracking-[0.35em]" style={{ color: tokens.eyebrow }}>
                    {piece.media}
                  </p>
                  <h3 className="text-lg font-semibold" style={{ color: tokens.textPrimary }}>
                    {piece.title}
                  </h3>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </SectionShell>
      <ArtLightbox lightbox={lightbox} onClose={() => setLightbox(null)} tokens={tokens} />
    </>
  )
}

function ArtLightbox({ lightbox, onClose, tokens }) {
  if (!lightbox) return null
  const { src, title, media } = lightbox

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
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
        <img
          src={src}
          alt={title}
          className="max-h-[90vh] max-w-5xl rounded-2xl object-contain shadow-2xl"
          loading="lazy"
        />
        <div className="mt-3 text-center text-sm uppercase tracking-[0.3em]" style={{ color: tokens.textSecondary }}>
          {media} • {title}
        </div>
      </div>
    </div>
  )
}
