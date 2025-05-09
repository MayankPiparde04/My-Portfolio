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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-7">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15)_0,rgba(var(--background-rgb),0)_50%)]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6 px-4 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-full p-1.5 border-2 border-primary/30 overflow-hidden shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] backdrop-blur-sm bg-background/30"
        >
          <div
            className="w-56 h-56 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center animate-subtle-pulse"
            style={{ boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)" }}
          >
            <Image
              src="/My-Image.png"
              alt="Profile Avatar"
              width={225}
              height={225}
              className="rounded-full"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block">
            Hi, I'm <span className="text-gradient">Mayank Piparde</span>
          </span>
          <span className="block mt-2">Full-Stack Developer</span>
        </motion.h1>

        <motion.p
          className="max-w-[600px] text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I build modern, responsive web applications with cutting-edge
          technologies.
        </motion.p>

        <motion.div
          className="flex gap-4"
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

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="rounded-full glass text-primary hover:bg-primary/10"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full glass"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      <div className="relative w-full mt-auto md:pb-12 lg:pb-14 pb-32 pl-3 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-2"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="rounded-full backdrop-blur-sm bg-background/30 border border-primary/20 shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)] hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>

        <div id="content-start" ref={scrollRef} className="h-4" />
      </div>
    </section>
  );
}
