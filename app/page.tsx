import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certificates from "@/components/certificates"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import AnimatedBackground from "@/components/animated-background"
import FloatingShapes from "@/components/floating-shapes"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "A modern portfolio showcasing my skills, projects, and experience as a full-stack developer.",
  keywords: ["developer", "portfolio", "web development", "full-stack", "react", "next.js"],
  authors: [{ name: "Your Name" }],
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <FloatingShapes />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Testimonials />
      <Contact />
    </main>
  )
}
