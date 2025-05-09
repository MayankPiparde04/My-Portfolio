"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const projects = [
  {
    id: 1,
    title: "ShipWise - Smart Courier & Packing Optimizer",
    description:
      "A logistics optimization tool that selects cost-effective couriers and optimal packing using 3D visualization.",
    image: "/shipwise.png",
    tags: [
      "ReactJS",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Three.js",
    ],
    githubUrl: "https://github.com/MayankPiparde04/Team-ShipWise",
  },
  {
    id: 2,
    title: "Speech Language Therapy Software",
    description:
      "Clinical platform for therapists, patients, and supervisors to manage therapy cases, progress, and scheduling.",
    image: "/speech-therapy.png",
    tags: [
      "ReactJS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Framer Motion",
      "REST API",
    ],
    githubUrl: "#", // Replace when ready
  },
  {
    id: 3,
    title: "KaaryaKram - Task Collaboration Tool",
    description:
      "A role-based platform for creating, assigning, and managing tasks collaboratively with file and status tracking.",
    image: "/kaaryakram.png",
    tags: ["ReactJS", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "REST API"],
    githubUrl: "#", // Replace when ready
  },
  {
    id: 4,
    title: "Student Skill Exchange Portal",
    description:
      "An app for students to offer and request skills like design, development, and mentorship in a community format.",
    image: "/skill-exchange.png",
    tags: ["React Native", "Firebase", "Expo", "Tailwind CSS", "Firestore"],
    githubUrl: "#", // Replace when ready
  },
  {
    id: 5,
    title: "Chat App with Firebase",
    description:
      "A real-time mobile chat app with authentication, profile viewing, and secure media sharing.",
    image: "/chat-app.png",
    tags: [
      "React Native",
      "Firebase Auth",
      "Firebase Storage",
      "NativeWind",
      "Expo",
    ],
    githubUrl: "#", // Replace when ready
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="My Projects"
          subtitle="Here are some of my recent projects. Each project represents a unique challenge and solution."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden h-full border border-primary/10 bg-background/50 backdrop-blur-sm">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{
                      transform:
                        hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20 text-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
