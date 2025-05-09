"use client"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function FloatingShapes() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  const shapes = [
    {
      type: "circle",
      size: "w-16 h-16",
      position: "top-[15%] left-[10%]",
      animation: {
        y: [0, 30, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.05, 1],
      },
      duration: 15,
      delay: 0,
    },
    {
      type: "square",
      size: "w-12 h-12",
      position: "top-[30%] right-[15%]",
      animation: {
        y: [0, -20, 0],
        rotate: [0, -15, 0],
        scale: [1, 1.1, 1],
      },
      duration: 18,
      delay: 2,
    },
    {
      type: "triangle",
      size: "w-14 h-14",
      position: "bottom-[25%] left-[20%]",
      animation: {
        y: [0, 25, 0],
        rotate: [0, 20, 0],
        scale: [1, 1.08, 1],
      },
      duration: 20,
      delay: 1,
    },
    {
      type: "donut",
      size: "w-20 h-20",
      position: "bottom-[15%] right-[10%]",
      animation: {
        y: [0, -15, 0],
        rotate: [0, 30, 0],
        scale: [1, 1.03, 1],
      },
      duration: 25,
      delay: 3,
    },
  ]

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.position} ${shape.size} opacity-20 dark:opacity-10`}
          animate={shape.animation}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: shape.delay,
          }}
        >
          {shape.type === "circle" && (
            <div className="w-full h-full rounded-full border border-primary/30 backdrop-blur-sm bg-primary/5" />
          )}
          {shape.type === "square" && (
            <div className="w-full h-full rounded-md border border-primary/30 backdrop-blur-sm bg-primary/5" />
          )}
          {shape.type === "triangle" && (
            <div className="w-full h-full" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}>
              <div className="w-full h-full border border-primary/30 backdrop-blur-sm bg-primary/5" />
            </div>
          )}
          {shape.type === "donut" && (
            <div className="w-full h-full rounded-full border-4 border-primary/30 backdrop-blur-sm" />
          )}
        </motion.div>
      ))}
    </div>
  )
}
