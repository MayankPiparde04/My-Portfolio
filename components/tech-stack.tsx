"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Express", "NestJS", "GraphQL", "REST API", "MongoDB", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    category: "DevOps & Tools",
    techs: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify", "Jest", "Cypress"],
  },
  {
    category: "Design & Others",
    techs: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Accessibility", "SEO", "Performance Optimization"],
  },
]

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Tech Stack" subtitle="Technologies and tools I work with on a daily basis." />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.techs.map((item) => (
                      <motion.div key={item} variants={itemVariants}>
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-foreground">
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
