import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { pageTransitionVariants } from '../../lib/motionPresets'

export default function PageTransition({ children }) {
  const [routeKey, setRouteKey] = useState(
    typeof window !== 'undefined' ? window.location.pathname : 'app-shell',
  )

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const handlePopstate = () => setRouteKey(window.location.pathname)
    window.addEventListener('popstate', handlePopstate)
    return () => window.removeEventListener('popstate', handlePopstate)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div key={routeKey} initial="initial" animate="animate" exit="exit" variants={pageTransitionVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
