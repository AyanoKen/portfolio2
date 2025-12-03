import { useMotionValue, useSpring } from 'framer-motion'
import { useCallback } from 'react'

const springConfig = { stiffness: 220, damping: 18, mass: 0.4 }

export default function useMagnetic(strength = 0.2) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = useCallback(
    (event) => {
      const bounds = event.currentTarget.getBoundingClientRect()
      const relativeX = event.clientX - (bounds.left + bounds.width / 2)
      const relativeY = event.clientY - (bounds.top + bounds.height / 2)

      x.set(relativeX * strength)
      y.set(relativeY * strength)
    },
    [strength, x, y],
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { x: springX, y: springY, handleMouseMove, handleMouseLeave }
}
