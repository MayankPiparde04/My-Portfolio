"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import Image from "next/image"

const certificates = [
  {
    id: 1,
    title: "Advanced React & Redux",
    issuer: "Udemy",
    date: "2023",
    description: "Comprehensive course covering advanced React patterns, Redux, and modern frontend architecture.",
    image: "/placeholder.svg?height=60&width=60",
    link: "#",
    skills: ["React", "Redux", "JavaScript"],
  },
  {
    id: 2,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2022",
    description:
      "Professional certification validating expertise in developing, deploying, and debugging AWS applications.",
    image: "/placeholder.svg?height=60&width=60",
    link: "#",
    skills: ["AWS", "Cloud Computing", "DevOps"],
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    issuer: "Coursera",
    date: "2021",
    description: "Specialization covering modern full-stack development with JavaScript, Node.js, and React.",
    image: "/placeholder.svg?height=60&width=60",
    link: "#",
    skills: ["JavaScript", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    issuer: "Interaction Design Foundation",
    date: "2020",
    description: "Course covering user-centered design principles, wireframing, prototyping, and usability testing.",
    image: "/placeholder.svg?height=60&width=60",
    link: "#",
    skills: ["UI Design", "UX Research", "Prototyping"],
  },
]

const achievements = [
  {
    id: 1,
    title: "Hackathon Winner",
    organization: "TechCrunch Disrupt",
    year: "2023",
    description: "First place in the annual hackathon with an AI-powered accessibility tool.",
  },
  {
    id: 2,
    title: "Open Source Contributor",
    organization: "React Ecosystem",
    year: "2022-Present",
    description: "Active contributor to several popular React libraries with over 50 merged PRs.",
  },
  {
    id: 3,
    title: "Speaker",
    organization: "Web Development Conference",
    year: "2021",
    description: "Presented on 'Modern State Management in React' to an audience of 500+ developers.",
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-28 relative overflow-hidden">
      {/* 3D Vector Animation - Floating Certificates */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[5%] w-20 h-20 opacity-20 dark:opacity-10">
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="w-full h-full bg-primary/30 rounded-lg backdrop-blur-sm border border-primary/20"
          />
        </div>
        <div className="absolute bottom-40 left-[10%] w-16 h-16 opacity-20 dark:opacity-10">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, -8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
            className="w-full h-full bg-primary/30 rounded-lg backdrop-blur-sm border border-primary/20"
          />
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Certificates & Achievements"
          subtitle="Professional certifications and notable accomplishments throughout my career."
        />

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Certificates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden group">
                    <CardHeader className="p-6 pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12 rounded-md overflow-hidden border border-primary/10">
                            <Image
                              src={certificate.image || "/placeholder.svg"}
                              alt={certificate.issuer}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{certificate.title}</CardTitle>
                            <CardDescription>
                              {certificate.issuer} • {certificate.date}
                            </CardDescription>
                          </div>
                        </div>
                        <Award className="h-5 w-5 text-primary opacity-70" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-muted-foreground mb-4">{certificate.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-primary/10 hover:bg-primary/20 text-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="ghost" size="sm" className="ml-auto group-hover:text-primary" asChild>
                        <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                          <span className="flex items-center">
                            View Certificate
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </span>
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm">
                    <CardHeader className="p-6 pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <Badge variant="outline" className="bg-primary/5 border-primary/20">
                          {achievement.year}
                        </Badge>
                      </div>
                      <CardDescription>{achievement.organization}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
