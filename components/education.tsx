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
    period: "2021 - 2022",
    description:
      "Completed 12th with subjects Physics, Chemistry, Maths, and Biology. Scored 82.4%.",
  },
  {
    id: 3,
    degree: "Secondary School (Class 10th)",
    institution: "M.P. Board of Secondary Education",
    period: "2019 - 2020",
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

        <div className="mt-10 md:mt-16 relative">
          {/* Timeline vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-16">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-5 gap-y-6 md:gap-x-10 items-start"
              >
                {/* Timeline icon - Better positioned for both mobile and desktop */}
                <div className="absolute left-5 md:left-1/2 top-0 md:-top-4 transform -translate-x-1/2 h-7 w-7 rounded-full border border-primary/20 bg-background shadow-sm flex items-center justify-center z-10">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>

                {/* Left column with period and titles */}
                <div className="md:col-span-2 pl-16 md:pl-0 md:text-right md:pr-12">
                  <time className="text-sm font-medium text-muted-foreground block mb-2">
                    {education.period}
                  </time>
                  <h3 className="text-lg sm:text-xl font-bold">{education.degree}</h3>
                  <h4 className="text-primary font-medium mt-1 text-sm sm:text-base break-words">
                    {education.institution}
                  </h4>
                </div>

                {/* Right column with card */}
                <div className="md:col-span-3 pl-16 md:pl-12">
                  <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <p className="text-muted-foreground text-sm sm:text-base">{education.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
