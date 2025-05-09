"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Briefcase, GraduationCap } from "lucide-react"
import SectionHeading from "@/components/section-heading"

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my background." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Full-Stack Developer</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate developer with over 5 years of experience building modern web applications. I specialize
              in React, Next.js, and Node.js, with a strong focus on creating performant, accessible, and visually
              appealing user experiences.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through blog posts and community events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Technical Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      Proficient in modern JavaScript, TypeScript, React, Next.js, Node.js, and more.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Work Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Worked with startups and established companies to deliver high-quality web applications.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Bachelor's degree in Computer Science and continuous self-learning through courses and workshops.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
