"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "KaaryaKram - Event Management App",
    period: "2025 - Present",
    description:
      "Building a full-stack platform for managing institutional events, including event creation, registration, and real-time updates for participants and organizers.",
    technologies: [
      "React",
      "Next.js",
      "JWT",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Express.js",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "ShipWise - Smart Courier & Packing Optimizer",
    period: "2024 - 2025",
    description:
      "Leading frontend development for ShipWise, implementing features like carton optimization and courier selection, with a focus on 3D visualization and performance.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Three.js"],
  },
  {
    id: 3,
    role: "Full-Stack Developer",
    company: "Speech Language Therapy Services",
    period: "2024",
    description:
      "Developing a clinical software platform for therapists, patients, and supervisors with features for case management, progress tracking, and appointment scheduling.",
    technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Framer Motion"],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Student Skill Exchange Portal",
    period: "2024",
    description:
      "Leading frontend development for a platform enabling students to barter skills such as design, development, and mentorship across the student community.",
    technologies: ["React Native", "Tailwind CSS", "Expo"],
  },
  {
    id: 5,
    role: "Full-Stack Developer",
    company: "Chat App with Firebase",
    period: "2023 - 2024",
    description:
      "Built a real-time chat app with login/signup, chatting UI, user profile, and Firebase Cloud Storage integration.",
    technologies: ["React Native", "Firebase", "NativeWind", "JWT"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the projects I've worked with."
        />

        <div className="mt-10 md:mt-16 space-y-10 md:space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-auto md:before:mr-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative grid grid-cols-1 md:grid-cols-5 gap-y-6 md:gap-x-10 items-start"
            >
              {/* Timeline icon - Properly positioned for both mobile and desktop */}
              <div className="absolute md:left-1/2 top-1 md:-top-4  md:-translate-x-1/2 h-7 w-7 rounded-full border border-primary/20 bg-background shadow-sm flex items-center justify-center z-10">
                <Briefcase className="h-3.5 w-3.5 text-primary" />
              </div>

              {/* Left column with period and titles */}
              <div className="md:col-span-2 pl-12 md:pl-0 md:text-right md:pr-12">
                <time className="text-sm font-medium text-muted-foreground block mb-2">
                  {experience.period}
                </time>
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <h4 className="text-primary font-medium mt-1">
                  {experience.company}
                </h4>
              </div>

              {/* Right column with card */}
              <div className="md:col-span-3 pl-12 md:pl-6">
                <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
