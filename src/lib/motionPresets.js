import { cubicBezier } from 'framer-motion'

export const motionEasing = cubicBezier(0.77, 0, 0.175, 1)

export const motionDurations = {
  short: 0.55,
  base: 0.9,
  long: 1.3,
}

export const transitions = {
  short: { duration: motionDurations.short, ease: motionEasing },
  default: { duration: motionDurations.base, ease: motionEasing },
  long: { duration: motionDurations.long, ease: motionEasing },
}

export const motionPresets = {
  fadeSlideUp: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: transitions.default },
    exit: { opacity: 0, y: -48, transition: transitions.short },
  },
  fadeSlideDown: {
    hidden: { opacity: 0, y: -36 },
    visible: { opacity: 1, y: 0, transition: transitions.default },
    exit: { opacity: 0, y: 36, transition: transitions.short },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: transitions.default },
    exit: { opacity: 0, transition: transitions.short },
  },
  imageReveal: {
    hidden: { opacity: 0, scale: 1.03 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ...transitions.long, opacity: { duration: motionDurations.short } },
    },
  },
}

export const staggerConfig = {
  staggerChildren: 0.12,
  delayChildren: 0.05,
}

export const hoverEffects = {
  card: {
    scale: 1.02,
    rotateX: -1.5,
    rotateY: 1.5,
    boxShadow: '0 25px 60px rgba(0, 255, 240, 0.15)',
  },
  button: {
    scale: 1.01,
    boxShadow: '0 10px 40px rgba(0, 255, 240, 0.35)',
  },
}

export const pageTransitionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: transitions.long },
  exit: { opacity: 0, y: 60, transition: transitions.short },
}

export const parallaxVariants = (offset = 60) => ({
  hidden: { opacity: 0, y: offset },
  visible: { opacity: 1, y: 0, transition: transitions.long },
})

export const textRevealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...transitions.default, delay: index * 0.08 },
  }),
}
