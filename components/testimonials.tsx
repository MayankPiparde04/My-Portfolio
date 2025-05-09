"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import SectionHeading from "@/components/section-heading"

const testimonials = [
  {
    id: 1,
    content:
      "Working with this developer was an absolute pleasure. They delivered the project on time and exceeded our expectations in terms of quality and attention to detail.",
    author: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "Exceptional problem-solving skills and a keen eye for design. Our web application not only looks great but performs flawlessly across all devices.",
    author: "Michael Chen",
    position: "CTO, InnovateCorp",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "The developer's expertise in React and Next.js was evident in the smooth, performant application they built for us. Highly recommended!",
    author: "Emily Rodriguez",
    position: "Product Manager, SoftSolutions",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    content:
      "Not only did they deliver a technically sound solution, but they also provided valuable insights that improved our product's user experience.",
    author: "David Kim",
    position: "Founder, WebCraft",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Testimonials" subtitle="What clients and colleagues say about working with me." />

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  zIndex: activeIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                    <p className="text-lg mb-6 italic">{testimonial.content}</p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                        <AvatarFallback>
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
