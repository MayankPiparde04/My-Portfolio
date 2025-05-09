"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Html5, Javascript, ReactLogo, Nextjs, Nodejs, Database, Git } from "@/components/skill-icons"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "HTML/CSS", icon: <Html5 />, level: 95 },
  { name: "JavaScript", icon: <Javascript />, level: 90 },
  { name: "TypeScript", icon: <Javascript />, level: 85 },
  { name: "React", icon: <ReactLogo />, level: 90 },
  { name: "Next.js", icon: <Nextjs />, level: 85 },
  { name: "Node.js", icon: <Nodejs />, level: 80 },
  { name: "Databases", icon: <Database />, level: 75 },
  { name: "Git/GitHub", icon: <Git />, level: 85 },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className="max-w-[600px] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Here are the technologies and tools I work with on a daily basis.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-primary w-6 h-6">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="col-span-2 sm:col-span-3 md:col-span-4 text-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">Additional Skills</h3>
          </motion.div>

          {[
            "UI/UX Design",
            "Responsive Design",
            "Performance Optimization",
            "SEO",
            "Accessibility",
            "Testing",
            "CI/CD",
            "Docker",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-muted rounded-lg p-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
