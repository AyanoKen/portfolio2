import { useState, useMemo, useEffect, useRef } from 'react'
import SectionShell from '../components/ui/SectionShell'
import SectionHeading from '../components/ui/SectionHeading'
import GlowCard from '../components/ui/GlowCard'
import MagneticButton from '../components/ui/MagneticButton'
import { novelsPage, novels } from '../data/content'
import { useTheme } from '../context/ThemeProvider'

const STORAGE_KEYS = {
  progress: 'novel-progress',
  bookmarks: 'novel-bookmarks',
}

const buildPreview = (novel) => {
  const firstChapter = novel.chapters?.[0]
  if (!firstChapter) return ''
  const lines = firstChapter.body
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
  return lines.slice(0, 4).join(' ')
}

export default function NovelsPage() {
  const { tokens } = useTheme()
  const [activeNovelId, setActiveNovelId] = useState(null)
  const [activeChapterId, setActiveChapterId] = useState(null)
  const [readerProgress, setReaderProgress] = useState(0)
  const [completedChapters, setCompletedChapters] = useState({})
  const [bookmarks, setBookmarks] = useState({})
  const [pendingBookmarkScroll, setPendingBookmarkScroll] = useState(null)
  const [bookmarkFlash, setBookmarkFlash] = useState(false)
  const readerRef = useRef(null)
  const suppressCompletionRef = useRef(false)
  const resumeIntentRef = useRef(null)
  const bookmarkFlashTimeoutRef = useRef(null)

  const activeNovel = useMemo(() => novels.find((novel) => novel.id === activeNovelId) ?? null, [activeNovelId])
  const activeChapter = useMemo(
    () => activeNovel?.chapters.find((chapter) => chapter.id === activeChapterId) ?? null,
    [activeNovel, activeChapterId],
  )

  useEffect(() => {
    const storedProgress = safeParse(localStorage.getItem(STORAGE_KEYS.progress)) ?? {}
    setCompletedChapters(storedProgress)
    const storedBookmarks = safeParse(localStorage.getItem(STORAGE_KEYS.bookmarks)) ?? {}
    setBookmarks(storedBookmarks)
  }, [])

  useEffect(() => {
    if (activeNovel?.chapters?.length) {
      suppressCompletionRef.current = true
      const resumeEntry = resumeIntentRef.current
      if (resumeEntry) {
        setActiveChapterId(resumeEntry.chapterId)
        setPendingBookmarkScroll(resumeEntry.ratio ?? 0)
      } else {
        setActiveChapterId(activeNovel.chapters[0].id)
        setPendingBookmarkScroll(0)
      }
      setReaderProgress(0)
      resumeIntentRef.current = null
    } else {
      suppressCompletionRef.current = true
      setActiveChapterId(null)
      setReaderProgress(0)
    }
  }, [activeNovel])

  useEffect(() => {
    const el = readerRef.current
    if (!el) return
    const handleScroll = () => {
      if (!readerRef.current) return
      const { scrollTop, scrollHeight, clientHeight } = readerRef.current
      const denominator = Math.max(scrollHeight - clientHeight, 1)
      const nearBottomThreshold = Math.max(4, clientHeight * 0.02)
      const viewportBottom = scrollTop + clientHeight
      const isNearBottom = viewportBottom >= scrollHeight - nearBottomThreshold
      const isScrollable = scrollHeight - clientHeight > 1
      const percent = isNearBottom
        ? 1
        : Math.min(1, Math.max(0, scrollTop / denominator))
      setReaderProgress(percent)
      if (suppressCompletionRef.current && (!isScrollable || scrollTop > 0)) {
        suppressCompletionRef.current = false
      }
    }
    handleScroll()
    el.addEventListener('scroll', handleScroll)
    return () => {
      el.removeEventListener('scroll', handleScroll)
    }
  }, [activeChapter])

  useEffect(() => {
    if (readerRef.current) {
      readerRef.current.scrollTo({ top: 0, behavior: 'auto' })
    }
    setReaderProgress(0)
  }, [activeChapterId])

  useEffect(() => {
    if (pendingBookmarkScroll == null || !readerRef.current) return
    const el = readerRef.current
    const { scrollHeight, clientHeight } = el
    const denominator = Math.max(scrollHeight - clientHeight, 1)
    el.scrollTo({ top: pendingBookmarkScroll * denominator, behavior: 'auto' })
    setPendingBookmarkScroll(null)
  }, [pendingBookmarkScroll, activeChapterId])

  useEffect(() => {
    if (!suppressCompletionRef.current) return
    if (readerProgress <= 0.01) {
      suppressCompletionRef.current = false
    }
  }, [readerProgress])

  useEffect(() => {
    if (suppressCompletionRef.current) return
    if (readerProgress < 0.99 || !activeNovelId || !activeChapterId) return
    setCompletedChapters((prev) => {
      const novelProgress = new Set(prev[activeNovelId] ?? [])
      if (novelProgress.has(activeChapterId)) return prev
      novelProgress.add(activeChapterId)
      const updated = { ...prev, [activeNovelId]: Array.from(novelProgress) }
      localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(updated))
      return updated
    })
  }, [readerProgress, activeNovelId, activeChapterId])

  useEffect(
    () => () => {
      if (bookmarkFlashTimeoutRef.current) {
        clearTimeout(bookmarkFlashTimeoutRef.current)
      }
    },
    [],
  )

  const toggleBookmark = () => {
    if (!activeNovelId || !activeChapterId) return
    const currentEntry = bookmarks[activeNovelId]
    const isSameChapter = currentEntry?.chapterId === activeChapterId

    if (isSameChapter) {
      const updated = { ...bookmarks }
      delete updated[activeNovelId]
      setBookmarks(updated)
      localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify(updated))
      if (bookmarkFlashTimeoutRef.current) {
        clearTimeout(bookmarkFlashTimeoutRef.current)
      }
      setBookmarkFlash(false)
      return
    }

    if (!readerRef.current) return
    const { scrollTop, scrollHeight, clientHeight } = readerRef.current
    const denominator = Math.max(scrollHeight - clientHeight, 1)
    const ratio = Math.min(1, scrollTop / denominator)
    const updated = { ...bookmarks, [activeNovelId]: { chapterId: activeChapterId, ratio } }
    setBookmarks(updated)
    localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify(updated))
    setBookmarkFlash(true)
    if (bookmarkFlashTimeoutRef.current) {
      clearTimeout(bookmarkFlashTimeoutRef.current)
    }
    bookmarkFlashTimeoutRef.current = setTimeout(() => setBookmarkFlash(false), 600)
  }

  const resumeBookmark = () => {
    if (!activeNovelId) return
    const entry = bookmarks[activeNovelId]
    if (!entry) return
    setActiveChapterId(entry.chapterId)
    setPendingBookmarkScroll(entry.ratio ?? 0)
  }

  const bookmarkEntry = activeNovelId ? bookmarks[activeNovelId] : null
  const isChapterCompleted =
    activeNovelId && activeChapterId ? (completedChapters[activeNovelId] ?? []).includes(activeChapterId) : false
  const isBookmarkActive = bookmarkEntry?.chapterId === activeChapterId
  const bookmarkButtonLabel = isBookmarkActive ? 'Remove bookmark' : 'Save bookmark'

  const handleOpenNovel = (novelId, { resumeBookmark: resume } = {}) => {
    suppressCompletionRef.current = true
    setReaderProgress(0)
    if (bookmarkFlashTimeoutRef.current) {
      clearTimeout(bookmarkFlashTimeoutRef.current)
    }
    setBookmarkFlash(false)
    if (resume && bookmarks[novelId]) {
      resumeIntentRef.current = bookmarks[novelId]
    } else {
      resumeIntentRef.current = null
    }
    setActiveNovelId(novelId)
  }

  const handleBackToLibrary = () => {
    suppressCompletionRef.current = true
    setActiveNovelId(null)
    setActiveChapterId(null)
    setReaderProgress(0)
    resumeIntentRef.current = null
    if (bookmarkFlashTimeoutRef.current) {
      clearTimeout(bookmarkFlashTimeoutRef.current)
    }
    setBookmarkFlash(false)
  }

  return (
    <main className="relative z-10 flex flex-col gap-12 pb-24">
      <SectionShell id="novels">
        <SectionHeading eyebrow={novelsPage.eyebrow} title={novelsPage.title} description={novelsPage.description} />
        {activeNovel ? (
          <GlowCard>
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em]" style={{ color: tokens.eyebrow }}>
                  {activeNovel.subtitle}
                </p>
                <h3 className="mt-3 text-3xl font-semibold" style={{ color: tokens.textPrimary }}>
                  {activeNovel.title}
                </h3>
                <p className="mt-3 text-sm" style={{ color: tokens.textSecondary }}>
                  Choose a chapter from the shelf and it will open on the right.
                </p>
              </div>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                <div className="space-y-4">
                  {activeNovel.chapters?.map((chapter) => (
                    <button
                      key={chapter.id}
                      type="button"
                      onClick={() => {
                        suppressCompletionRef.current = true
                        setReaderProgress(0)
                        setActiveChapterId(chapter.id)
                        setPendingBookmarkScroll(0)
                      }}
                      className="flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.3em] transition-all duration-500"
                      style={{
                        borderColor: chapter.id === activeChapterId ? tokens.accentSoft : tokens.cardBorder,
                        color: chapter.id === activeChapterId ? tokens.textPrimary : tokens.textSecondary,
                        background: chapter.id === activeChapterId ? tokens.cardBackground : 'transparent',
                      }}
                    >
                      <span>{chapter.title}</span>
                      {(completedChapters[activeNovelId] ?? []).includes(chapter.id) && (
                        <span
                          aria-hidden="true"
                          className="ml-3 inline-flex h-5 w-5 items-center justify-center rounded-full border-2"
                          style={{ color: tokens.accent, borderColor: tokens.accent }}
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 10.5 8.5 14 15 6" />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <div>
                  {activeChapter ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.4em]" style={{ color: tokens.eyebrow }}>
                          Reading Progress {Math.round(readerProgress * 100)}%
                        </p>
                        <div className="mt-3 h-1.5 w-full rounded-full" style={{ background: tokens.cardBorder }}>
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{ width: `${readerProgress * 100}%`, background: tokens.accentSoft }}
                          />
                        </div>
                        {isChapterCompleted && (
                          <p
                            className="mt-2 text-xs uppercase tracking-[0.4em] font-semibold"
                            style={{ color: tokens.textPrimary }}
                          >
                            Chapter completed
                          </p>
                        )}
                      </div>
                      <pre
                        ref={readerRef}
                        className="novel-reader max-h-[70vh] overflow-y-auto rounded-2xl border p-6 text-sm leading-relaxed"
                        style={{
                          borderColor: tokens.cardBorder,
                          color: tokens.textSecondary,
                          background: tokens.cardBackground,
                          whiteSpace: 'pre-wrap',
                          '--novel-scroll-track': tokens.cardBorder,
                          '--novel-scroll-thumb': tokens.accentSoft,
                          '--novel-scroll-thumb-gradient': `linear-gradient(120deg, ${tokens.accentSoft}, ${tokens.accentSoft})`,
                          '--novel-scroll-thumb-shadow': tokens.accentSoft,
                        }}
                      >
                        {activeChapter.body}
                      </pre>
                      <div className="flex flex-wrap gap-3">
                        <MagneticButton
                          type="button"
                          variant="ghost"
                          onClick={toggleBookmark}
                          aria-label={bookmarkButtonLabel}
                          title={bookmarkButtonLabel}
                          className="!px-4 !py-3"
                          style={
                            bookmarkFlash || isBookmarkActive
                              ? {
                                  background: tokens.accentSoft,
                                  color: tokens.accentContrast,
                                  borderColor: tokens.accent,
                                }
                              : {}
                          }
                        >
                          <span className="sr-only">{bookmarkButtonLabel}</span>
                            <svg
                              viewBox="0 0 20 20"
                              className="h-5 w-5"
                              fill={isBookmarkActive ? 'currentColor' : 'none'}
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M5 3.5h10v14l-5-3.5-5 3.5z" />
                            </svg>
                          </MagneticButton>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="flex h-full min-h-[320px] items-center justify-center rounded-2xl border text-sm"
                      style={{ borderColor: tokens.cardBorder, color: tokens.textSecondary }}
                    >
                      Select a chapter to start reading.
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <MagneticButton type="button" variant="secondary" onClick={handleBackToLibrary}>
                  Back to library
                </MagneticButton>
              </div>
            </div>
          </GlowCard>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {novels.map((novel) => (
              <GlowCard key={novel.id} className="relative flex flex-col justify-between">
                {bookmarks[novel.id] && (
                  <button
                    type="button"
                    onClick={() => handleOpenNovel(novel.id, { resumeBookmark: true })}
                    className="absolute -top-3 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 bg-black/40 text-sm font-semibold uppercase transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ color: tokens.accent, borderColor: tokens.accent, boxShadow: `0 0 12px ${tokens.accentSoft}` }}
                    aria-label="Resume bookmark"
                    title="Resume bookmark"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 3.5h10v14l-5-3.5-5 3.5z" />
                    </svg>
                  </button>
                )}
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em]" style={{ color: tokens.eyebrow }}>
                    {novel.subtitle}
                  </p>
                  <h3 className="text-2xl font-semibold" style={{ color: tokens.textPrimary }}>
                    {novel.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: tokens.textSecondary }}>
                    {buildPreview(novel)}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-3">
                    <MagneticButton type="button" onClick={() => handleOpenNovel(novel.id)}>
                      Open novel
                    </MagneticButton>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        )}
      </SectionShell>
    </main>
  )
}

function safeParse(value) {
  if (!value) return undefined
  try {
    return JSON.parse(value)
  } catch {
    return undefined
  }
}
