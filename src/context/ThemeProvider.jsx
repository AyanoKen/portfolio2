import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const themeTokens = {
  legacy: {
    label: 'Tron Legacy',
    accent: '#00f6ff',
    accentAlt: '#00a8ff',
    accentGlow: 'rgba(0, 255, 255, 0.4)',
    accentContrast: '#02050d',
    accentSoft: 'rgba(0, 246, 255, 0.2)',
    background: '#03060f',
    backgroundGradient: 'radial-gradient(circle at 20% 20%, #041a2c, #03060f 55%)',
    cardBorder: 'rgba(0, 247, 255, 0.18)',
    cardBackground: 'rgba(4, 14, 25, 0.85)',
    cardInner: 'linear-gradient(180deg, rgba(0, 247, 255, 0.08), rgba(3, 6, 15, 0.95))',
    textPrimary: '#f5ffff',
    textSecondary: '#bde9fd',
    textMuted: '#7ec3d7',
    eyebrow: 'rgba(146, 233, 255, 0.75)',
    chipBackground: 'rgba(0, 246, 255, 0.08)',
    chipBorder: 'rgba(0, 246, 255, 0.35)',
    buttonGradient: 'linear-gradient(120deg, #00f6ff, #00b3ff)',
    buttonSecondaryBg: 'rgba(255, 255, 255, 0.04)',
    buttonBorder: 'rgba(0, 247, 255, 0.4)',
    buttonShadow: '0 15px 45px rgba(0, 255, 247, 0.35)',
    cardGlow: '0 25px 60px rgba(0, 255, 247, 0.2)',
    ambientPrimary: 'rgba(0, 246, 255, 0.35)',
    ambientSecondary: 'rgba(0, 93, 255, 0.25)',
    ambientLine: 'rgba(0, 246, 255, 0.35)',
    neonCore: '#00f6ff',
    neonSecondary: '#4de0ff',
  },
  ares: {
    label: 'Tron Ares',
    accent: '#ff0000',
    accentAlt: '#ff3366',
    accentGlow: 'rgba(255, 0, 0, 0.7)',
    accentContrast: '#1a0202',
    accentSoft: 'rgba(255, 0, 0, 0.22)',
    background: '#050003',
    backgroundGradient: 'radial-gradient(circle at 20% 20%, #250007, #050003 55%)',
    cardBorder: 'rgba(255, 0, 0, 0.45)',
    cardBackground: 'rgba(20, 2, 4, 0.92)',
    cardInner: 'linear-gradient(180deg, rgba(255, 0, 0, 0.16), rgba(5, 0, 3, 0.95))',
    textPrimary: '#ffe5e5',
    textSecondary: '#ffb8b8',
    textMuted: '#f58a8a',
    eyebrow: 'rgba(255, 140, 140, 0.95)',
    chipBackground: 'rgba(255, 0, 0, 0.16)',
    chipBorder: 'rgba(255, 0, 0, 0.55)',
    buttonGradient: 'linear-gradient(120deg, #ff0000, #ff3366)',
    buttonSecondaryBg: 'rgba(255, 255, 255, 0.08)',
    buttonBorder: 'rgba(255, 0, 0, 0.55)',
    buttonShadow: '0 24px 70px rgba(255, 0, 0, 0.65)',
    cardGlow: '0 30px 80px rgba(255, 0, 0, 0.4)',
    ambientPrimary: 'rgba(255, 0, 0, 0.55)',
    ambientSecondary: 'rgba(255, 50, 110, 0.45)',
    ambientLine: 'rgba(255, 0, 0, 0.5)',
    neonCore: '#ff1a1a',
    neonSecondary: '#ff3366',
  },
}

const ThemeContext = createContext({
  theme: 'legacy',
  tokens: themeTokens.legacy,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'legacy'
    return window.localStorage.getItem('tron-theme') ?? 'legacy'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('tron-theme', theme)
    }
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'legacy' ? 'ares' : 'legacy'))

  const value = useMemo(() => ({ theme, tokens: themeTokens[theme], toggleTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
