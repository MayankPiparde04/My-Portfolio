"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const educations = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Acropolis Institute of Technology and Research, Indore (RGPV Bhopal)",
    period: "2022 - 2026",
    description:
      "Pursuing B.Tech with focus on software development, AI frameworks, full-stack engineering, and system design.",
  },
  {
    id: 2,
    degree: "Senior Secondary (Class 12th - PCMB)",
    institution: "M.P. Board of Secondary Education",
    period: "2020 - 2022",
    description:
      "Completed 12th with subjects Physics, Chemistry, Maths, and Biology. Scored 82.4%.",
  },
  {
    id: 3,
    degree: "Secondary School (Class 10th)",
    institution: "M.P. Board of Secondary Education",
    period: "2018 - 2020",
    description:
      "Completed 10th grade with 94.3%, awarded for excellent academic performance and leadership in NCC.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Education"
          subtitle="My academic background and continuous learning journey."
        />

        <div className="mt-10 md:mt-16 space-y-10 md:space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-auto md:before:mr-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          {educations.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative grid grid-cols-1 md:grid-cols-5 gap-y-6 md:gap-x-10 items-start"
            >
              {/* Timeline icon - Positioned for both mobile and desktop */}
              <div className="absolute left-0 md:left-1/2 -top-4 ml-5 md:-ml-3.5 h-7 w-7 rounded-full border border-primary/20 bg-background shadow-sm flex items-center justify-center z-10">
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
              </div>

              {/* Left column with period and titles */}
              <div className="md:col-span-2 pl-12 md:pl-0 md:text-right md:pr-8">
                <time className="text-sm font-medium text-muted-foreground block mb-2">
                  {education.period}
                </time>
                <h3 className="text-xl font-bold">{education.degree}</h3>
                <h4 className="text-primary font-medium mt-1">
                  {education.institution}
                </h4>
              </div>

              {/* Right column with card */}
              <div className="md:col-span-3 md:pt-0">
                <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-muted-foreground">{education.description}</p>
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
