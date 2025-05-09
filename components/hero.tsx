"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden py-16 md:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15)_0,rgba(var(--background-rgb),0)_50%)]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-4 px-4">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-full p-1.5 border-2 border-primary/30 overflow-hidden shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] backdrop-blur-sm bg-background/30"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
            <Image
              src="/My-Image.png"
              alt="Profile Avatar"
              fill
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block">
            Hi, I'm <span className="text-gradient">Mayank Piparde</span>
          </span>
          <span className="block mt-2">Full-Stack Developer</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-[600px] text-base sm:text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I build modern, responsive web applications with cutting-edge
          technologies.
        </motion.p>

        {/* Social media links */}
        <motion.div
          className="flex gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="icon"
            variant="outline"
            className="rounded-full glass"
            asChild
          >
            <a
              href="https://github.com/mayankpiparde04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full glass"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/mayankpiparde/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full glass"
            asChild
          >
            <a
              href="https://x.com/MayankPiparde"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto justify-center mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/30"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full backdrop-blur-sm hover:bg-background/50"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 pl-4 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="rounded-full backdrop-blur-sm bg-background/30 border border-primary/20 shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)] hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] animate-pulse"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </motion.div>
        <div id="content-start" ref={scrollRef} className="h-4" />
      </div>
    </section>
  );
}
