"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  FileJson,
  FileType,
  CircleIcon,
  Globe,
  Smartphone,
  Server,
  PaintBucket,
  Wind,
  Database,
  Lock,
  Network,
  GitBranch,
  Github,
  TerminalSquare,
} from "lucide-react";

const technologies = [
  {
    category: "Languages & Fundamentals",
    techs: ["C", "C++", "Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    techs: ["React", "React Native", "Next.js", "Tailwind CSS", "NativeWind"],
  },
  {
    category: "Backend & Database",
    techs: [
      "Node.js",
      "Express.js",
      "Firebase",
      "MongoDB",
      "JWT Auth",
      "REST API",
    ],
  },
  {
    category: "Tools & Deployment",
    techs: ["Git", "GitHub", "Vercel", "Postman", "VS Code"],
  },
];

// Function to map technologies to their respective icons
const getTechIcon = (tech: string) => {
  const iconMap: Record<string, JSX.Element> = {
    // Languages & Fundamentals
    C: <Code size={14} />,
    "C++": <Code size={14} />,
    Python: <CircleIcon size={14} />,
    JavaScript: <FileJson size={14} />,
    HTML5: <FileType size={14} />,
    CSS3: <PaintBucket size={14} />,

    // Frontend
    React: <Globe size={14} />,
    "React Native": <Smartphone size={14} />,
    "Next.js": <Server size={14} />,
    "Tailwind CSS": <Wind size={14} />,
    NativeWind: <Wind size={14} />,

    // Backend & Database
    "Node.js": <Server size={14} />,
    "Express.js": <Server size={14} />,
    Firebase: <Database size={14} />,
    MongoDB: <Database size={14} />,
    "JWT Auth": <Lock size={14} />,
    "REST API": <Network size={14} />,

    // Tools & Deployment
    Git: <GitBranch size={14} />,
    GitHub: <Github size={14} />,
    // "Vercel": <Vercel size={14} />,
    Postman: <TerminalSquare size={14} />,
    // "VS Code": <MonitorCode size={14} />,
  };

  return iconMap[tech] || <CircleIcon size={14} />;
};

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="tech-stack"
      className="py-20 md:py-28 bg-muted/30 min-h-screen"
    >
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I work with regularly."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
                    {tech.techs.map((item) => (
                      <motion.div
                        key={item}
                        variants={itemVariants}
                        className="transition-transform hover:-translate-y-1 duration-200"
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-foreground px-2.5 py-1.5 flex items-center gap-1.5 text-xs sm:text-sm"
                        >
                          {getTechIcon(item)}
                          <span>{item}</span>
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
  );
}
