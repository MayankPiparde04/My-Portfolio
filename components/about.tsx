"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, GraduationCap, Rocket } from "lucide-react";
import SectionHeading from "@/components/section-heading";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about me and my background."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full-Stack Developer & Tech Explorer
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm a dedicated Computer Science student with a strong foundation
              in full-stack development. I specialize in building modern
              applications using React, React Native, Node.js, Next.js, and
              Express.js, and I enjoy crafting clean, responsive, and optimized
              user experiences.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring emerging
              technologies, solving puzzles like the Rubik's Cube, participating
              in hackathons, or riding through the open roads. I'm passionate
              about growing as a software engineer and sharing my journey with
              the tech community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Technical Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      Proficient in modern JavaScript, React, React Native,
                      Next.js, Node.js, and more.
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
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hackathon Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      Participated in national-level hackathons, collaborating
                      with teams to develop innovative and functional tech
                      solutions under tight deadlines.
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
                      Pursuing B.Tech in Computer Science and Engineering at
                      AITR, Indore (RGPV, Bhopal) with continuous learning
                      through projects, certifications, and hackathons.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
