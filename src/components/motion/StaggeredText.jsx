import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { textRevealVariants } from '../../lib/motionPresets'

export default function StaggeredText({ lines = [], as: Component = 'p', className = '', style = {} }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })
  const preparedLines = lines.map((line) => line.trim()).filter(Boolean)

  return (
    <div ref={ref} className="space-y-3 overflow-hidden">
      {preparedLines.map((line, index) => (
        <motion.div
          key={line + index}
          variants={textRevealVariants}
          custom={index}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="overflow-hidden"
        >
          <Component className={className} style={style}>
            {line}
          </Component>
        </motion.div>
      ))}
    </div>
  )
}
