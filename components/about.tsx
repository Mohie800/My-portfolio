"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, SlideInLeft, SlideInRight } from "./animations";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <ScrollReveal className="md:w-1/2 space-y-4">
            <motion.h2
              className="text-3xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <div className="space-y-4 text-muted-foreground">
              <SlideInLeft delay={0.1}>
                <p>
                  I&apos;m a passionate Front-End Developer with over 3 years of
                  experience building modern web applications. My journey into
                  software development began after transitioning from a
                  background in medicine (MBBS), bringing a unique perspective
                  to my work.
                </p>
              </SlideInLeft>
              <SlideInLeft delay={0.2}>
                <p>
                  I specialize in creating scalable front-end and SaaS
                  applications using React, Next.js, and TypeScript. My approach
                  combines technical expertise with a keen eye for design,
                  resulting in applications that are both functional and
                  user-friendly.
                </p>
              </SlideInLeft>
              <SlideInLeft delay={0.3}>
                <p>
                  When I&apos;m not coding, I enjoy exploring new technologies,
                  and continuously expanding my knowledge in the ever-evolving
                  world of web development.
                </p>
              </SlideInLeft>
            </div>
          </ScrollReveal>
          <SlideInRight className="md:w-1/2 flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/me.jpg?height=320&width=320"
                alt="Mohyeldeen Ali"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
