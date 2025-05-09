"use client";

import { useState } from "react";
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
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "Runner-Up, Dotslash Hackathon",
    issuer: "Plaksha University (Fitoor x Prayas)",
    date: "2024-11-23",
    description:
      "Secured 2nd position in a 24-hour hackathon demonstrating software innovation and teamwork.",
    image: "/dotslash.svg",
    link: "#",
    skills: ["Hackathon", "Full-Stack Development", "Leadership"],
  },
  {
    id: 2,
    title: "Code Fusion 2.0 – 4th Place",
    issuer: "HackTech",
    date: "2024-11-11",
    description:
      "Awarded for excellence in technology and innovation during Code Fusion 2.0 as part of Team ShipWise.",
    image: "/award.svg",
    link: "#",
    skills: ["Innovation", "Frontend", "Team Project"],
  },
  {
    id: 3,
    title: "HackTU 6.0 Participant",
    issuer: "Thapar University (CCS)",
    date: "2025-02-09",
    description:
      "Participated in HackTU 6.0, showcasing innovation and team collaboration in tech product development.",
    image: "/hackathon.svg",
    link: "#",
    skills: ["Hackathon", "Teamwork", "Problem Solving"],
  },
  {
    id: 5,
    title: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "2024-12-16",
    description:
      "60-hour advanced cloud architecting course, covering core AWS services, cloud design principles, and best practices.",
    image: "/aws.svg",
    link: "https://www.credly.com/go/t8kXkYPR",
    skills: ["AWS", "Cloud Computing", "Architecture", "DevOps"],
  },
  {
    id: 6,
    title: "Energy Literacy Training",
    issuer: "Energy Swaraj Foundation",
    date: "2023-11-04",
    description:
      "Completed training on energy conservation, sustainability, and carbon neutrality practices.",
    image: "/energy.svg",
    link: "#",
    skills: ["Sustainability", "Energy", "Environment"],
  },
  {
    id: 7,
    title: "RDBMS PostgreSQL Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "2024-05-10",
    description:
      "Scored 97.5% in RDBMS training using PostgreSQL. Covered SQL commands, joins, indexing, and transactions.",
    image: "/postgresql.svg",
    link: "#",
    skills: ["PostgreSQL", "SQL", "Databases"],
  },
  {
    id: 8,
    title: "Advanced C++ Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "2023-12-01",
    description:
      "Completed advanced concepts of C++ including OOP, STL, and file handling with a 95% score.",
    image: "/cpp.svg",
    link: "#",
    skills: ["C++", "OOP", "STL"],
  },
  {
    id: 9,
    title: "Java Programming Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "2024-05-01",
    description:
      "Covered core Java concepts including classes, exceptions, threads, and interfaces. Scored 82.5%.",
    image: "/java.svg",
    link: "#",
    skills: ["Java", "OOP", "Multithreading"],
  },
  {
    id: 10,
    title: "Cpp Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "2023-11-30",
    description:
      "Completed foundational C++ programming training with a score of 77.5%.",
    image: "/cpp.svg",
    link: "#",
    skills: ["C++", "Programming Basics"],
  },
  {
    id: 11,
    title: "C Programming Training",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "2023-11-30",
    description:
      "Covered C programming fundamentals including loops, arrays, and pointers. Scored 65%.",
    image: "/c.svg",
    link: "#",
    skills: ["C", "Pointers", "Procedural Programming"],
  },
];

const achievements = [
  {
    id: 1,
    title: "NCC Sergeant & Team Leader",
    organization: "School NCC Unit",
    year: "2017–2020",
    description:
      "Led 33 cadets during school NCC training, responsible for drills, commands, and discipline as Sergeant.",
    tags: ["Leadership", "Discipline", "NCC"],
  },
  {
    id: 2,
    title: "Hackathon 4th Place",
    organization: "Code Fusion 2.0 by HackTech",
    year: "2024",
    description:
      "Team ShipWise was awarded 4th place for building a logistics optimization app with 3D visualization.",
    tags: ["Innovation", "Team Leader", "Frontend"],
  },
  {
    id: 3,
    title: "Full-Stack Developer – Dotslash Hackathon",
    organization: "Plaksha University",
    year: "2024",
    description:
      "Worked on backend and frontend, contributed to winning project as lead developer at Dotslash (Runner-Up).",
    tags: ["Hackathon", "Full Stack", "Leadership"],
  },
  {
    id: 4,
    title: "Code Fusion 2.0 – Participation",
    organization: "Chandigarh University",
    year: "2024",
    description:
      "Participated in national-level coding competition as part of Team ShipWise.",
    tags: ["Collaboration", "Development", "Hackathon"],
  },
];

export default function Certificates() {
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // Calculate which achievements to show based on state
  const displayedAchievements = showAllAchievements
    ? achievements
    : achievements.slice(0, 3);

  // Calculate which certificates to show based on state
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 3);

  return (
    <section
      id="certificates"
      className="py-20 md:py-28 relative overflow-hidden"
    >
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
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
              Certificates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedCertificates.map((certificate, index) => (
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
                            <CardTitle className="text-lg">
                              {certificate.title}
                            </CardTitle>
                            <CardDescription>
                              {certificate.issuer} • {certificate.date}
                            </CardDescription>
                          </div>
                        </div>
                        <Award className="h-5 w-5 text-primary opacity-70" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-muted-foreground mb-4">
                        {certificate.description}
                      </p>
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
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-auto group-hover:text-primary"
                        asChild
                      >
                        <a
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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

            {/* Show All / Show Less button for certificates */}
            {certificates.length > 3 && (
              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5"
                  onClick={() => setShowAllCertificates(!showAllCertificates)}
                >
                  {showAllCertificates ? (
                    <span className="flex items-center">
                      Show Less
                      <ChevronUp className="ml-2 h-4 w-4" />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Show All ({certificates.length - 3} more)
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </motion.div>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
              Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedAchievements.map((achievement, index) => (
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
                        <CardTitle className="text-lg">
                          {achievement.title}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="bg-primary/5 border-primary/20"
                        >
                          {achievement.year}
                        </Badge>
                      </div>
                      <CardDescription>
                        {achievement.organization}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Show All / Show Less button */}
            {achievements.length > 3 && (
              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5"
                  onClick={() => setShowAllAchievements(!showAllAchievements)}
                >
                  {showAllAchievements ? (
                    <span className="flex items-center">
                      Show Less
                      <ChevronUp className="ml-2 h-4 w-4" />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Show All ({achievements.length - 3} more)
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
