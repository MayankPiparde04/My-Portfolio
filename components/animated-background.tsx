"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Define transforms at the top level
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.2])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Large gradient blob */}
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full opacity-30 dark:opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(var(--primary-rgb), 0.3) 0%, rgba(var(--primary-rgb), 0) 70%)",
          y: y1,
          opacity,
        }}
      />

      {/* Small floating elements */}
      <motion.div
        className="absolute top-[30%] left-[10%] w-32 h-32 rounded-full border border-primary/10 opacity-20 dark:opacity-10"
        style={{ y: y2 }}
        animate={{
          x: [0, 30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[20%] w-40 h-40 rounded-full border border-primary/10 opacity-20 dark:opacity-10"
        style={{ y: y3 }}
        animate={{
          x: [0, -40, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Grid pattern */}
      <motion.div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" style={{ y: y4 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, var(--primary) 1px, transparent 1px), 
                            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* Diagonal lines */}
      <motion.div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5" style={{ y: y2 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonalLines"
              patternUnits="userSpaceOnUse"
              width="60"
              height="60"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="60" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </motion.div>
    </div>
  )
}
