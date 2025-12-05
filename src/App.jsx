import { useEffect } from 'react'
import Lenis from 'lenis'
import { MotionConfig } from 'framer-motion'
import AmbientBackground from './components/background/AmbientBackground'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Capabilities from './components/sections/Capabilities'
import OtherProjects from './components/sections/OtherProjects'
import Artworks from './components/sections/Artworks'
import Contact from './components/sections/Contact'
import PageTransition from './components/layout/PageTransition'
import ThemeToggle from './components/ui/ThemeToggle'
import { ThemeProvider, useTheme } from './context/ThemeProvider'
import { transitions } from './lib/motionPresets'
import NovelsPage from './pages/Novels'

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}

function AppShell() {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Smooth scrolling init
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const today = new Date().getDate(); 
    if (today % 2 === 0) {
      setTheme("ares");
    } else {
      setTheme("legacy");
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [setTheme]);

  const { tokens } = useTheme()
  const isNovelsPage =
    typeof window !== 'undefined' && window.location.pathname.toLowerCase().includes('novels')

  return (
    <MotionConfig transition={transitions.default}>
      <div
        className="relative min-h-screen overflow-hidden"
        style={{ background: tokens.backgroundGradient, color: tokens.textPrimary }}
      >
        <AmbientBackground />
        <div className="tron-overlay" />
        <div className="tron-bars" />
        <div
          className="pointer-events-none absolute inset-0 z-0 mix-blend-screen opacity-50"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 3px)',
            backgroundSize: '200px 200px, 200px 200px',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-0 mix-blend-screen opacity-35"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent 32%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08), transparent 28%)',
          }}
        />
        <div className="tron-trails" />
        <div className="tron-bikes" />
        {/* <ThemeToggle className="fixed left-1/2 top-6 z-40 -translate-x-1/2" /> */}
        <PageTransition>
          {isNovelsPage ? (
            <NovelsPage />
          ) : (
            <main className="relative z-10 flex flex-col gap-24 pb-24">
              <Hero />
              {/* <Capabilities /> */}
              {/* <About /> */}
              <Projects />
              <OtherProjects />
              {/* <Artworks /> */}
              <Skills />
              <Contact />
            </main>
          )}
        </PageTransition>
      </div>
    </MotionConfig>
  )
}
