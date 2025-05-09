"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"
import SectionHeading from "@/components/section-heading"

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Leading the frontend development team, implementing new features, and optimizing performance.",
    technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed and maintained web applications, collaborated with cross-functional teams.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Creative Web Agency",
    period: "2016 - 2018",
    description: "Built responsive websites and implemented UI designs for various clients.",
    technologies: ["JavaScript", "HTML", "CSS", "jQuery"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the companies I've worked with."
        />

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative grid items-start grid-cols-1 md:grid-cols-5 md:gap-10"
            >
              <div className="md:col-span-2">
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 md:left-1/2 ml-5 md:-ml-3.5 h-7 w-7 rounded-full border border-primary/20 bg-background flex items-center justify-center">
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <time className="text-sm font-medium text-muted-foreground ml-9 md:ml-0">{experience.period}</time>
                </div>
                <div className="ml-9 md:ml-0">
                  <h3 className="text-xl font-bold">{experience.role}</h3>
                  <h4 className="text-primary font-medium">{experience.company}</h4>
                </div>
              </div>
              <Card className="md:col-span-3 mt-3 md:mt-0 border border-primary/10 bg-background/50 backdrop-blur-sm">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{experience.role}</CardTitle>
                  <CardDescription>{experience.company}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground mb-3">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 text-foreground"
                      >
                        {tech}
                      </Badge>
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
