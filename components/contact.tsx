"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Github, 
  Instagram, 
  Code2, 
  Twitter,
  ExternalLink
} from "lucide-react"
import SectionHeading from "@/components/section-heading"

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4 md:px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss potential opportunities? Feel free to reach out!"
        />

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4 text-center md:text-left">Contact Information</h3>
                
                {/* Primary Contact Methods */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a 
                        href="mailto:mayankpiparde20@gmail.com" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        mayankpiparde20@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-sm text-muted-foreground">+91 (123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-sm text-muted-foreground">Indore, Madhya Pradesh, India</p>
                    </div>
                  </div>
                </div>
                
                {/* Social & Coding Platforms */}
                <div>
                  <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-center md:text-left">Connect With Me</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <SocialLink 
                      href="https://www.linkedin.com/in/mayankpiparde" 
                      title="LinkedIn" 
                      icon={<Linkedin className="h-4 w-4" />} 
                    />
                    <SocialLink 
                      href="https://github.com/MayankPiparde04" 
                      title="GitHub" 
                      icon={<Github className="h-4 w-4" />} 
                    />
                    <SocialLink 
                      href="https://www.instagram.com/_mayank_piparde_04_/" 
                      title="Instagram" 
                      icon={<Instagram className="h-4 w-4" />} 
                    />
                    <SocialLink 
                      href="https://x.com/MayankPiparde" 
                      title="X (Twitter)" 
                      icon={<Twitter className="h-4 w-4" />} 
                    />
                    <SocialLink 
                      href="https://www.hackerrank.com/profile/mayankpiparde20" 
                      title="HackerRank" 
                      icon={<Code2 className="h-4 w-4" />} 
                    />
                    <SocialLink 
                      href="https://leetcode.com/u/mayankpiparde/" 
                      title="LeetCode" 
                      icon={<Code2 className="h-4 w-4" />} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Helper component for social links
function SocialLink({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors group"
    >
      <div className="bg-primary/5 p-2 rounded-full shrink-0 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <span className="truncate">{title}</span>
      <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}
